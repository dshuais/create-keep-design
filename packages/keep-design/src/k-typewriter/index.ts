/*
 * @Author: dushuai
 * @Date: 2024-01-02 16:36:19
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 16:11:38
 * @description: 组件导出文件
 */
import Typewriter from './k-typewriter.vue';
import { withInstall } from '../utils/install';
export * from './k-typewriter'

export const KTypewriter = withInstall(Typewriter);
export default KTypewriter;

