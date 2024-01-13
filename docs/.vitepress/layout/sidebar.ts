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
}
