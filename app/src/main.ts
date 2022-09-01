import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { VkSvgIcon } from '@vunk/core'
import ElementPlus from 'element-plus'
import 'virtual:svg-icons-register'
import './styles'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .component('SvgIcon', VkSvgIcon)
  .mount('#app')
