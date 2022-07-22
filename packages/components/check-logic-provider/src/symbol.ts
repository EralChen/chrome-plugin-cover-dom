import { ComponentInternalInstance, InjectionKey } from 'vue'

export const checkLogicProviderKey = Symbol() as InjectionKey<
  ComponentInternalInstance
>