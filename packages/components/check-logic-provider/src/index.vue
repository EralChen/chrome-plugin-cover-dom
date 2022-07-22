<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VkCheckLogicProvider',
  emits,
  props,
  setup (props, { emit }) {
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
