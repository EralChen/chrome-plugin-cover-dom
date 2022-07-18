import { DefineComponent, Ref } from 'vue'

export type VueComponentPropsType<
  T extends abstract new (...args: any) => any
> = Omit<
  InstanceType<T>['$props'], 
  keyof InstanceType<DefineComponent>['$props']
>

export type MaybeRef<T> = T | Ref<T>