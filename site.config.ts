import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'jangdu-067a6ee3bbc642b09e76967cfbaccf5c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'jangdu-blog',
  domain: 'blog.jangdu.me',
  author: 'jangdu',

  // open graph metadata (optional)
  description: 'typescript-developer-jangdu',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'jangdu',
  linkedin: '두혁-장-24817026b',
  instagram: 'jang_du',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg',
  defaultPageCover:
    'https://res.cloudinary.com/dyhnnmhcf/image/upload/v1706710430/07FE9B2A-F875-4E4D-8E5E-C56DB3613C3A_1_105_c_ft7bhh.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'About-e69b5c43a2c947ba8d1395f2724d615f'
    },
    {
      title: 'Contact',
      pageId: 'Contact-4436e90696ec492fa7c05ddec9102d13'
    }
  ]
})
