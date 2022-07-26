<script lang="ts" setup>
import { ref } from 'vue'
import { getTestJson } from './api'
const name = ref('')
getTestJson().then(res => name.value = res)
</script>
<template>
  <div>{{ name }}</div>
</template>