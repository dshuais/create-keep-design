<!--
 * @Author: dushuai
 * @Date: 2024-01-15 12:27:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-15 16:30:31
 * @description: 自写 Demo 容器
-->
<script lang="ts" setup>
import { demos, sources } from '../../../examples'

type DemoProps = {
  source: string,
  path: string,
  rawSource: string,
  description: string
}
const props = defineProps<DemoProps>()


console.log(demos, sources);


</script>
<template>
  <ClientOnly>
    <div>
      123
    </div>
  </ClientOnly>
</template>
<style scoped lang="scss"></style>
