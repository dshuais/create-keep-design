/*
 * @Author: dushuai
 * @Date: 2024-01-26 16:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-23 14:22:07
 * @description: Logo
 */
import styles from './index.module.css'

export default defineComponent({
  name: 'Logo',
  setup() {

    const dom = ref<HTMLDivElement>()

    onMounted(() => {
      dom.value?.classList.add('animate__jello', 'animate__animated')
      animate()
    })

    function animate() {
      dom.value?.addEventListener('animationend', () => {
        dom.value?.classList.remove('animate__jello', 'animate__animated')
        setTimeout(() => {
          dom.value?.classList.add('animate__jello', 'animate__animated')
          animate()
        }, 3000);
      }, { once: true })
    }

    return () => (
      <div ref={dom} class={['flex', styles.logo]}>
        {/* <img height="25" width="25" src="/logo.svg"> */}
        <h3 class={['text-base ml-2 font-bold', styles['logo-text']]}>
          <span class="mr-3 inline-block">Create</span><span class="text font-semibold">KeepDesign</span>
          {/* <span>dshuais'</span> */}
        </h3>
      </div>
    )
  }
})
