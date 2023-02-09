const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Jasmine Zhong',
    image: 'api/svg/eyJmYWNlIjo5LCJub3NlIjoxMywibW91dGgiOjYsImV5ZXMiOjksImV5ZWJyb3dzIjo2LCJnbGFzc2VzIjowLCJoYWlyIjoyMiwiYWNjZXNzb3JpZXMiOjIsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Msc student',
    bio: 'Þ𝗮𝘂 𝗵𝗮𝗳𝗮 𝘀𝗹𝗼𝗽𝗽𝗶ð 𝘂𝗻𝗱𝗮𝗻 þ𝘂𝗻𝗴𝗮 𝗺𝘆𝗿𝗸𝘂𝗿𝘀𝗶𝗻𝘀.',
    email: 'zhongwj0105@163.com',
    linkedin: 'JasmineZHONG',
    github: 'JasmineZHONG',
    instagram: '',
  },
  projects: [
    {
      name: `Jasmine’s log`,
      href: 'https://github.com/JasmineZHONG/morethan-log.git'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Jasmine’s log',
    description: 'welcome to Jasmine’s log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://Jasmine‘s log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'Jasmine/Jasmine’s log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
