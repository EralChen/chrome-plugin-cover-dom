import { App } from 'vue'
import VkCheckLogic from './src/index.vue'
export * as __VkCheckLogic from './src/types'

VkCheckLogic.install = (app: App): void => {
  app.component(VkCheckLogic.name, VkCheckLogic)
}
export {
  VkCheckLogic,
}
export default VkCheckLogic
