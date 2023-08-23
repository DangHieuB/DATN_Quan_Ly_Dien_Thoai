<template>
   <div class="sidebar-user text-center">
   <a class="setting-primary" href="javascript:void(0)"><vue-feather type="settings"></vue-feather></a>
    
        <!-- <img class="img-90 rounded-circle" src="../../assets/images/dashboard/1.png" alt="" /> -->
       <div class="badge-bottom"><span class="badge badge-primary">New</span></div>

        <router-link to="/users/profile"><h6 class="mt-3 f-14 f-w-600">Emay Walter</h6></router-link>
        <p class="mb-0 font-roboto">Human Resources Department</p>
        <ul >
          <li >
           <span class="counter"
                ><number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="19.8"
                  :format="theFormat"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" />k</span
              >
            <p>Follow</p>
          </li>
          <li >
            <span class="count">2 year</span>
            <p>Experince</p>
          </li>
          <li >
            <span 
              ><span class="counter"
                ><number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="95.2"
                  :format="theFormat"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span
              >k</span
            >
            <p>Follower</p>
          </li>
        </ul>
   </div>
    
</template>

<script>
// import VueFeather from "vue-feather";
// import NavMenu from "./navMenu.vue";
// import { layoutClasses } from "../../constants/layout";
export default {
  components: {
    // VueFeather,
    // NavMenu,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    theFormat(number) {
      return number.toFixed(1);
    },
  },
};
</script>
