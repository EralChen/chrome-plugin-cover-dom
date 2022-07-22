---
title: CheckLogic 选择逻辑
lang: zh-CN
---

# CheckLogic 选择逻辑

处理选择逻辑。

## 需求场景

有时，选择的逻辑是和 UI/组件 分离的。

<vp-script setup>
import img from '_e/check-logic/check-logic.jpeg'
</vp-script>

<div flex p="4">
  <img :src="img" w="50%" />
</div>

## 实现思路

建立一个无真实 DOM 的组件，作为父组件（CheckLogicProvider）；

将选择项数据，绑定在父组件中；

## 基础用法

:::demo 根据 `CheckLogicProvider` v-model 绑定的不同数据类型, 调整不同选择逻辑
check-logic/basic
:::

## Duplex 属性

| 属性 | 说明 | 类型 |默认值|
| --------------- | ----------------- | ------------|------------- |
| withFlex | 应用 `flex` 属性的要素| WithType | 'two' |
| withOverflow | 应用 `overflow` 属性的要素| WithType | 'both' |
| flex | 预设的 `flex` 规则 | string | '1'|
| overflow | 预设的 `overflow` 规则 | string | 'hidden'|


:::details TS
```ts
type WithType = 'one'|'two'|'both'|'none'
```
:::

## Duplex 插槽

| 插槽名   | 参数  | 说明       |
| ------- | -------- | -------- |
| default | - | 第二层  |
| one    | - | 第一层 |
| two    | - | 第二层  |

