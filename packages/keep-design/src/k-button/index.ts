/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 16:38:37
 * @Description: 组件导出文件
 */
// import Button from './k-button.vue';
import Button from './k-button.tsx'
import { withInstall } from '../utils/install'
export * from './types'

export const KButton = withInstall(Button);
export default KButton;
