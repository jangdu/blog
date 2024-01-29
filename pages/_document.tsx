import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />

            {/* <!-- HTML Meta Tags --> */}
            <title>jangdu</title>
            <meta
              name='description'
              content='typescript-developer-jangdu'
            ></meta>

            {/* <!-- Facebook Meta Tags --> */}
            <meta property='og:url' content='https://blog.jangdu.co.kr'></meta>
            <meta property='og:type' content='website'></meta>
            <meta property='og:title' content='jangdu'></meta>
            <meta
              property='og:description'
              content='typescript-developer-jangdu'
            ></meta>
            <meta
              property='og:image'
              content='https://opengraph.b-cdn.net/production/documents/63df4ab4-f220-44f0-8f98-81aa3978cf03.jpg?token=2gYeGKWMbt2R2tsngBepMexDn-3HfX59oO7VQNkffhg&height=1600&width=1200&expires=33242536766'
            ></meta>

            {/* <!-- Twitter Meta Tags --> */}
            <meta name='twitter:card' content='summary_large_image'></meta>
            <meta property='twitter:domain' content='blog.jangdu.co.kr'></meta>
            <meta
              property='twitter:url'
              content='https://blog.jangdu.co.kr'
            ></meta>
            <meta name='twitter:title' content='jangdu'></meta>
            <meta
              name='twitter:description'
              content='typescript-developer-jangdu'
            ></meta>
            <meta
              name='twitter:image'
              content='https://opengraph.b-cdn.net/production/documents/63df4ab4-f220-44f0-8f98-81aa3978cf03.jpg?token=2gYeGKWMbt2R2tsngBepMexDn-3HfX59oO7VQNkffhg&height=1600&width=1200&expires=33242536766'
            >
              {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
            </meta>

            {/* <!-- Google Tag Manager --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M2CXCJ2C');
              `
              }}
            />

            <meta
              name='google-site-verification'
              content='r1atl1n8d-dMyiOL8vBtTB6q8kqmAGUDEcu6-cx4Roo'
            />
            <meta
              name='naver-site-verification'
              content='7edfd7666487628f1717cf8f5697663662ee101a'
            />

            {/* <!-- End Google Tag Manager --> */}
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=GTM-M2CXCJ2C`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
