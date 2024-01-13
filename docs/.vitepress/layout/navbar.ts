import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  // { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  { text: 'Components', link: '/components/' },
  { text: 'Composition API', link: '/api/' },
  { text: "Changelog", link: "/changelog/" },
  { text: "More", link: "/more/" },
  {
    text: "About",
    items: [
      { text: "Github", link: "https://github.com/dshuais" },
      { text: "掘金", link: "https://juejin.cn/user/3158230569584056/posts" },
      { text: "CSDN", link: "https://blog.csdn.net/m0_59206508" },
    ],
  }
]
