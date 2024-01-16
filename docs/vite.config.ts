/*
 * @Author: dushuai
 * @Date: 2024-01-15 17:49:15
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-16 12:02:56
 * @description: viteconfig
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vueJsx(),
      /**
       * 因为位置问题通过ElementPlusResolver自动按需导入打包时会err Unknown file extension ".css"
       * 测试发现 不用ElementPlusResolver 通过手动导入就不会报错
       */

      // AutoImport({
      //   resolvers: [
      //     ElementPlusResolver()
      //   ],
      // }),
      Components({
        resolvers: [
          // ElementPlusResolver(), 
          IconsResolver()
        ],
      }),
      Icons({
        autoInstall: true,
      })
    ]
  }
})
