<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref('')
const checked2 = ref(false)
const checked3 = ref([])
const checked4 = ref({})
</script>
<template>
  <VkDuplex :withFlex="'both'" :gap="'16px'">

    <template #one>
      <VkDuplex :withFlex="'both'" :direction="'row'" :gap="'16px'">
        <!-- number or string -->
        <template #one>
          <VkCheckLogicProvider v-model="checked1">
            <div class="check-logic-x">
              <div>{{ checked1 }}</div>
              <div class="check-logic-group">
                <VkCheckLogic :name="1" :clearable="false">1</VkCheckLogic>
                <hr>
                <VkCheckLogic :name="2" :clearable="false">2</VkCheckLogic>
              </div>
              <VkCheckLogic class="check-logic-3" :name="3" :clearable="false">3</VkCheckLogic>
              <VkCheckLogic class="check-logic-4" :name="4" :clearable="false">4</VkCheckLogic>
            </div>
          </VkCheckLogicProvider>
        </template>

        <!-- boolean -->
        <VkCheckLogicProvider 
          :modelValue="checked2" 
          @update:modelValue="checked2 = !!$event"
        >
          <div class="check-logic-x">
            <div>{{ checked2 }}</div>
            <div class="check-logic-group">
              <VkCheckLogic :name="true">1</VkCheckLogic>
            </div>
          </div>
        </VkCheckLogicProvider>

      </VkDuplex>
    </template>


    <template #two>
      <VkDuplex :withFlex="'both'" :direction="'row'" :gap="'16px'">
        <!-- array -->
        <template #one>
          <VkCheckLogicProvider v-model="checked3">
            <div class="check-logic-x">
              <div>{{ checked3 }}</div>
              <div class="check-logic-group">
                <VkCheckLogic :name="1">1</VkCheckLogic>
                <hr>
                <VkCheckLogic :name="2">2</VkCheckLogic>
              </div>
              <VkCheckLogic class="check-logic-3" :name="3">3</VkCheckLogic>
              <VkCheckLogic class="check-logic-4" :name="4">4</VkCheckLogic>
            </div>
          </VkCheckLogicProvider>
        </template>

        <VkCheckLogicProvider v-model="checked4">
          <div class="check-logic-x">
            <div>{{ checked4 }}</div>
            <div class="check-logic-group">
              <VkCheckLogic :name="1">1</VkCheckLogic>
              <hr>
              <VkCheckLogic :name="2">2</VkCheckLogic>
            </div>
            <VkCheckLogic class="check-logic-3" :name="3">3</VkCheckLogic>
            <VkCheckLogic class="check-logic-4" :name="4">4</VkCheckLogic>
          </div>
        </VkCheckLogicProvider>
      </VkDuplex>

    </template>

  </VkDuplex>
</template>
<style scoped>
.check-logic-x {
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
}

.check-logic-x :deep(.vk-check-logic) {
  padding: .4em;
  border: 2px solid var(--el-color-primary);
}

:deep(.vk-check-logic.is-active) {
  background: var(--el-color-primary);
}

.check-logic-3 {
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.check-logic-4 {
  position: absolute;
  right: 8px;
  bottom: 8px;
}

.check-logic-group {
  position: absolute;
  top: 8px;
  left: 8px;
}
</style>
