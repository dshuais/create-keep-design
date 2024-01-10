<!--
 * @Author: dushuai
 * @Date: 2023-12-30 18:03:18
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 16:38:44
 * @Description: button组件
-->
<script setup lang="ts">
import { computed } from 'vue';
import type { KButtonProps, KButtonEmits } from './types';
import './style/index.scss';
defineOptions({
  name: 'k-button'
});

const buttonProps = defineProps<KButtonProps>();
const emit = defineEmits<KButtonEmits>();

const buttonClass = computed(() => {
  return { [`k-button--${buttonProps.type}`]: buttonProps.type };
});

function handleClick() {
  emit('click');
}
</script>
<template>
  <button class="k-button" :class="buttonClass" @click="handleClick">
    <slot />
  </button>
</template>
