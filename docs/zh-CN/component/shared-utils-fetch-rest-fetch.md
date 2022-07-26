--- 
title: UtilsFetch RestFetch
lang: zh-CN
---

# UtilsFetch RestFetch

UtilsFetch RestFetch

## 需求场景

原生的 `fetch` 对于 rest 请求来说，相当繁琐；

且项目中 rest 请求，大多需要做一层抽象（ baseUrl, 请求拦截 + token 等）；


## 基础用法

:::demo 
shared-utils-fetch-rest-fetch/basic
>>>tabs
[shared-utils-fetch-rest-fetch/api, shared-utils-fetch-rest-fetch/request]
>>>
:::

## RestFetch 类型

```ts
// 构造函数参数
interface ConstructorOptions {
  baseURL: string;
  setRequestInit?: (config: RequestInit) => RequestInit;
}

// request 方法
export interface RestFetchRequest {
  (options: RestFetchRequestOptions, requestInit?: RequestInit): Promise<any>
}

// request 方法 options 参数
export interface RestFetchRequestOptions {
  url: string;
  baseURL?: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  data?: Record<string, any>; 
  params?: Record<string, any>;
  contentType?: ContentType;
  cache?: {
    id: string, // 指定id，响应流将 以 key-res 缓存。 匹配到相同的 id ，则响应将从缓存中返回
    forceUpdate?: boolean, // 是否强制更新缓存
  }
}

```


