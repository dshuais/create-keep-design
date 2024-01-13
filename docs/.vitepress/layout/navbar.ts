import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  // { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/001_keepdesign', activeMatch: '/guide/' },
  { text: 'Components', link: '/components/', activeMatch: '/components/' },
  { text: 'Composition API', link: '/api/', activeMatch: '/api/' },
  { text: "Changelog", link: "/changelog/", activeMatch: '/changelog/' },
  { text: "More", link: "/more/", activeMatch: '/more/' },
  {
    text: "About",
    items: [
      { text: "Github", link: "https://github.com/dshuais" },
      { text: "掘金", link: "https://juejin.cn/user/3158230569584056/columns" },
      { text: "CSDN", link: "https://blog.csdn.net/m0_59206508" },
    ],
  }
]
