/*
 * @Author: dushuai
 * @Date: 2024-01-08 18:41:49
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 10:04:50
 * @description: 构建脚本
 */
import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import shell from 'shelljs'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'

const { src, dest, series } = gulp
const sass = gulpSass(dartSass)
/**
 * 组件库components目录
 */
const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../')
/**
 * 组件库packages目录
 */
const pkgPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../../')

// 删除打包产物
export const removeDist = async () => {
  shell.rm('-rf', `${pkgPath}/KEEP_DESIGN/lib`)
  shell.rm('-rf', `${pkgPath}/KEEP_DESIGN/es`)
  shell.rm('-rf', `${pkgPath}/KEEP_DESIGN/types`)
}

// 构建css
// export const buildRootStyle = () => {
//   return src(`${componentPath}/src/style.scss`)
//     .pipe(sass())
//     .pipe(
//       autoprefixer()
//     )
//     .pipe(dest(`${componentPath}/es`))
//     .pipe(dest(`${componentPath}/lib`))
// }

// 构建每个组件下单独的css
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(
      autoprefixer()
    )
    .pipe(dest(`${pkgPath}/KEEP_DESIGN/es/src`))
    .pipe(dest(`${pkgPath}/KEEP_DESIGN/lib/src`))
}

// 打包组件
export const buildComponent = async () => {
  shell.cd(componentPath)
  shell.exec('pnpm build')
}

export default series(removeDist, buildComponent, buildStyle)
