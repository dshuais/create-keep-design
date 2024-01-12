<!--
 * @Author: dushuai
 * @Date: 2023-12-30 17:53:17
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-12 11:59:02
 * @Description: App
-->
<script setup lang="ts">
// import { KButton } from '@keep-design/components';
// import type { KButtonInstance } from '@keep-design/components'
// import KButton from '@keep-design/components/src/k-button'
// import { KButton } from 'keep-design'
import type { KButtonInstance } from 'keep-design'
import { onMounted, ref } from 'vue';

const buttonRef = ref<KButtonInstance>()

onMounted(() => {
  console.log('buttonRef:>> ', buttonRef.value);
})


</script>

<template>
  <div>启动测试</div>
  <KButton>引入挂载</KButton>
  <KButton type="primary">引入挂载</KButton>
  <div>主要</div>
  <KButton type="primary">引入挂载</KButton>

  <!-- <div>全局挂载</div> -->
  <k-button ref="buttonRef" type="primary">全局挂载</k-button>
  <k-button>123</k-button>
</template>
<style scoped lang="scss">
.k-button {
  color: red;
}
</style>