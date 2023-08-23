import {createStore} from 'vuex'
import menu from './modules/menu'
import layout from "./modules/layout"

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        menu,
        layout
    }
})
