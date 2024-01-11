declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KButton: typeof import('keep-design')['KButton'],
    KTypewriter: typeof import('keep-design')['KTypewriter']
  }

  interface ComponentCustomProperties { }
}

export { }
