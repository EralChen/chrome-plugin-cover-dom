<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
  
const el = ref<HTMLElement | null>(null)
const ready = ref(false)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
const height = ref(40)
const vw = ref(60)
const handleHeight = (e: WheelEvent) => {
  e.stopPropagation()
  e.preventDefault()
  if (height.value <= 20) return
  height.value += e.deltaY / 40
}

// 监听 'message' 事件；当消息从扩展程序或者内容脚本中发送时，就执行对应的事件处理器。
chrome.runtime.onMessage
  .addListener(function (
    message, 
    sender, 
    sendResponse,
  ) {

    ready.value = message.open
    
    // 当 popup 发送信息过来到 contentScripts 时，这里返回一个响应内容给 popup
    // 数据将由 sendMessage() 的第三个参数：callback function 的第一参数接收。
    sendResponse('set ready is' + message.open)
  })

</script>
  
<template>
  <div 
    class="cover-dom-main" 
    ref="el" 
    v-if="ready"
    :style="style + `height: ${height}px;` + `width: ${vw}vw`" 
    style="position: absolute;"
    @click="vw+=2"
    @contextmenu.prevent="vw-=2"
    @wheel="handleHeight"
    
  >
  </div>
</template>
