<template>
<div class="loadingscreen" v-if="step !== 4" v-bind:style=" step < 3 ? 'background-color: white;' : 'background-color: transparent;' ">
  <transition name="slide" appear v-on:after-enter="UpdateStep(1)" v-if="step !== 3" v-on:after-leave="UpdateStep(4)">
    <div class="background"></div>
  </transition>

  <div class="loadingscreen-block">
    <transition name="flipx" v-on:after-enter="UpdateStep(2,1500)">
      <h1 class="loadingscreen-tittle" v-if="step === 1"><span>Cześć</span> nazywam się <span class="color-third"> Szymon</span></h1>
    </transition>
  </div>
  <div class="loadingscreen-block">
    <transition name="flipx" v-on:after-enter="UpdateStep(3,1500)">
      <h1 class="loadingscreen-tittle" v-if="step === 2"><span>Jestem</span><span class="color-third"> Front-End</span> developerem</h1>
    </transition>
  </div>
  </div>

</template>
<script>
export default {
  name: 'TheLoadingScreen',
  data() {
    return {
      step: 0,
    }
  },
  computed: {},
  methods: {
    UpdateStep: function(number,time) {
      if(number === 5){ return false;}
        setTimeout(() =>       this.step = number, time);
    }
  }
}
</script>
<style scoped>
img{width:100%;}
.hand-block{width:10vh;}
.loadingscreen-block, .loadingscreen-block--hand{
  left: 50%;
  top: calc(50% - 70px / 2);
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
  z-index: 100000;
  color: white;
  width:100%;
}

.loadingscreen-block--hand {
  top: calc(40% - 15vh / 2);
}

.loadingscreen-tittle {
  font-size: 70px;
}

.loadingscreen {
  height: 100vh;
  width:100%;
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

.flipx-enter{
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
span{display:block;}
.loadingscreen-tittle {
    font-size: 52px;
}


.loadingscreen-tittlee {
    font-size: 32px;
}

}

</style>
