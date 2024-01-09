/*
 * @Author: dushuai
 * @Date: 2024-01-08 10:40:03
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-08 10:46:20
 * @description: 组件类型声明文件
 */
import _Button from './k-button.vue';

/**
 * 定义instance类型
 */
export type KButtonInstance = InstanceType<typeof _Button>;

/**
 * 定义props类型
 */
export type KButtonProps = {
  type?: string;
};

/**
 * 定义emit类型
 */
export type KButtonEmits = {
  (e: 'click'): void;
};
