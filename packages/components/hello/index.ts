import { App } from 'vue'
import VkHello from './src/index.vue'
export * as __VkHello from './src/types'

VkHello.install = (app: App): void => {
  app.component(VkHello.name, VkHello)
}
export {
  VkHello,
}
export default VkHello
