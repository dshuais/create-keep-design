/*
 * @Author: dushuai
 * @Date: 2023-12-30 17:56:58
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 20:54:35
 * @Description: 描述
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
}
