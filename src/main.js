import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './service/pinia'
import router from './router/routers'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from './service/fontAwesome'

const app = createApp(App)
app.use(library)
app.use(pinia)
app.use(router)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app')
