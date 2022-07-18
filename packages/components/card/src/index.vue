<script lang="ts">
import props from './props'
import { computed, defineComponent, StyleValue } from 'vue'
export default defineComponent({
  name: 'VkCard',
  props,
  setup (props) {
    const style = computed(() => {
      return {
        '--vk-card-overflow': props.overflow,
      } as StyleValue
    })
    return {
      style,
    }
  },
})
</script>
<template>
  <div class="vk-card" :style="style">
    <component :is="tag" class="vk-card-title">
      <slot name="title"></slot>
    </component>
    <div class="vk-card-body">
       <slot></slot>
    </div>
  </div>
</template>
<style>
.vk-card{
  display: flex;
  flex-direction: column;
}
.vk-card-title{
  flex-shrink: 0;
}
.vk-card-body{
  flex: 1;
  overflow: var(--vk-card-overflow);
}
</style>