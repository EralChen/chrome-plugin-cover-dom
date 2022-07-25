---
title: Duplex 双层
lang: zh-CN
---

# Duplex 双层

常用的双层盒子。

## 需求场景

<vp-script setup>
import desired from '_e/duplex/desired.png'
</vp-script>

<el-image :src="desired" p="10"/>

## 实现思路

:::details calc
要确定 `body` 高度，可以考虑使用 `calc(100% - #{headerHeight})`;

在 `headerHeight` 不确定的情况下，则可能需要使用 js 计算 `headerHeight`.
::: 

:::info flex
将 root 要素设为 `display: flex`; 

只需要对 `body` 使用 `flex-grow: 1`;

为了使 `body-inner` 约束在 body 内，配合使用 `overflow` 属性。
::: 

:::tip
`Duplex`采用 `flex` 实现；
:::

## 基础用法

:::demo 使用 `withFlex` 来定义常用布局。

duplex/basic

>>>tabs
[duplex/scroll]
>>>

:::

## 内容超出

:::demo 你可以使用 `overflow` 属性来定义 item `overflow`, 或是使用一个新的盒子（如`ElScrollbar`）来建立滚动逻辑。

duplex/scroll

:::


## Duplex 属性

| 属性 | 说明 | 类型 |默认值|
| --------------- | ----------------- | ------------|------------- |
| :withFlex | 应用 `flex` 属性的要素| WithType | 'two' |
| :withOverflow | 应用 `overflow` 属性的要素| WithType | 'both' |
| :flex | 预设的 `flex` 规则 | string | '1'|
| :overflow | 预设的 `overflow` 规则 | string | 'hidden'|
| :gap | Item 之间的距离 | string | - |
| :deriction | 父盒子flex方向 | string | 'column' | 


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

