<template>
<div class="cosss">
  <div id="animation-triger-four"></div>
  <div id="animation-triger-fife"></div>
  <div class="reviews__wrapper">
    <subtitle class="center reviews-animation--opacity">front-end developer </subtitle>
    <titlee class="center titlee--reviews reviews-animation--opacity">Co mowią o mnie klienci</titlee>
    <div class="background">
      <div class="animation-block-cos">

      </div>
      <vue-glide :perView='1' type="carousel" focusAt="center" :peek="400" :gap="100" class="reviews-animation--opacity">
        <vue-glide-slide v-for="i in 10" :key="i" class="cos">
          <div class="test">
            <reviewslide></reviewslide>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</div>
</template>

<script>
import {
  Glide,
  GlideSlide
} from 'vue-glide-js'
import reviewslide from "@/components/reviewslide";
import titlee from "@/components/title";
import subtitle from "@/components/subtitle";
//import reviewslide from "@/components/reviewslide";


import {
  TweenMax,
  TimelineMax
} from 'gsap'


export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    reviewslide,
    titlee,
    subtitle

  },
  mounted() {
    if (!this.ismobile)
      this.$ScrollAnimationdesktop();
    else
      this.$ScrollAnimationmobile();


  },
  methods: {

    $ScrollAnimationdesktop: function() {
      const timeline = new TimelineMax()
      timeline.add([
        TweenMax.to('.reviews-animation--opacity', 1, {
          css: {
            opacity: '1',

            //    background: 'red',

          }
        }),
      ])

      const shapeScene = this.$scrollmagic.scene({
          triggerElement: '#animation-triger-four',
          duration: '400',
        })
        .setTween(timeline)
      this.$scrollmagic.addScene([shapeScene])





      const timeline10 = new TimelineMax()
      timeline10.add([
        TweenMax.to('.reviews__wrapper', 1, {
          css: {
            margin: '20vh 0 0 0',

            //    background: 'red',

          }
        }),
      ])

      const shapeScene10 = this.$scrollmagic.scene({
          triggerElement: '#animation-triger-fife',
          duration: '500',
        })

        .addIndicators({
          name: "tween css class"
        }) // add indicators (requires plugin)
        .setTween(timeline10)
      this.$scrollmagic.addScene([shapeScene10])






      const timeline11 = new TimelineMax()
      timeline11.add([
        TweenMax.to('.animation-block-cos', 1, {
          css: {
            width:'100%',
            margin:'-10vh 0 0 0'

            //    background: 'red',

          }
        }),
      ])

      const shapeScene11 = this.$scrollmagic.scene({
          triggerElement: '#animation-triger-fife',
          duration: '500',
        })

        .addIndicators({
          name: "tween css class"
        }) // add indicators (requires plugin)
        .setTween(timeline11)
      this.$scrollmagic.addScene([shapeScene11])








    }
  }
}
</script>
<style scoped>
.animation-block-cos {
  width: 45%;
  height: 100%;
  margin-left:-10vh;
  background-color: #105AFB;
  position: absolute;
  margin-top: -10vh;


}

#animation-triger-four {  position: absolute;top:10vh;}

#animation-triger-fife {
  position: absolute;
  top: -15vh;
}

.cosss {
  position: relative;
}

.glide {
  opacity: 1;
}

.reviews-animation--opacity {
  opacity: 0;
}

.glide__slide--active {
  transform: scale(1) !important;
}

.glide__slide {
  transform: scale(0.8);
  transition: 1s;
  border: solid #B2B2B2 0.5px;
}

.background {

  padding: 10vh 0;
  margin: 0 10vh;
  position:relative;

}

.center {
  text-align: center;
}

.titlee--reviews {
  margin-bottom: 1.8em;
}

.reviews__wrapper {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  margin-top: 0vh;
}

img {
  width: 100%;
}

.test {
  width: 100%;
  display: block;
}

.cos {}
</style>
