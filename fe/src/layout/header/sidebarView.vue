<template>
 
    <div class="logo-wrapper">
      <Logo />

    </div>
    <div class="dark-logo-wrapper"><router-link to="/"><img class="img-fluid" src="../../assets/images/logo/dark-logo.png" alt=""></router-link></div>
     <div class="toggle-sidebar" @click="toggle_sidebar">
        <vue-feather
          class="status_toggle middle"
          type="align-center"
          id="sidebar-toggle"
        ></vue-feather>
      </div>
   
 
</template>
<script>
  import { mapState } from 'vuex';
   import Logo from '../slidebar/logoView.vue';
  export default {   
    components: {
      Logo,  
    },
    data(){
        return{
        }
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.data,
        activeoverlay: (state) => state.menu.activeoverlay,
      }),
    },
    methods: {
      toggle_sidebar() {
        this.$store.dispatch('menu/opensidebar');
        this.$store.state.menu.activeoverlay = false; 
      },
    },
  };
</script>
