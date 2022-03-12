import { createApp } from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/main.css"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).use(store).use(VueToast).use(router).mount('#app')
