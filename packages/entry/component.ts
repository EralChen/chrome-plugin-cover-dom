import { VkDuplex } from '@vunk-skzz/components/duplex'
import { VkCheckLogic } from '@vunk-skzz/components/check-logic'
import { VkCheckLogicProvider } from '@vunk-skzz/components/check-logic-provider'
import type { Plugin } from 'vue'

export default [
  VkDuplex,
  VkCheckLogic,
  VkCheckLogicProvider,
] as Plugin[]
