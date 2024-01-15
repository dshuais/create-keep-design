<!--
 * @Author: dushuai
 * @Date: 2024-01-15 16:43:25
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-15 17:04:28
 * @description: example demo
-->
<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
}
</style>