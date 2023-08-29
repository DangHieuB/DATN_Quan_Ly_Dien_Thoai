import {createRouter, createWebHistory} from 'vue-router'
import BodyView from '../layout/BodyView.vue'
import viewQlDT from "@/components/admin/quanlidienthoai/viewQlDT.vue";
import viewQLNV from "@/components/admin/quanlinhanvien/viewQLNV.vue";
import viewThongKe from "@/components/admin/thongke/viewThongKe.vue";

const routes = [
    {
        path: '/',
        component: BodyView,
        children: [
            {
                path: "/",
                component:viewQlDT
            },
            {
                path: "/QLNV",
                component: viewQLNV
            },
            {
                path: "/ThongKe",
                component: viewThongKe
            }
        ]
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
