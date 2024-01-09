/*
 * @Author: dushuai
 * @Date: 2024-01-02 15:44:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 18:40:19
 * @description: 入口
 */
import { createApp } from 'vue';
import App from './App.vue';
// import keepDesign from '@keep-design/components'
// import { KButton } from '@keep-design/components/src/k-button'
// console.log(KButton);
// console.log(keepDesign);



const app = createApp(App);

// app.use(keepDesign);
// app.use(KButton)
// .use(KTypewriter)
app.mount('#app');
