import { createApp } from 'vue'
import App from './App.vue'

import { loadStyleString } from '@vunk/core/shared/utils-dom'
import ElCSS from 'element-plus/dist/index.css?raw'
loadStyleString(ElCSS)

createApp(App)
  .mount('#app')
