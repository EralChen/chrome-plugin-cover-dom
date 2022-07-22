import { ComponentInternalInstance, inject } from 'vue'
import { checkLogicProviderKey } from './symbol'

export const useCheckLogicProvider = (key?: string) => {
  const vm = inject(key || checkLogicProviderKey) 
  
  if (!vm) {
    throw new Error('useCheckLogicProvider() must be used in the component which in `<CheckLogicProvider>` tag')
  }

  return vm as ComponentInternalInstance & {
    props: {
      modelValue: any
    }
  }
}
