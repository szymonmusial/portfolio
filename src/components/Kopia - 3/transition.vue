<template>
<div class="loadingscreen" v-if="step !== 4">
  <transition name="slide" appear v-on:after-enter="updatestep(1)" v-if="step !== 3" v-on:after-leave="updatestep(4)">
    <div class="background"></div>
  </transition>
</div>
</template>
<script>
export default {
  name: 'transi',
  data() {
    return {
      step: 0,
    }
  },
  computed: {},
  methods: {
    hidetransition: function() {
      this.$emit('showhidetansition', false)
    },
    updatestep: function(number, time) {
      setTimeout(() => this.step = number, time);
      if (number === 4) {
        setTimeout(() => this.hidetransition(), 100);
      }
    },

  },
  mounted() {
    this.updatestep(3, 1200)
  }
}
</script>
<style scoped>
img {
  width: 100%;
}

.hand-block {
  width: 10vh;
}

.loadingscreen-block,
.loadingscreen-block--hand {
  left: 50%;
  top: calc(50% - 70px / 2);
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
  z-index: 100000;
  color: white;
  width: 100%;
}

.loadingscreen-block--hand {
  top: calc(40% - 15vh / 2);
}

.loadingscreen-tittle {
  font-size: 70px;
}

.loadingscreen {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 100000;
}

.background {
  height: 100%;
  background-color: #191A1E;
  position: absolute;
  width: 100%;
  top: 0px;
}

.slide-enter-active,
.slide-leave-active {
  transition: .9s;
}

.slide-enter {
  height: 0;
  top: -30vh;
}

.slide-leave-to {
  top: 100%;
}



/* flipx */

.flipx-enter-active,
.flipx-leave-active {
  transition: .3s;
}

.flipx-enter {
  transform: rotateX(90deg);
}

.flipx-leave-to {
  transform: rotateX(90deg);
}


@media screen and (max-width: 1000px) {

  .loadingscreen-tittle {
    font-size: 48px;
  }

}

@media screen and (max-width: 576px) {
  .background{background-color:#242529;}
  span {
    display: block;
  }

  .loadingscreen-tittle {
    font-size: 52px;
  }


  .loadingscreen-tittlee {
    font-size: 32px;
  }

}
</style>
