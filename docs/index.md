---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Keep Design'
  text: '一款个性化前端组件库'
  tagline: UI component library built on Vue 3 + TypeScript
  image:
    src: /image/logo.png
    alt: Keep Design
  actions:
    - theme: brand
      text: Get Started
      link: /guide/002_getting-started
    - theme: alt
      text: Components
      link: /components/
    - theme: alt
      text: View on GitHub
      link: https://github.com/dshuais/keep-design

features:
  - title: 按需引入
    icon: ⚡
    details: 每一个组件都可单独引入，并有着良好的 tree-shaking 优化
    link: /guide/002_getting-started#按需引入
  - title: 支持TypeScript
    icon: 🖖
    details: 使用 Typescript 构建，提供良好的组件类型系统
    link: /guide/002_getting-started#TypeScript
  - title: 配套完善
    icon: 📦
    details: 配套的插件、文档、示例、测试用例等，让开发更轻松
    link: /guide/002_getting-started#配套完善
---
