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

```ts
import type { RestFetchRequest, RestFetchRequestOptions } from '@vunk/core'
import { RestFetch } from '@vunk/core/shared/utils-fetch'

const restFetch  = new RestFetch({
  baseURL: '/data'
})

export const request = <T>(...args: Parameters<RestFetchRequest>) => {
  return restFetch.request(...args) as Promise<T>
}

// RestFetchRequest： request 函数接口
// RestFetchRequestOptions: request 函数第一个参数

```
