<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isDark } from '../../composables/dark'
import { useLang } from '../../composables/lang'
import thanksLocale from '../../../i18n/component/thanks.json'
import { sendEvent } from '../../../config/analytics'

interface AThanks {
  name: string;
  name_cn?: string;
  img: string;
  url: string;
  slogan: string;
  slogan_cn: string;
  className?: string;
  isDark?: boolean;
}

const onItemClick = (item: AThanks) => {
  sendEvent('thx_click', item.name, 'index')
}
defineProps({
  data: Array as PropType<AThanks[]>,
})

const lang = useLang()
const thanksLang = computed(() => thanksLocale[lang.value])

const langZhCN = 'zh-CN'

const getName = (item: AThanks) => {
  if (lang.value === langZhCN) {
    return item.name_cn || item.name
  }
  return item.name
}
const getSlogan = (item: AThanks) => {
  if (lang.value === langZhCN) {
    return item.slogan_cn || item.slogan
  }
  return item.slogan
}
</script>

<template>
  <h2 class="text-center mb-4 text-xl">{{ thanksLang.title }}</h2>
  <div class="grid gap-1 thanks-list platinum">
    <a
      v-for="(item, i) in data"
      :key="i"
      :class="['thanks flex px-4 rounded-md', item.className]"
      :href="item.url"
      target="_blank"
      @click="onItemClick(item)"
    >
      <img
        :class="item.isDark && isDark ? 'filter invert' : ''"
        width="45"
        :src="item.img"
        :alt="item.name"
      />
      <div>
        <p>
          <span class="name">{{ getName(item) }}</span>
        </p>
        <p>{{ getSlogan(item) }}</p>
      </div>
    </a>
  </div>
</template>
