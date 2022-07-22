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

## CheckLogic 属性

| 属性 | 说明 | 类型 |默认值|
| --------------- | ----------------- | ------------|------------- |
| name* | 选择标识符 | [String, Number, Boolean] | - |
| v-model | 当前项 状态 | boolean | - |
| :clearable | 选择是否可以通过 `toggle` 事件清除 | boolean | true |
| :eventType | 触发 `toggle` 的默认事件类型 | string | 'click'|
| injectKey | 与 `CheckLogicProvider` providerKey 对应，决定归属 | string | - |


## CheckLogic Emits

| 插槽名   | 参数  | 说明       |
| ------- | -------- | -------- |
| active | - | 选择项激活  |
| inactive | - | 选择项失活  |


## CheckLogic 插槽

| 插槽名   | 参数  | 说明       |
| ------- | -------- | -------- |
| default | &nbsp;isActive: boolean <br> toggle: Func | 选择项内容  |




## CheckLogicProvider 属性

| 属性 | 说明 | 类型 |默认值|
| --------------- | ----------------- | ------------|------------- |
| v-model | 选中的数据( `CheckLogic` 的 name 值) | any | - |
| provideKey | 与 `CheckLogic` injectKey 对应, 在多个 `CheckLogicProvider` 嵌套中做区分 | string | - |



