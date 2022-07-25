<script lang="ts">
import type {
  AnyFunc,
  MaybeRef,
  Merge,
  NormalObject,
  ReturnVoid,
  VueComponentPropsType,
} from '@vunk/core'
import { ref, unref } from 'vue'
import { ElButton } from 'element-plus'

export default {
  setup () {
    /* NormalObject */
    const a: NormalObject = {}

    /* AnyFunc */
    const b: AnyFunc = () => { // do...
    }


    /* MaybeRef */
    const c: MaybeRef<string> = ref('c')
    const cVlaue = unref(c)

    /* Merge */
    type D1 = {
      a: string,
      b: number
    }
    type D2 = {
      a: number,
      b: number,
      c: string
    }
    type D = Merge<D1, D2>
    const d: D = {
      a: 1, // number
      b: 2, // number
      c: '1', // string
    }

    /* ReturnVoid */
    const e1: () => ReturnVoid = async function () { //
    }
    const e2: () => ReturnVoid = function () { //
    }

    /* VueComponentPropsType */
    type ElButtonProps = VueComponentPropsType<typeof ElButton>
    const f: ElButtonProps = {
      // size: 'default'
    }

    return {}
  },
}
</script>
<template>
  <ul>
    <h4>for object</h4>
    
    <li>
      <span>NormalObject: </span>
      <span>普通对象类型</span>
    </li>
    <li>
      <span>Merge: </span>
      <span>合并两个对象类型</span>
    </li>

    <h4>for function</h4>
    <li>
      <span>ReturnVoid: </span>
      <span>异步或普通函数返回空</span>
    </li>
    
    <li>
      <span>AnyFunc: </span>
      <span>任意函数</span>
    </li>




    <h4>for vue</h4>
    <li>
      <span>MaybeRef: </span>
      <span>可能是个Ref</span>
    </li>

    <li>
      <span>VueComponentPropsType:</span>
      <span>返回vue组件的props类型</span>
    </li>

  </ul>
</template>