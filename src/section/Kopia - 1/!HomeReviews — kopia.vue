<template>
<div class="reviews__container">

  <div id="animation-triger-four"></div>
  <div id="animation-triger-five"></div>

  <testimonial ref="testimonial"></testimonial>
  <!--<div id="animation-triger-four"></div>-->
  <!--<div id="animation-triger-five"></div>      v-if="this.getcomponentdata('Reviews').review !== undefined"             -->
  <div class="reviews__wrapper">
    <subtitle class="center reviews__animation--opacity">{{this.getcomponentdata('subtitle')}}</subtitle>
    <titlee class="center titlee--reviews reviews__animation--opacity">{{this.getcomponentdata('tittle')}}</titlee>
    <div class="reviews__background">
      <div class="reviews__animation-block"></div>
      <!--  <vue-glide :perView='1' type="carousel" focusAt="center" :peek="400" :gap="100" class="reviews__animation--opacity"> -->
      <div class="reviews__animation--opacity"> <!-- was  type="carousel" :startAt='1 -->
        <vue-glide :perView='1' type="slider" focusAt="center" :startAt='1' :peek="peek" :gap="gap" :key="glidekey" v-if="this.getcomponentdata('Reviews').review !== undefined">
          <vue-glide-slide v-for="(item, index) in this.getcomponentdata('Reviews').review" :key="index">
            <!--  <div class="test"> -->

            <reviewslide :item="item" @opentestimonial="opentestimonial"></reviewslide>
            <!--  </div> -->
          </vue-glide-slide>
        </vue-glide>
      </div>
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
import testimonial from "@/components/testimonial";
//import reviewslide from "@/components/reviewslide";



export default {
  name: 'HomeReviews',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    reviewslide,
    titlee,
    subtitle,
    testimonial

  },
  data: function() {
    return {
      gap: 100,
      peek: 400,
      /*testgap: 0,
      testpeek: 200,*/
      review: [{
        id: '1',
        name: "Manufaktura smaku",
        text: "  Świadczone przez Forbrand.eu usługi, zarówno pod kątem przygotowania <br> oprawy graficznej serwisu, jak i skutecznego <br>   pozycjonowania cechuje pełna fachowość z uwzględnieniem najnowszych trendów <br>     dostępnych na runku usług tej branży <br>",
        stars: 5,
        author: "Kuba Musiał",
        role: "Właściciel",
        logo: "msmaku.png",
        testimonial: "metalpark.jpg",
      }, {
        id: '2',
        name: "Manufaktura smaku",
        text: "  Świadczone przez Forbrand.eu usługi, zarówno pod kątem przygotowania <br> oprawy graficznej serwisu, jak i skutecznego <br>   pozycjonowania cechuje pełna fachowość z uwzględnieniem najnowszych trendów <br>     dostępnych na runku usług tej branży <br>",
        stars: 5,
        author: "Kuba Musia",
        role: "Szef",
        logo: "msmaku.png",
        testimonial: "msmaku.png",
      }, {
        id: '3',
        name: "Manufaktura smaku",
        text: "  Świadczone przez Forbrand.eu usługi, zarówno pod kątem przygotowania <br> oprawy graficznej serwisu, jak i skutecznego <br>   pozycjonowania cechuje pełna fachowość z uwzględnieniem najnowszych trendów <br>     dostępnych na runku usług tej branży <br>",
        stars: 5,
        author: "Kuba Musiał",
        role: "Właściciel",
        logo: "msmaku.png",
        testimonial: "msmaku.png",
      }]

    }
  },
  mounted() {
    this.setgetdata()
    this.AnimationReviewsinit()
  },
  methods: {
    AnimationReviewsinit: function() {
      this.AnimationReviewsMargin()
      this.AnimationReviewsPosition()
      this.AnimationReviewsOpacity()
    },
    AnimationReviewsMargin: function() {
      const css = {
        'margin': '20vh 0 0 0'
      }
      let duration = 500
      if (this.screenwidth < 1900) {
        duration = duration - 50
      }
      this.$ScrollAnimations('.reviews__wrapper', '#animation-triger-five', duration, css)
    },
    opentestimonial: function(testimonial) {
      this.$refs.testimonial.opentestimonial(testimonial.url);
    },
    AnimationReviewsPosition: function() {
      if (this.screenwidth < 576) {
        return false;
      }
      const css = {
        'width': '100%',
        'margin': '-10vh 0 0 0'
      }
      let duration = 400
      if (this.screenwidth < 1900) {
        duration = duration - 50
      }
      this.$ScrollAnimations('.reviews__animation-block', '#animation-triger-five', duration, css)
    },
    AnimationReviewsOpacity: function() {
      const css = {
        'opacity': '1'
      }
      let duration = 200
      if (this.screenwidth < 1900) {
        duration = duration - 20
      }
      this.$ScrollAnimations('.reviews__animation--opacity', '#animation-triger-four', duration, css)
    }
  },
  computed: {
    glidekey() {
      let key = 'glide' + (this.gap + this.peek)
      return key
    },
    ismobile: function() {
      let mobile;
      if (window.innerWidth <= 1000)
        mobile = true;
      else
        mobile = false;
      return mobile;
    },
  },
  watch: {
    screenwidth: function(val) {
      if (val < 1550) {
        this.gap = 0;
        this.peek = 300
      }
      if (val < 1350) {
        this.gap = 0;
        this.peek = 200
      }
      if (val < 1150) {
        this.gap = 0;
        this.peek = 100
      }
      if (val < 950) {
        this.gap = 0;
        this.peek = 40
      }
      if (val < 850) {
        this.gap = 0;
        this.peek = 32
      }
      if (val < 500) {
        this.gap = 62;
        this.peek = 0;
      }
    }
  }
}
</script>


<style>
@keyframes example {
  0% {
    background-color: red;
  }

  100% {
    background-color: green;
  }
}
</style>
<style scoped>
#animation-triger-four {
  position: absolute;
  top: 105vh;
}

#animation-triger-five {
  position: absolute;
  top: 80vh;
}

.otot {
  max-width: 30%;
  /* margin: 0 auto; */
  margin: 0 auto;
  padding: 2em;
  background-color: #fff;
  opacity: 0;

}

.test123 {
  position: fixed;
  width: 100%;
  height: 100%;
  top: -300%;
  z-index: 1;
  opacity: 0;
}

.review__testimonial {
  width: 100%;
  height: 100%;
  background-color: #191A1E;
  display: block;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}



.reviews__animation-block {
  width: 45%;
  height: 100%;
  margin-left: -10vh;
  background-color: #105AFB;
  position: absolute;
  margin-top: -10vh;
}

#animation-triger-four {
  position: absolute;
  top: 10vh;
}

#animation-triger-five {
  position: absolute;
  top: -15vh;
}

.reviews__container {
  position: relative;
}

.glide {
  opacity: 1;
}

.reviews__animation--opacity {
  opacity: 0;
}

.glide__track .glide__slide--active {
  transform: scale(1);
}

.glide__slide--clone {
  transform: scale(0.8);
  transition: 1s;
  border: solid #B2B2B2 0.5px;
}

.glide__slide {
  transform: scale(0.8);
  transition: 1s;
  border: solid #B2B2B2 0.5px;
}


.reviews__background {
  padding: 10vh 0;
  /*padding: 62px 0;*/
  margin: 0 10vh;
  /*margin: 0 31px;*/
  position: relative;

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
  position: relative;
  overflow: hidden;
  margin-top: 0vh;
  height: fit-content !important;
  margin: 0px 0px !important;
  margin-bottom: 0px !important;
  /* was 93px */
}

img {
  width: 100%;
}

.test {
  width: 100%;
  display: block;
}

@media screen and (max-width: 1900px) {
  .reviews__container {
    margin-top: -20vh !important;
    margin-top: 31px !important;
  }
}

@media screen and (max-width: 760px) {
  .reviews__wrapper {
    height: 100%;
    height: fit-content !important;
    /*padding: 93px 0px;*/
    padding: 62px 0px;
  }

  .reviews__container {
    margin-top: 0;
  }

  .reviews__background {
    margin: 0px;
  }

  .reviews__animation--opacity {
    opacity: 1;
  }

  .glide {
    margin: 0 auto;
  }

  .reviews__animation-block {
    display: none;
  }

  .reviews__background {
    padding: 0px;
  }

  .glide__slide {
    border: 0px;
  }
}

@media screen and (max-width: 1580px) {
  .reviews__background {
    margin: 0 31px !important;
  }
}

@media screen and (max-width: 850px) {
  .reviews__animation-block {
    display: block;
  }

  .reviews__background {
    margin: 0px !important;
    padding: 64px 0 !important;
  }

  .reviews__animation-block {
    margin: -64px 0px 0px !important;
  }
}

@media screen and (max-width: 500px) {
  .reviews__wrapper {
    padding-bottom: 0px;
    margin-bottom: 32px !important;
  }

  .reviews__background {
    margin: 0px !important;
    padding: 32px 0 !important;
  }

  .reviews__animation-block {
    margin: -32px 0px 0px !important;
  }
}

@media screen and (max-width: 1640px) {
  .reviews__wrapper {
    margin: 31px 0px !important;
    margin-bottom: 0px !important;
  }
}

@media screen and (max-width: 1230px) {
  .reviews__container {
    /*margin-bottom:31px;*/
    margin-bottom: 0px;
  }

  .reviews__wrapper {
    padding-bottom: 0px !important;
  }

}


@media screen and (max-width: 576px) {
  .reviews__wrapper {
    padding: 0px;
  }

  .reviews__container {
    margin-top: 0px !important;
  }

  .reviews__animation-block {
    width: 100% !important;
    margin: -32px 0px 0px !important;
  }

  .reviews__background {
    padding: 32px 0px !important;
  }

  .glide__slide {
    transform: scale(1) !important;
  }
}
</style>
