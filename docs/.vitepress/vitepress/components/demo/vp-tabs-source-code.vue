<script setup lang="ts">
import { computed, PropType, ref } from 'vue'

const props = defineProps({
  data: {
    type: Array as PropType<{
      path: string,
      source: string
    }[]>,
    required: true,
  },
})

const active = ref(props.data[0].path)
console.log(props.data)
</script>

<template>
<div class="example-source-wrapper">
  <ElTabs  v-model="active">
    <ElTabPane v-for="item of data" :key="item.path" 
    :name="item.path" 
    :label="item.path">
      <div class="example-source language-vue" v-html="item.source" />
    </ElTabPane>
  </ElTabs>
</div>
</template>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>
