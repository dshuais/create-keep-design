# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

:::demo 使用 `type` 来定义按钮的样式。

button/basic

:::

## Button Api

### Button Attributes

| 属性名 | 说明 |   类型   | 可选值  | 默认值 |
| :----: | :--: | :------: | :-----: | :----: |
|  type  | 类型 | `string` | primary |   —    |

### Button Events

| 事件名 |      说明      | 回调参数 |
| :----: | :------------: | :------: |
| click  | 点击按钮时触发 |    —     |

### Button Slots

| 插槽名  |      说明      |
| :-----: | :------------: |
| default | 自定义默认内容 |

### Button Types

|     类型名      |        类型         |    说明    |
| :-------------: | :-----------------: | :--------: |
| KButtonInstance | `HTMLButtonElement` |  按钮实例  |
|  KButtonProps   |   `KButtonProps`    | 按钮 Props |
