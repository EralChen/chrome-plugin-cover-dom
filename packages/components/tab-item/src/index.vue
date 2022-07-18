<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import { _VkTabGroupSymbol } from '@vunk-core/components/tab-group'
import { isPlainObject } from '@vunk-core/shared'
import { AnyFunc } from '@vunk-core/shared'
enum CollectionType {
  array,
  object,
  other
}
export default defineComponent({
  name: 'VkTabItem',
  props: {
    modelValue: {
      type: Boolean,
      default: undefined,
    },
    name: {
      type: [String, Number, Boolean],
      required: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    eventType: {
      type: String,
      default: 'click',
    },
  },
  emits: {
    active: null,
    inactive: null,
    'update:model-value': null,
  },
  setup (props, { emit }) {
    const pProps = inject<{modelValue: any}>(_VkTabGroupSymbol.propsKey)
    const pCtx = inject<any>(_VkTabGroupSymbol.contextKey)
    if (!pProps) throw new Error('VkTabItem must be in VkTabGroup')
    if (!pCtx) throw new Error('VkTabItem must be in VkTabGroup')
    const collectionType = computed(() => {
      if (isPlainObject(pProps.modelValue)) {
        return CollectionType.object
      } else if (Array.isArray(pProps.modelValue)) {
        return CollectionType.array
      } else {
        return CollectionType.other
      }
    })
    const actions: Record<CollectionType, {
      isActive: (name: any) => boolean
      remove: AnyFunc
      set: AnyFunc
    }> = {
      [CollectionType.array]: {
        isActive: (name) => !!pProps.modelValue.includes(name),
        remove: (name) => {
          const arr = [...pProps.modelValue]
          const index = arr.findIndex(item => item === name)
          if (index === arr.length - 1) {
            arr.pop()
            while (arr.length > 0 && !(arr[arr.length - 1] ?? false)) {
              arr.pop()
            }
          } else {
            arr[index] = undefined
          }
          return arr
        },
        set: (name) => {
          const arr = [...pProps.modelValue]
          const i = arr.findIndex(item => !(item ?? false))
          if (i === -1) {
            arr.push(name)
          } else {
            arr[i] = name
          }
          return arr
        },
      },
      [CollectionType.object]: {
        isActive: (name) => !!pProps.modelValue[name + ''],
        remove: (name) => {
          const obj = { ...pProps.modelValue }
          obj[name] = false
          return obj
        },
        set: (name) => ({ ...pProps.modelValue, [name]: true }),
      },
      [CollectionType.other]: {
        isActive: (name) => pProps.modelValue === name,
        remove: (_) => undefined,
        set: (name) => name,
      },
    }
    
    const isActive = computed<boolean>(() =>  actions[collectionType.value].isActive(props.name))


    emit('update:model-value', isActive.value)
    isActive.value && emit('active')
    
    watch(isActive, (v) => {
      emit('update:model-value', v)
      v ? emit('active') : emit('inactive')
    })

    /* 如果改变了 item 绑定的值，则父组件的绑定需要设置 当前值 */
    watch(() => props.modelValue, (v) => {
      if (v === undefined) return
      if (v !== isActive.value) {
        togglePModelValue(!v) // 转变成 v
      }
    }, {immediate: true})

    /* 如果改变了 item 绑定的值，则父组件的绑定需要设置 当前值  end*/
    
    const handleClick = () => {
      if (isActive.value && !props.clearable) return
      togglePModelValue(isActive.value) // 转换active
    }

    function togglePModelValue (currentFlag: boolean) {
      if (currentFlag) {
        // 清除
        const nModelValue = actions[collectionType.value].remove(props.name)
        pCtx.emit('update:model-value', nModelValue)
      } else {
        // 设置
        const nModelValue = actions[collectionType.value].set(props.name)
        pCtx.emit('update:model-value', nModelValue)
      }
    }

    return {
      isActive,
      handleClick,
    }
  },
})
</script>
<template>
  <div class="vk-tab-item" :class="{
    'is-active':isActive
  }" @[eventType]="handleClick">
    <slot :isActive="isActive" :toggle="handleClick"></slot>
  </div>
</template>
<style>
.vk-tab-item{
  cursor: pointer;
}
</style>
