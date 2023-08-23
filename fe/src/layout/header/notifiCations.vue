<template>
    <div class="notification-box">
      <vue-feather type="bell" @click="notification_open()"></vue-feather
      ><span class="dot-animated"></span>
    </div>
    <div
      class="onhover-show-div notification-dropdown"
      :class="{ active: notification }"
    >
       <ul>
                  <li>
                    <p class="f-w-700 mb-0">You have 3 Notifications<span class="pull-right badge badge-primary badge-pill">4</span></p>
                  </li>
                  <li class="noti-primary">
                    <div class="media"><span class="notification-bg bg-light-primary"><vue-feather type="activity"></vue-feather> </span>
                      <div class="media-body">
                        <p>Delivery processing </p><span>10 minutes ago</span>
                      </div>
                    </div>
                  </li>
                  <li class="noti-secondary">
                    <div class="media"><span class="notification-bg bg-light-secondary"><vue-feather type="check-circle"></vue-feather></span>
                      <div class="media-body">
                        <p>Order Complete</p><span>1 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li class="noti-success">
                    <div class="media"><span class="notification-bg bg-light-success"><vue-feather type="file-text"></vue-feather> </span>
                      <div class="media-body">
                        <p>Tickets Generated</p><span>3 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li class="noti-danger">
                    <div class="media"><span class="notification-bg bg-light-danger"><vue-feather type="user-check"></vue-feather> </span>
                      <div class="media-body">
                        <p>Delivery Complete</p><span>6 hour ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
    </div>
</template>

<script>
import VueFeather from 'vue-feather';
  export default {
    
    components:{
        VueFeather
    },
    data() {
      return {
        notification: false,
      };
    },
    methods: {
      notification_open() {
        this.notification = !this.notification;
      },
    },
  };
</script>