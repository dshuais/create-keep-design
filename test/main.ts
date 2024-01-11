/*
 * @Author: dushuai
 * @Date: 2024-01-02 15:44:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-11 17:12:16
 * @description: 入口
 */
import { createApp } from 'vue';
import App from './App.vue';
import { KButton } from 'keep-design'
// import keepDesign from 'keep-design'
// console.log(KButton);
// console.log(keepDesign);

const app = createApp(App);

// app.use(keepDesign)
app.use(KButton)
// .use(KTypewriter)
app.mount('#app');
