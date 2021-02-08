<template>
<div class="home-my-work">
  <div class="home-my-work__text" id="home-my-work__text">
    <subtitle>{{this.$GetComponentData('subtitle--top')}}</subtitle>
    <titlee modifier="title--left">{{this.$GetComponentData('tittle')}}</titlee>
    <subtitle>{{this.$GetComponentData('subtitle--down')}}</subtitle>
  </div>
  <div>
    <div v-if="this.$GetComponentData('Works').Work !== undefined">
      <vue-glide :perView='sliderviev' type="slider" focusAt="0" :gap="30" :bound="true" class="home-my-work__slider" id="home-my-work__slider" :key="sliderviev">
        <vue-glide-slide v-for="(item, index) in this.$GetComponentData('Works').Work" :key="index">
          <home-my-work-slide :heightfactor="heightfactor" :data="item"></home-my-work-slide>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</div>
</template>
<script>
import titlee from "@/components/title";
import subtitle from "@/components/subtitle";
import HomeMyWorkSlide from "@/components/HomeMyWorkSlide";
import {
  Glide,
  GlideSlide
} from 'vue-glide-js'

export default {
  name: 'HomeMyWork',
  components: {
    titlee,
    subtitle,
    HomeMyWorkSlide,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  data() {
    return {
      sliderviev: 3,
      slider: false,
      heightfactor: '1.96',
    }
  },
  mounted() {
    this.$SetGetData()
  },
  watch: {
    screenwidth: function(val) {

      if (val < 900) {
        this.sliderviev = 2
      }
      if (val < 1230) {
        this.heightfactor = '1.8'
      }
      if (val > 900) {
        this.sliderviev = 3
      }
      if (val < 600) {
        this.sliderviev = 1
        this.heightfactor = '1.6'
      }
    }
  }
}
</script>
<style scoped>
.home-my-work {
    width: calc(100% - 31px * 4 - 50px);
    margin: 0 auto;
    height: fit-content;
    position: relative;
    clear: both;
}

.home-my-work__text {
    float: left;
    padding: 40px;
    margin: 5vh 6% 6%;
    position: absolute;
    top: 62px;
}

.home-my-work__slider {
    position: relative;
    height: fit-content;
    right: 0;
    overflow: hidden;
    width: 60vw;
    float: right;
}

@media screen and (max-width: 1580px) {
    .home-my-work__text {
        width: auto;
        margin: 5vh 0 6%;
    }

    .home-my-work__slider {
        right: -62px;
        width: calc(60vw + 62px);
    }
}

@media screen and (max-width: 1230px) {
    .home-my-work {
        width: calc(100% - 31px * 2);
    }
    .home-my-work__slider {
        width: 100%;
        right: 0;
    }
    .home-my-work__text {
        position: relative;
        padding: 0;
        margin: 0;
        text-align: center;
        width: 100%;
        margin-bottom: 0;
    }
    .title--left {
        margin: 0;
    }
}
@media screen and (max-width: 900px) {
    .home-my-work__text {
        margin: 0 0 31px;
    }
}

@media screen and (max-width: 576px) {
    .work__text {
        padding: 48px 31px 31px;
    }
}
</style>
