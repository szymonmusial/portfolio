<template>
<div class="work-description__carousel">
  <div class="work-description__carousel__container opacity--animation">
    <vue-glide :perView='3' type="slider" focusAt="0" :bound="true" :gap="30" class="reviews__animation--opacity" :breakpoints="{1400:{perView:2},992:{perView:3},576:{perView:2}}">>

      <vue-glide-slide v-for="(item, index) in dataproject.img" :key="index">
        <slide :img="getimgurl(item.url)"></slide>
      </vue-glide-slide>
    </vue-glide>
  </div>
</div>
</template>

<script>
import {
  Glide,
  GlideSlide
} from 'vue-glide-js'

import slide from "@/components/workslide";


export default {
  name: 'work-description',
  props: {
    dataproject: Object
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    slide,

  },
  data() {
    return {

    }
  },
  created() {},
}
</script>
<style lang="scss" scoped>
.work-description__carousel {
    width: 60%;
    float: left;
    overflow: hidden;
    height: 100vh;
    position: relative;
}
.work-description__carousel__container {
    width: 90%;
    margin-left: 10%;
    float: right;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

}
.glide__slide--clone {
    opacity: 1;
}
.glide__slide--active {
    opacity: 1;
}

@media screen and (max-width: 1400px) {
    .work-description__carousel {
        width: 50%;
    }
}

@media screen and (min-width: 760px) {

    .opacity--animation {
        opacity: 0;
    }

}

@media (max-width: 992px) {
    .work-description__carousel {
        width: 100%;
        height: fit-content;
        position: relative;
    }
    .opacity--animation {
        opacity: 1;
    }
    .work-description__carousel__container {
        width: 100%;
        margin: 0;
        float: right;
        position: relative;
        top: 50%;
        transform: none;
        padding: 93px 0;
    }

}
@media (max-width: 768px) {
    .work-description__carousel__container {
        padding: 31px 0;
    }
}

@media (max-width: 576px) {
    .work-description__carousel__container {
        padding: 0;
    }

}
</style>
