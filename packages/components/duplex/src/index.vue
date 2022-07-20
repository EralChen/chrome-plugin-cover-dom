<script lang="ts">
import props from './props'
import { computed, defineComponent, StyleValue } from 'vue'
export default defineComponent({
  name: 'VkDuplex',
  props,
  setup (props) {

    const style = computed(() => {
      return {
        '--vk-duplex-overflow': props.overflow,
        '--vk-duplex-flex': props.flex,
      } as StyleValue
    })
    
    return {
      style,
    }
  },
})
</script>
<template>
  <div class="vk-duplex" :style="style">

    <div class="vk-duplex-1">
      <slot name="one"></slot>
    </div>

    <div class="vk-duplex-2">
      <slot name="two"></slot>
      <slot></slot>
    </div>

  </div>
</template>
<style>
[class^="vk-duplex-"].with-flex {
  flex: var(--vk-duplex-flex);
}
[class^="vk-duplex-"].with-overflow {
  flex: var(--vk-duplex-overflow);
}
</style>
