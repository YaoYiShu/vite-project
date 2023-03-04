import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// console.log(import.meta.env.VITE_APP_BASE_API);

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
