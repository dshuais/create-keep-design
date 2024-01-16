<!--
 * @Author: dushuai
 * @Date: 2024-01-15 12:27:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-16 12:03:37
 * @description: 自写 Demo 容器
-->
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { demos, sources } from '../../../examples'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import { CaretTop } from '@element-plus/icons-vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { ElMessage, ElCollapseTransition, ElTooltip, ElIcon } from 'element-plus'
import 'element-plus/theme-chalk/index.css'

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

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const copyCode = async () => {
  if (!isSupported) {
    ElMessage({
      message: '复制失败',
      type: 'error',
    })
  }
  try {
    await copy()
    ElMessage({
      message: '复制成功',
      type: 'success',
    })
  } catch (e: any) {
    ElMessage({
      message: '复制失败',
      type: 'error',
    })
  }
}

const [sourceVisible, toggleSourceVisible] = useToggle()


const demoSourceUrl = 'https://github.com/'

</script>
<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <div class="k-divider"></div>

      <div class="op-btns">
        <ElTooltip content="在 Github 上编辑" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
          <ElIcon :size="16" class="op-btn github" style="color: var(--text-color-light)">
            <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
              <i-ri-github-line />
            </a>
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="复制代码" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
          <ElIcon :size="16" class="op-btn" tabindex="0" role="button" @click="copyCode" @keydown.prevent.enter="copyCode"
            @keydown.prevent.space="copyCode">
            <i-ri-file-copy-line />
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="查看源代码" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
          <button ref="sourceCodeRef" class="reset-btn el-icon op-btn" @click="toggleSourceVisible()">
            <ElIcon :size="16">
              <i-ri-code-line />
            </ElIcon>
          </button>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div v-show="sourceVisible" class="example-float-control" tabindex="0" role="button"
          @click="toggleSourceVisible()">
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>隐藏代码</span>
        </div>
      </Transition>

    </div>
  </ClientOnly>
</template>
<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: 3px;

  .k-divider {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0;
    border-top: 1px solid var(--border-color);
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    &-icon {
      margin-left: 10px;
    }

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
    background-color: var(--vp-c-bg);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--vp-c-text-2);
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
      color: var(--vp-c-brand-1);
    }
  }
}

.k-fade-in-linear-enter-active,
.k-fade-in-linear-leave-active {
  transition: all .3s;
}

.k-fade-in-linear-enter-from,
.k-fade-in-linear-leave-to {
  opacity: 0;
}
</style>
