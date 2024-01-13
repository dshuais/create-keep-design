import { defineConfig } from 'vitepress'
import { nav } from './layout'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Keep Design",
  description: "UI Components built on Vue 3",
  themeConfig: {
    logo: "/image/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dshuais/keep-design' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT <a href="https://github.com/dshuais">dshuais</a>'
    },

    // 页面修改链接
    editLink: {
      pattern:
        "https://github.com/dshuais/keep-design/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    // 配置目录结构
    outline: {
      level: [2, 6],
      label: "目录",
    },

    // 配置algolia
    // algolia: {
    //   appId: "SEZUOVJ0WE",
    //   apiKey: "86302ba55696b811ec708fcf5dcb2d44",
    //   indexName: "danmaku-vue.dshuais",
    // },
    // 本地搜索
    search: {
      provider: "local",
      options: {}
    }
  },

  // 开启最后更改时间
  lastUpdated: true
})
