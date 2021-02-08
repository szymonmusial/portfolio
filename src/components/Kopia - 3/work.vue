<template>
<div class="work gray" v-bind:style="{ 'height': workheight +'px' }" ref="work">
  <subtitle class="work__subtitle work__subtitle--top">{{this.data.subtitle}}</subtitle>
  <div class="work__img">
    <img :src="this.getimgurl(this.data.img.url)" alt="">
  </div>
  <div class="work__text" v-html="this.data.tittle"></div>
  <router-link :to="this.data.workpath">
    <subtitle class="work__subtitle work__subtitle--bottom">{{this.data.button}}</subtitle>
    <div class="work_arrow work__subtitle work__subtitle--bottom work__subtitle--left">
      <img src="../assets/arrow.svg" alt="">
    </div>
  </router-link>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";


export default {
  props: {
    modifier: String,
    heightfactor: String,
    data: Object,
  },
  data() {
    return {
      workheight: '0'
    }
  },
  components: {
    subtitle
  },
  watch: {
    screenwidth: function() {
      window.setTimeout(() => this.workheight = /*this.$refs.work.clientWidth*/ document.querySelector(".work").clientWidth * this.heightfactor, 0)
    }
  }
}
</script>

<style scoped>
.work {
  height: calc(20vw * 1.96);
  max-height: 700px;
  height: 70%;
  width: 100%;
  margin: 20px;
  float: right;
  position: relative;
  margin: 93px 0px !important;
}

.gray {
  background-color: #191A1E
}

.work__img {
  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
  width: 80%;
  left: 10%;
}

.work__subtitle {
  padding: 40px;
  color: #fff;
  opacity: 0.9;
  position: absolute;
}

.work__text {
  font-size: 32px;
  color: #fff;
  padding: 40px;
  position: absolute;
  top: 55%;
}

.work__subtitle--bottom {
  bottom: 0px;
  right: 0px;
}

.work_arrow {
  width: 30px;
  box-sizing: unset;
}

.work__subtitle--left {
  left: 0px;
}

.work_arrow:hover {
  transform: rotate(-45deg);
  transition: 0.3s;
}

.work {
  margin: 0px;
}


@media screen and (max-width: 900px) {
  .work {
    margin: 62px 0px !important;
  }
}
</style>
