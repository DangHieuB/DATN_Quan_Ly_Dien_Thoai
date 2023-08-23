import {createApp} from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/app.scss"
import VueFeather from "vue-feather";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Breadcrumbs from './layout/breadCrumbs.vue';
import Notifications from '@kyvg/vue3-notification'

createApp(App)
    .use(store)
    .use(router)
    .use(createPinia())
    .use(VueAxios, axios)
    .use(Notifications)
    .component('Breadcrumbs', Breadcrumbs)
    .component(VueFeather.name, VueFeather)
    .mount('#app')
