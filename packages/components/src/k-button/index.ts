/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 16:11:33
 * @Description: 组件导出文件
 */
import Button from './k-button.vue';
import { withInstall } from '../utils/install'
export * from './k-button'

export const KButton = withInstall(Button);
export default KButton;
