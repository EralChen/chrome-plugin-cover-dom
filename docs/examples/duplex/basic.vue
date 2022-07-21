<template>
<div flex>

  <VkDuplex class="duplex-demo">
    <template #one>
      <div>header</div>
    </template>
    <template #two>
      body
    </template>
  </VkDuplex>

  <VkDuplex class="duplex-demo" :withFlex="'one'">
    <template #one>
      <div>body</div>
    </template>
    <template #two>
      footer
    </template>
  </VkDuplex>

  <VkDuplex class="duplex-demo" :withFlex="'both'">
    <template #one>
      <div>half</div>
    </template>
    <template #two>
      half
    </template>
  </VkDuplex>

</div>

</template>

<style scoped>
.duplex-demo{
  width: 100%;
  height: 300px;
  border: 2px dashed gray;
}
.duplex-demo :deep(.vk-duplex-2){
  background-color: var(--el-color-primary);
}
</style>