import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'fa9cfdb0597347e9ac4dd34200bc10d2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '7e5675fb-db63-495a-962f-33b313515351',

  // basic site info (required)
  name: 'Alex Chaveriat',
  domain: 'alexchaveriat.com',
  author: 'Alex Chaveriat',

  // open graph metadata (optional)
  description:
    "Alex Chaveriat's personal site exploring the ideas, strategies, and tools that help us as hackers live happier, healthier, and more innovative lives.",

  // social usernames (optional)
  twitter: 'alexchaveriat',
  github: 'si1k',
  // linkedin: 'alex-chaveriat',
  youtube: 'alexchaveriat',
  newsletter: 'https://newsletter.alexchaveriat.com',

  // Custom logo - this will replace the breadcrumbs
  customHeaderLogo: 'https://alexchaveriat.com/logo.png',
  customHeaderLogoDark: 'https://alexchaveriat.com/logo-dark.png', // optional

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://alexchaveriat.com/page-icon.png',
  defaultPageCover: 'https://alexchaveriat.com/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // pageUrlAdditions: {
  //   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  // },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'e9ee283cf81348929f2d60de5414f88b'
    },
    {
      title: 'Contact',
      pageId: 'e78974b1e9e64e3b9ee0c14b6370983e'
    }
  ]
})
