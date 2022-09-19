<script lang="ts" setup>
import { NormalObject } from '@vunk/core'
import { ElSwitch, ElFormItem, ElForm } from 'element-plus'
import { ref } from 'vue'
import { loadStyleString } from '@vunk/core/shared/utils-dom'

const open = ref(false)
chrome.storage.sync.get('open', (e) => {
  open.value = !!e.open
})

const openChange = async (v: string | number | boolean) => {
  let tabs = await chrome.tabs.query({  // 获取当前激活的tab
    active: true,
    currentWindow: true, 
  })
  sendMessageToTabs(tabs, {
    open: v,
  })
}
function sendMessageToTabs (tabs: chrome.tabs.Tab[], data: NormalObject) {
  for (const tab of tabs) {

    if (tab.id)  {
      chrome.tabs
        .sendMessage(tab.id, data)
        .then((response) => {
          chrome.storage.sync.set({ open: open.value })

        })
    }
  }
}
loadStyleString(`.ex-form-x {
  width: 200px;
}`)
</script>
<template>
  <ElForm class="ex-form-x">
    <ElFormItem :label="'open cover: '">
      <ElSwitch 
        v-model="open"
        @change="openChange"
      ></ElSwitch>
    </ElFormItem>
  </ElForm>
 
</template>
