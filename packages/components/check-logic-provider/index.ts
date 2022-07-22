import { App } from 'vue'
import VkCheckLogicProvider from './src/index.vue'
export * as __VkCheckLogicProvider from './src/types'

VkCheckLogicProvider.install = (app: App): void => {
  app.component(VkCheckLogicProvider.name, VkCheckLogicProvider)
}
export {
  VkCheckLogicProvider,
}
export default VkCheckLogicProvider
