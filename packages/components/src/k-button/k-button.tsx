/*
 * @Author: dushuai
 * @Date: 2024-01-10 15:16:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 17:59:52
 * @description: jsx实现button组件
 */
import { defineComponent, h } from 'vue' // 导入h避免jsx渲染报错
import { KButtonProps, KButtonEmits } from './types'
import { cln } from '../utils'
import './style/index.scss'

export default defineComponent({
  name: 'k-button',
  props: {
    type: {
      type: String,
      required: false
    }
  },
  emits: ['click'],
  setup(props: KButtonProps, { emit, slots }) {

    const classes = cln('button', [props.type])

    function handleClick() {
      emit('click');
    }

    return () => (
      <button class={classes} onClick={handleClick}>
        {slots.default ? slots.default() : 'default'}
      </button>
    )
  }
})
