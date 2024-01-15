/*
 * @Author: dushuai
 * @Date: 2024-01-15 11:08:10
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-15 16:30:49
 * @description: 拿到.vue文件 和 源码
 */

export const demos = import.meta.glob('./**/*.vue', { eager: true })

export const sources = import.meta.glob('./**/*.vue', { as: 'raw', eager: true })

