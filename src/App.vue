<template>
<div id="app">
  <the-loading-screen v-if="true"></the-loading-screen>
  <the-transition v-if="transitionstatus" @ShowHideTransition="ShowHideTransition"></the-transition>
  <router-view />
</div>
</template>
<script>
import { bus } from './main';
import TheLoadingScreen from "@/components/TheLoadingScreen";
import TheTransition from "@/components/TheTransition";


export default {
  name: 'app',
  data() {
    return {
      transitionstatus: false,
      header: "work"
    }
  },
  components: {
    TheLoadingScreen,
    TheTransition
  },
  created() {
    bus.$on('changepage', () => {
      this.ShowHideTransition(true)
    })
  },
  methods: {
    ShowHideTransition: function(boolen) {
      this.transitionstatus = boolen
    }
  }
}
</script>
<style lang="scss">

body {

    margin: 0 auto;
}
#app {
    height: 100%;
}

.home {
    height: 100%;
}
.center {
    text-align: center;
}
.color-second {
    color: #105AFB;
}
.color-third {
    color: #FAE102!important;
}
@media screen and (max-width: 760px) {
    //body {position:fixed;height:100%;width:100%}
    //#app{position:fixed;height:100%;width:100%;}
    //html{position:fixed;height:100%;width:100%}

    .none {
        display: none;
    }
}
</style>
