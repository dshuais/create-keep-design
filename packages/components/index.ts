/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:57
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 16:11:57
 * @Description: 导出组件index入口
 */
import * as components from './src/index';
import { App } from 'vue';

export * from './src/index';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c as keyof typeof components]);
    }
  }
};
