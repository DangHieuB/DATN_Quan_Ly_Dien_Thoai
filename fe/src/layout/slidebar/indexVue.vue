<template>
 
    <NavView  v-if="!sidebarIsVisible"
      @linkClicked="toggleSidebar" />
 
</template>
<script>
// import LogoView from './logoView.vue'

import NavView from './navView.vue';
export default {
  components: { NavView  },
  data() {
    return {
      sidebarIsVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsVisible = !this.sidebarIsVisible;
      document.getElementById("main").style.marginLeft = "0px";
    },
    closeSidebar() {
      this.sidebarIsVisible = true;
    },
  },
}
</script>