import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { VkSvgIcon } from '@vunk/core'
import 'virtual:svg-icons-register'
import './styles'

createApp(App)
  .use(router)
  .use(store)
  .component('SvgIcon', VkSvgIcon)
  .mount('#app')
