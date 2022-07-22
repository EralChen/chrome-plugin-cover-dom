import { VkDuplex } from '@vunk-core/components/duplex'
import { VkCheckLogic } from '@vunk-core/components/check-logic'
import { VkCheckLogicProvider } from '@vunk-core/components/check-logic-provider'
import type { Plugin } from 'vue'

export default [
  VkDuplex,
  VkCheckLogic,
  VkCheckLogicProvider,
] as Plugin[]
