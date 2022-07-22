<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, watch } from 'vue'
import { useCheckLogicProvider } from '@vunk-core/components/check-logic-provider'
import { isPlainObject } from '@vunk-core/shared'

enum CollectionType {
  array,
  object,
  other
}
interface Action  {
  isActive: (name) => boolean
  remove: AnyFunc
  set: AnyFunc
}

export default defineComponent({
  name: 'VkCheckLogic',
  emits,
  props,
  setup (props, { emit }) {
    const pvm  = useCheckLogicProvider()
    const collectionType = computed(() => {
      if (isPlainObject(pvm.props.modelValue)) {
        return CollectionType.object
      } else if (Array.isArray(pvm.props.modelValue)) {
        return CollectionType.array
      } else {
        return CollectionType.other
      }
    })
    const actions: Record<CollectionType, Action> = {
      [CollectionType.array]: {
        isActive: (name) => !!pvm.props.modelValue.includes(name),
        remove: (name) => {
          const arr = [...pvm.props.modelValue]
          const index = arr.findIndex(item => item === name)
          
          if (index === arr.length - 1) {
            arr.pop()
            // 继续查看arr的最后一项是不是 undefined
            // 如果是 则继续 pop
            while (
              arr.length > 0 
              && (
                arr[arr.length - 1] === undefined
                || arr[arr.length - 1] === null
              )
            ) {

              arr.pop()

            }

          } else {
            arr[index] = undefined
          }
          return arr
        },
        set: (name) => {
          const arr = [...pvm.props.modelValue]
          const i = arr.findIndex(item => item === undefined || item === null)
          if (i + 1) {
            arr[i] = name
          } else {
            arr.push(name)
          }
          return arr
        },
      },
      [CollectionType.object]: {
        isActive: (name) => !!pvm.props.modelValue[name + ''],
        remove: (name) => {
          const obj = { ...pvm.props.modelValue }
          obj[name] = false
          return obj
        },
        set: (name) => ({ ...pvm.props.modelValue, [name]: true }),
      },
      [CollectionType.other]: {
        isActive: (name) => pvm.props.modelValue === name,
        remove: (_) => undefined,
        set: (name) => name,
      },
    }

    function setActive (v: boolean) {
      if (v) { // 设置
        const nModelValue = actions[collectionType.value].set(props.name)
        pvm.emit('update:modelValue', nModelValue)
      } else { // 清除
        const nModelValue = actions[collectionType.value].remove(props.name)
        pvm.emit('update:modelValue', nModelValue)
      }
    }

    // 从pvm 计算出 active 状态
    const isActive = computed({
      get: () => {  // 判断自身是否是被激活的
        return actions[collectionType.value].isActive(props.name)
      },
      set: setActive,
    })

    // 同步 active 到自身 v-model
    watch(isActive, (v) => {
      emit('update:modelValue', v)
      // 同时传出 激活和失活 事件
      v ? emit('active') : emit('inactive')
    }, {
      immediate: true,
    })

    function toggle () {
      isActive.value = !isActive.value
    }

    return {
      isActive,
      toggle,
    }
  },
})
</script>
<template>
  <div 
    class="vk-check-logic" 
    :class="{
      'is-active':isActive
    }"
    @[eventType]="toggle"
   >
    <slot 
      :isActive="isActive" 
      :toggle="toggle"
    ></slot>
  </div>
</template>
