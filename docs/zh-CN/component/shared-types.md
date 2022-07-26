--- 
title: Types 类型
lang: zh-CN
---

# Types 类型

常用 TypeScript 类型。


## 基础用法

:::demo 
shared-types/basic
:::


## For UtilsFetch

[RestFetch 类型](./shared-utils-fetch-rest-fetch.md#restfetch-类型) 

+ RestFetchRequest： request 方法
+ RestFetchRequestOptions: request 方法第一个参数options

```ts
import type { RestFetchRequest, RestFetchRequestOptions } from '@vunk/core'
import { RestFetch } from '@vunk/core/shared/utils-fetch'

const restFetch  = new RestFetch({
  baseURL: '/data'
})

export const request = <T>(...args: Parameters<RestFetchRequest>) => {
  return restFetch.request(...args) as Promise<T>
}

```


