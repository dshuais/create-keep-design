import * as components from '../components/index'

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // KButton: typeof import('keep-design')['KButton']
    KButton: typeof components['KButton'],
    KTypewriter: typeof components['KTypewriter']
  }

  interface ComponentCustomProperties { }
}

export { }
