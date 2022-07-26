<script lang="ts">
import {
  isEmptyObject,
  isNotEmptyObject,
  isPlainObject,
  isObject,
} from '@vunk-skzz/shared/utils-object'

export default {
  setup () {
    const a = {}
    console.log(
      'a', 
      isEmptyObject(a),  // true
      isNotEmptyObject(a), // false
      isObject(a), // true
      isPlainObject(a), // true
    )
  
    const b = []
    console.log(
      'b', 
      isEmptyObject(b),  // true
      isNotEmptyObject(b), // false
      isObject(b), // true
      isPlainObject(b), // false
    )

    const c = '{}'
    console.log(
      'c', 
      // isEmptyObject(c),  // err
      // isNotEmptyObject(c), // err
      isObject(c), // false
      isPlainObject(c), // false
    )
  
  

    return {}
  },
}
</script>
<template>
  <ul>

    <li>
      <span>isObject: </span>
      <span>typeof object 但不是 null</span>
    </li>
    <li>
      <span>isPlainObject: </span>
      <span>字面量对象 [object Object]</span>
    </li>

    
    <li>
      <span>isEmptyObject: </span>
      <span>空对象</span>
    </li>
    <li>
      <span>isNotEmptyObject: </span>
      <span>非空对象</span>
    </li>

  </ul>
</template>