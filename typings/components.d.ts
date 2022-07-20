// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VkDuplex: typeof import('../packages/entry')['VkDuplex']

  }

  // interface ComponentCustomProperties {
    
  // }
}

export {}
