<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
  
const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
const height = ref(40)
const vw = ref(60)
const handleHeight = (e: WheelEvent) => {
  height.value += e.deltaY / 40
}

</script>
  
<template>
  <div 
    class="cover-dom-main" 
    ref="el" 
    
    :style="style + `height: ${height}px;` + `width: ${vw}vw`" 
    style="position: absolute;"
    @click="vw+=2"
    @contextmenu="$event.preventDefault();vw-=2"
    @wheel="handleHeight"
  >
  </div>
</template>
