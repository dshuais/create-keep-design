/*
 * @Author: dushuai
 * @Date: 2024-01-08 10:30:54
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 18:33:55
 * @description: 组件导入方法
 */
import type { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;

/**
 * 自动注册组件
 * @param main 组件
 * @param extra 
 * @returns 
 */
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

/**
 * 组件安装
 * @param components 
 * @returns 
 */
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    console.log(components)
    components.forEach((c) => app.use(c))
  }
  return {
    install,
  }
}
