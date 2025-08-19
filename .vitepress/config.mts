import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir:'docs',
  head:[
    ['link', { rel: 'icon', href: '/hunter/favicon.ico' }],
  ],
  base: '/hunter',
  title: "Telegram Hunter",
  description: "Telegram Hunter is a smart tool that helps you capture potential customers on Telegram.",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig:{
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '使用教程', link: '/zh/guide' }
        ],
        sidebar: [
          { text: '使用教程', link: '/zh/guide' }
        ],
      }
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      { text: 'Guide', link: '/guide' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yee338024/telegram-hunter' }
    ]
  }
})
