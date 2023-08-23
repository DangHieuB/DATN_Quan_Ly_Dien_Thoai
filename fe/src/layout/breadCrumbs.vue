<template>
<div class="container-fluid">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h3 class="bread">{{ title }}</h3>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ path: '/' }"
                >Home</router-link>
            </li>
             <li class="breadcrumb-item" v-if="sub">{{ sub }}</li>
            <li class="breadcrumb-item" v-if="main">{{ main }}</li>
            <li class="breadcrumb-item active" v-if="title">{{ title }}</li>
          </ol>
        </div>
         <div class="col-sm-6">
                  <!-- Bookmark Start-->
         </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: {
      default: "home",
    },
    main: {
      default: "",
    },
    sub:{
      default:""
    }
  },
  data(){
    return{
       filtered: false,
    }
  },
  methods:{
     collapseFilter() {
        this.filtered = !this.filtered;
      },
  }
};
</script>
