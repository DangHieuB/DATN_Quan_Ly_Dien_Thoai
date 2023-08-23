import {defineStore} from 'pinia';

export const useLoaddingStore = defineStore('LoaddingStore', {
    state: () => {
        return {
            loadding: false
        }
    },
    getters: {},
    actions: {
        updateLoading(val) {
            this.loadding = val
        }
    },
});
