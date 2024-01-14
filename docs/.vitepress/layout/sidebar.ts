import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: 'Introduction',
      items: [
        {
          text: '什么是 keep-design?',
          link: '/guide/001_keepdesign'
        },
        {
          text: '快速开始',
          link: '/guide/002_getting-started'
        },
      ]
    }
  ],
  '/components/': [
    {
      text: '组件总览',
      link: '/components/'
    },
    {
      text: 'Basic 基础组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
      ]
    }
  ],
}
