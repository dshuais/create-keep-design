/*
 * @Author: dushuai
 * @Date: 2024-01-08 10:40:03
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 10:56:36
 * @description: 组件类型声明文件
 */
import _Typewriter from './k-typewriter.vue';

/**
 * 定义instance类型
 */
export type KTypewriterInstance = InstanceType<typeof _Typewriter>;

/**
 * 定义props类型
 */
export type KTypewriterProps = {
  type?: string;
};

/**
 * 定义emit类型
 */
export type KTypewriterEmits = {
  (e: 'click'): void;
};
