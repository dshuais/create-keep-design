/*
 * @Author: dushuai
 * @Date: 2024-01-09 14:09:07
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 14:16:13
 * @description: 发布 提交 打tag脚本
 */
import shell from 'shelljs';
import gulp from 'gulp'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'

const { series } = gulp

/**
 * 组件库components目录
 */
const KeepPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../../KEEP_DESIGN/')

/**
 * 执行release-it
 */
export const publishComponent = async () => {
  shell.cd(KeepPath)
  shell.exec('pnpm release')
}

export default series(publishComponent)
