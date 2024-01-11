/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'vue' {
  export interface GlobalComponents {
    KButton: typeof import('keep-design')['KButton'],
    KTypewriter: typeof import('keep-design')['KTypewriter']
  }
}

export { }
