<template>
  <div class="main-header-right row m-0">

    <div class="main-header-left">
      <SideBar />
    </div>
    <div class="nav-right col pull-right right-menu p-0">
      <ul class="nav-menus" :class="filtered ? 'open' : ''">
        <li class="onhover-dropdown">
          <ChatView />
        </li>
        <li class="onhover-dropdown p-0">
          <LogOut />
        </li>

      </ul>
    </div>
    <div class="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"><vue-feather
          type="more-horizontal" @click="collapseFilter()"></vue-feather></i></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SideBar from "./sidebarView.vue"
import LogOut from "./LogOut.vue"
import ChatView from "./ChatView.vue"


export default {
  components: {
    SideBar,
    LogOut,
    ChatView

  },
  data() {
    return {
      bookmark: false,
      toogle: false,
      filtered: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.searchData,
      megamenuItems: (state) => state.menu.megamenu,
      searchOpen: (state) => state.menu.searchOpen,
    }),
  },
  methods: {
    search_open() {
      this.$store.state.menu.searchOpen = true;
    },
    collapseFilter() {
      this.filtered = !this.filtered;
    },
    bookmark_open() {
      this.bookmark = !this.bookmark;
    },
  },
}
</script>