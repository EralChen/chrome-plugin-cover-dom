---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 @vunk/core。

## 用法

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import VunkCore from '@vunk/core'
import '@vunk/core/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VunkCore)
app.mount('#app')
```

### 单组件引入

```typescript
// main.ts
import '@vunk/core/index.css'

```

```vue
<script setup>
import { VkDuplex } from '@vunk/core'
</script>

<template>
  <VkDuplex></VkDuplex>
</template>
```



## 开始使用

您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。
