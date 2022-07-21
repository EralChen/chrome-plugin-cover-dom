<template>
  <div flex>

    <VkDuplex class="duplex-demo" :overflow="'auto'">
      <template #one>
        <div>header</div>
      </template>
      <template #two>
        <div v-for="i in 50" :key="i">
          body <br />
        </div>
      </template>
    </VkDuplex>

    <VkDuplex class="duplex-demo" :withFlex="'one'">
      <template #one>

        <ElScrollbar>
          <div v-for="i in 50" :key="i">
            body <br />
          </div>
        </ElScrollbar>
      </template>
      <template #two>
        <footer>配合使用 ElScrollbar</footer>
      </template>
    </VkDuplex>

  </div>

</template>

<style scoped>
.duplex-demo {
  width: 100%;
  height: 300px;
  border: 2px dashed gray;
}

.duplex-demo :deep(.vk-duplex-2) {
  background-color: var(--el-color-primary);
}
</style>