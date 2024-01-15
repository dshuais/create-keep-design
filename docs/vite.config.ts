/*
 * @Author: dushuai
 * @Date: 2024-01-15 15:14:00
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-15 15:30:42
 * @description: 心平气和
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    port: 7788
  }
})
