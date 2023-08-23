<template>
     <div class="bookmark-box"><i data-feather="star"><vue-feather type="star"></vue-feather></i></div>
                <div class="bookmark-dropdown onhover-show-div">
                  <div class="form-group mb-0">
                    <div class="input-group">
                      <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-search"></i></span></div>
                      <input class="form-control" type="text" placeholder="Search for bookmark...">
                    </div>
                  </div>
                  <ul class="m-t-5">
                    <li class="add-to-bookmark"><i class="bookmark-icon" data-feather="inbox"><vue-feather type="inbox"></vue-feather></i>Email<span class="pull-right"><i data-feather="star"><vue-feather type="star"></vue-feather></i></span></li>
                    <li class="add-to-bookmark"><i class="bookmark-icon" data-feather="message-square"><vue-feather type="message-square"></vue-feather></i>Chat<span class="pull-right"><i data-feather="star"><vue-feather type="star"></vue-feather></i></span></li>
                    <li class="add-to-bookmark"><i class="bookmark-icon" data-feather="command"><vue-feather type="command"></vue-feather></i>Feather Icon<span class="pull-right"><i data-feather="star"><vue-feather type="star"></vue-feather></i></span></li>
                    <li class="add-to-bookmark"><i class="bookmark-icon" data-feather="airplay"><vue-feather type="airplay"></vue-feather></i>Widgets<span class="pull-right"><i data-feather="star"> <vue-feather type="star"></vue-feather>  </i></span></li>
                  </ul>
                </div>
</template>
<script>
import VueFeather from 'vue-feather';
export default {
    components:{
        VueFeather
    }
}
</script>