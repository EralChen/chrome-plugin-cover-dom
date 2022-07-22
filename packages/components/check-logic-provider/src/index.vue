<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, getCurrentInstance, provide } from 'vue'
export default defineComponent({
  name: 'VkCheckLogicProvider',
  emits,
  props,
  setup (props) {
    const vm = getCurrentInstance()
    provide(props.provideKey, vm)
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
