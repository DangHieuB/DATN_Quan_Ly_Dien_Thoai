<template>
<i data-feather="message-square"><vue-feather type="message-square"></vue-feather></i>
                <ul class="chat-dropdown onhover-show-div">
                  <li>
                    <div class="media"><img class="img-fluid rounded-circle me-3" src="../../assets/images/user/4.jpg" alt="">
                      <div class="media-body"><span>{{ userStore.currentUser.staff_code }}</span>
                        <p class="f-12 light-font">{{ userStore.currentUser.full_name }}</p>
                      </div>
                    </div>
                  </li>
                  <li class="text-center"> <a class="f-w-700" href="#"> {{ userStore.currentUser.shop_name }}    </a></li>
                </ul>
</template>
<script setup>
import { useUserStore } from './../../store/UserStore';
const userStore = useUserStore()
</script>