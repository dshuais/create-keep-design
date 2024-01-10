/*
 * @Author: dushuai
 * @Date: 2024-01-10 15:16:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 16:56:30
 * @description: jsx实现button组件
 */
import { defineComponent, h } from 'vue' // 导入h避免jsx渲染报错
import styles from './style/k-button.module.scss'

export default defineComponent({
  name: 'k-button',
  setup() {

    // const buttonClass = computed(() => {
    //   return { [`k-button--${buttonProps.type}`]: buttonProps.type };
    // });

    function handleClick() {
      // emit('click');
      console.log('点击');
    }

    return () => (
      <button class={styles['k-button']} onClick={handleClick}>
        <slot />
      </button>
    )
  }
})
