<!--
 * @Author: dushuai
 * @Date: 2024-01-15 12:27:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-15 16:57:48
 * @description: 自写 Demo 容器
-->
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { demos, sources } from '../../../examples'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

type DemoProps = {
  source: string,
  path: string,
  rawSource: string,
  description: string
}
const props = defineProps<DemoProps>()

/**
 * 格式化 Demo 数据
 */
const formatPathDemos = computed(() => {
  const obj = {}
  Object.keys(demos || {}).forEach(key => {
    obj[key.replace('./', '').replace('.vue', '')] = demos[key].default
  })
  return obj
})

/**
 * 源码
 */
const decodedSource = computed<string>(() => decodeURIComponent(props.source))
/**
 * info
 */
const decodedDescription = computed<string>(() => decodeURIComponent(props.description))
/**
 * 源码是否显示
 */
const sourceVisible = ref<boolean>(false)

console.log(demos, sources);


</script>
<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

    </div>

  </ClientOnly>
</template>
<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: 3px;

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
