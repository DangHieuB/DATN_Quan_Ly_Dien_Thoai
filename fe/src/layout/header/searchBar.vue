<template>
  <form
    class="form-inline search-form" action="#" method="get">
    <div class="search-bg"><i class="fa fa-search"></i>
      <div class="Typeahead Typeahead--twitterUsers">
        <div class="u-posRelative">
          <input
            class="demo-input Typeahead-input form-control-plaintext w-100"
            type="text"
            :class="filtered?'open':''"
            v-on:keyup="searchterm"
            v-model="terms"
            placeholder="Search here .."
            name="q"
            title=""
            autofocus
          />
        </div>
        <div
          :class="searchResult ? 'Typeahead-menu is-open' : 'Typeahead-menu'" v-if="menuItems.length">
          <div class="ProfileCard u-cf" v-for="(menuItem, index) in menuItems.slice(0, 8)" :key="index" >
            <div class="ProfileCard-avatar header-search">
              <vue-feather :type="menuItem.icon"></vue-feather>
            </div>
            <div class="ProfileCard-details">
              <div class="ProfileCard-realName">
                <span @click="removeFix()"
                  ><router-link :to="{ path: menuItem.path }" class="realname" >{{ menuItem.title }}</router-link ></span>
              </div>
            </div>
          </div>
        </div>
        <div :class="searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu' " >
          <div class="tt-dataset tt-dataset-0">
            <div class="EmptyMessage">
              Your search turned up 0 results. Opps There are no result found.
            </div>
          </div>
        </div>
      </div>
    </div>
  </form><span class="d-sm-none mobile-search search-bg" @click="collapseFilter()"><i class="fa fa-search"></i></span>
</template>
<script>
  var body = document.getElementsByTagName('body')[0];
  import { mapState } from 'vuex';
  export default {
    name: 'SearchBar',
    data () {
      return {
        filtered: false,
        terms: '',
        searchResult: false,
        searchResultEmpty: false,
      };
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.searchData,
        searchOpen: (state) => state.menu.searchOpen
      }),
    },
    watch: {
      menuItems: function() {
        this.terms ? this.addFix() : this.removeFix();
        if (!this.menuItems.length) this.searchResultEmpty = true;
        else this.searchResultEmpty = false;
      },
    },
    methods: {
     collapseFilter() {
        this.filtered = !this.filtered;
      },
      searchterm: function() {
        this.$store.dispatch('menu/searchTerm', this.terms);
      },
      addFix() {
        body.classList.add('offcanvas');
        this.searchResult = true;
      },
      removeFix() {
        body.classList.remove('offcanvas');
        this.searchResult = false;
        this.terms = '';
      },
    },
  };
</script>
