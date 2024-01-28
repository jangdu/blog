import React from 'react'

import styles from './styles.module.css'

export type MappingType =
  | 'pathname'
  | 'url'
  | 'title'
  | 'og:title'
  | 'issue-number'
  | 'issue-term'

export type Theme =
  | 'light'
  | 'dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'

interface ReactUtterancesProps {
  repo: string
  issueMap: MappingType
  issueTerm?: string
  issueNumber?: number
  label?: string
  theme: Theme
}

interface ReactUtterancesState {
  pending: boolean
}

export class ReactUtterances extends React.Component<
  ReactUtterancesProps,
  ReactUtterancesState
> {
  reference: React.RefObject<HTMLDivElement>

  constructor(props: ReactUtterancesProps) {
    super(props)

    if (props.issueMap === 'issue-term' && props.issueTerm === undefined) {
      throw Error(
        "Property 'issueTerm' must be provided with issueMap 'issue-term'"
      )
    }

    if (props.issueMap === 'issue-number' && props.issueNumber === undefined) {
      throw Error(
        "Property 'issueNumber' must be provided with issueMap 'issue-number'"
      )
    }

    this.reference = React.createRef<HTMLDivElement>()
    this.state = { pending: true }
  }

  componentDidMount(): void {
    const { repo, issueMap, issueTerm, issueNumber, label, theme } = this.props
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://giscus.app/client.js'
    scriptElement.setAttribute('data-repo', repo)
    scriptElement.setAttribute('data-repo-id', 'R_kgDOLKn9nQ')
    scriptElement.setAttribute('data-category', 'Comments')
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOLKn9nc4CcwCC')
    scriptElement.setAttribute('data-mapping', 'pathname')
    scriptElement.setAttribute('data-strict', '0')
    scriptElement.setAttribute('data-reactions-enabled', '1')
    scriptElement.setAttribute('data-emit-metadata', '0')
    scriptElement.setAttribute('data-input-position', 'bottom')
    scriptElement.setAttribute('data-theme', theme)
    scriptElement.setAttribute('data-lang', 'ko')
    scriptElement.setAttribute('crossorigin', 'anonymous')
    scriptElement.async = true
    scriptElement.defer = true
    scriptElement.onload = () => this.setState({ pending: false })

    if (label) {
      scriptElement.setAttribute('label', label)
    }

    if (issueMap === 'issue-number') {
      scriptElement.setAttribute('issue-number', issueNumber!.toString())
    } else if (issueMap === 'issue-term') {
      scriptElement.setAttribute('issue-term', issueTerm!)
    } else {
      scriptElement.setAttribute('issue-term', issueMap)
    }

    // TODO: Check current availability
    this.reference.current!.appendChild(scriptElement)
  }

  render(): React.ReactElement {
    return (
      <div className={styles.comments}>
        <div className={styles.utterances} ref={this.reference}>
          <>{this.state.pending && <p>Loading Comments...</p>}</>
        </div>
      </div>
    )
  }
}
