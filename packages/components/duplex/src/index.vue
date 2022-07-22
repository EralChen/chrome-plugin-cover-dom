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
        '--vk-duplex-direction': props.direction,
        '--vk-duplex-gap': props.gap,
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
    <div class="vk-duplex-1" :class="{
      'with-flex': withFlex === 'both' || withFlex === 'one',
      'with-overflow': withOverflow === 'both' || withOverflow === 'one'
    }">

      <slot name="one"></slot>
    </div>
    <div class="vk-duplex-2"
      :class="{
        'with-flex': withFlex === 'both' || withFlex === 'two',
        'with-overflow': withOverflow === 'both' || withOverflow === 'two'
      }"
    >
      <slot name="two"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<style>
.vk-duplex{
  display: flex;
  flex-direction: var(--vk-duplex-direction);
  gap: var(--vk-duplex-gap);
}
.vk-duplex-line{
  height: 2px;
  background-color: red;
}

[class^="vk-duplex-"].with-flex {
  flex: var(--vk-duplex-flex);
}
[class^="vk-duplex-"].with-overflow {
  overflow: var(--vk-duplex-overflow);
}
</style>
