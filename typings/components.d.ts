// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VkDuplex: typeof import('../packages/entry')['VkDuplex']
    VkCheckLogic: typeof import('../packages/entry')['VkCheckLogic']
    VkCheckLogicProvider: typeof import('../packages/entry')['VkCheckLogicProvider']
  }

  // interface ComponentCustomProperties {
    
  // }
}

export {}
