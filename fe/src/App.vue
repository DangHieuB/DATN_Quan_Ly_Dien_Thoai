<template>
    <router-view />
    <div class="loader-wrapper" v-if='loaddingStore.loading'>
        <div class="theme-loader">
            <div class="loader-p"></div>
        </div>
    </div>
    <notifications/>
</template>
<script setup>
import { useUserStore } from './store/UserStore';
import { useLoaddingStore } from './store/LoaddingStore';
const loaddingStore = useLoaddingStore()
const userStore = useUserStore()
userStore.fetchCurrentUser()
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
