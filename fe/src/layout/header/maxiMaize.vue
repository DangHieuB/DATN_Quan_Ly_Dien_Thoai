<template>
  <a class="text-dark" href="javascript:void(0)" @click="toggle_fullscreen()">
   <vue-feather class="max1" type="maximize"></vue-feather>  
</a>
</template>

<script>
import VueFeather from 'vue-feather';
  export default {
    name: 'MaxiMize',
    components:{
        VueFeather
    },
    methods: {
      toggle_fullscreen() {
        if (
          (document.fullScreenElement && document.fullScreenElement !== null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      },
    },
  };
</script>
