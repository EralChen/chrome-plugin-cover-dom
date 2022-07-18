import { App } from 'vue'
import VkTabGroup from './src/index.vue'
export * as _VkTabGroupSymbol from './src/symbol'
VkTabGroup.install = (app: App): void => {
  app.component(VkTabGroup.name, VkTabGroup)
}
export {
  VkTabGroup,
}
export default VkTabGroup
