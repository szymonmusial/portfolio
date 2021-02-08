<template>
<div class="works-description-slider">
  <div class="works-description-slider__container opacity--animation">
    <vue-glide :perView='3' type="slider" focusAt="0" :bound="true" :gap="30" :breakpoints="{1400:{perView:2},992:{perView:3},576:{perView:2}}">
      <vue-glide-slide v-for="(item, index) in dataproject.img" :key="index">
        <works-description-slide :img="$GetImgUrl(item.url)"></works-description-slide>
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

import WorksDescriptionSlide from "@/components/WorksDescriptionSlide";
export default {
  name: 'WorksDescriptionSlider',
  props: {
    dataproject: Object
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    WorksDescriptionSlide
  }
}
</script>
<style lang="scss" scoped>
.works-description-slider {
    width: 60%;
    float: left;
    overflow: hidden;
    height: 100vh;
    position: relative;
}
.works-description-slider__container {
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

@media screen and (max-width: 1441px) {
.works-description-slider{height: 120vh;}
}
@media screen and (max-width: 1400px) {
    .works-description-slider {
        width: 50%;
    }
}
@media (max-width: 992px) {
    .works-description-slider {
        width: 100%;
        height: fit-content;
    }
    .opacity--animation {
        opacity: 1;
    }
    .works-description-slider__container {
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
    .works-description-slider__container {
        padding: 31px 0;
    }
}
@media screen and (min-width: 760px) {

    .opacity--animation {
        opacity: 0;
    }

}

@media (max-width: 576px) {
    .works-description-slider__container {
        padding: 0;
    }

}
</style>
