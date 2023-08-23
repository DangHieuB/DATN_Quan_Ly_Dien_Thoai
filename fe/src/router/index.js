import {createRouter, createWebHistory} from 'vue-router'
import BodyView from '../layout/BodyView.vue'

const routes = [
    {
        path: '/',
        component: BodyView,
        children: [
        ]
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
