import { App } from 'vue'
import VkDuplex from './src/index.vue'

VkDuplex.install = (app: App): void => {
  app.component(VkDuplex.name, VkDuplex)
}
export {
  VkDuplex,
}
export default VkDuplex
