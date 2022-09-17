import { createApp } from 'vue'
import App from './app.vue'

const MOUNT_EL_ID = 'coverDom'
const mountEl = document.createElement('div')
mountEl.setAttribute('id', MOUNT_EL_ID)

document.body.appendChild(mountEl)

createApp(App)
  .mount(mountEl)

