/*
 * @Author: dushuai
 * @Date: 2023-12-30 17:52:01
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-11 10:53:53
 * @Description: vite.config
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: [
    //     KeepDesignResolver()
    //   ]
    // }),
    // AutoImport({
    //   resolvers: [
    //     KeepDesignResolver()
    //   ]
    // })
  ]
});
