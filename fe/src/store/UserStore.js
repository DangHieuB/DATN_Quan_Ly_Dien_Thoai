import {defineStore} from 'pinia';
import axios from "axios"
import {useLoaddingStore} from './LoaddingStore';
import {notify} from "@kyvg/vue3-notification";

export const useUserStore = defineStore('UserStore', {
    state: () => {
        return {
            currentUser: {"staff_code": "Loadding", "full_name": "Loadding", "shop_name": "Loadding"}
        }
    },
    getters: {},
    actions: {
        async fetchCurrentUser() {
            const loaddingStore = useLoaddingStore()
            try {
                loaddingStore.loading = true;
                const response = await axios.get('/api/users/information')
                this.currentUser = response.data
                loaddingStore.loading = false;
            } catch (error) {
                loaddingStore.loading = false;
                console.log(error)
                notify({
                    type: 'error',
                    title: "Get current user",
                    text: error,
                    duration: 100000,
                });

            }
        }
    },
});
