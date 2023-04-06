import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/tooplate-style.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
