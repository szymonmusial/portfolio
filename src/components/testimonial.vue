<template>
<div class="testimonial" v-bind:class="{'testimonial--zoom':  zoomstatus }">
  <div class="testimonial-icon" v-on:click="closetestimonial">
    <div></div>
  </div>
  <div class="testimonial__container" v-bind:class="{'testimonial__container--fix':  fiximg }" @click="zoomimg()">
    <div class="testimonial__img-container">
      <img :src="$GetImgUrl(testimonialurl)" class="testimonial__img" v-bind:class="{'testimonial__img--zoom':  zoomstatus }" @load="matchheight()">
    </div>
  </div>
</div>
</template>

<script>
import {
  TweenMax,
} from 'gsap'
export default {
  props: {
    modifier: String
  },
  data: function() {
    return {
      testimonialurl: '',
      zoomstatus: true,
      imgheight: '0',
      windowheight: '17',
      imgwidth: '17'
    }
  },
  methods: {
    hidescroll: function(boolean) {
      const body = document.querySelector("body")
      if (boolean === true) {
        body.classList.add("hidescroll")
      } else {
        body.classList.remove("hidescroll")
      }
    },
    matchheight() {
      const img = document.querySelector(".testimonial__img");
      const imgheight = img.height
      const windowheight = window.innerHeight
      const imgwidth = img.offsetWidth
      this.windowheight = windowheight
      this.imgheight = imgheight
      this.imgwidth = imgwidth
    },
    zoomimg: function() {
      const zoom = this.zoomstatus
      if (zoom) {
        this.zoomstatus = false
      } else {
        this.zoomstatus = true
      }
    },
    closetestimonial: function() {
      this.hidescroll(false)
      TweenMax.to('.testimonial', 1, {
        delay: 0,
        css: {
          top: "-120%",
          opacity: '0'
        }
      });
      this.zoomstatus = false
    },
    opentestimonial: function(testimonial) {
      this.hidescroll(true)
      this.zoomstatus = false
      this.testimonialurl = testimonial;
      TweenMax.to('.testimonial', 1, {
        delay: 0,
        css: {
          top: "0px",
          opacity: '1'
        }
      });

      TweenMax.to('.testimonial__img-container', 1, {
        delay: 0.5,
        css: {
          opacity: '1'
        }
      });


    }
  },
  computed: {
    fiximg: function() {
      let boolean = false
      if (this.imgwidth > this.imgheight) {
        boolean = true
      }
      return boolean
    }
  }
}
</script>
<style>
.hidescroll::-webkit-scrollbar {
  background: transparent;
  width: 0px;
}
</style>
<style scoped>
.testimonial__container--fix img {
  width: 100% !important;
  height: auto !important;
}


.testimonial__img {
  width: auto;
  height: 100vh;
}

.testimonial__img--zoom {
  width: 100%;
  height: auto;
}

.testimonial--zoom {
  cursor: zoom-out;
}

.testimonial--zoom .testimonial__container {
  cursor: zoom-out;
}

.testimonial__container--fix {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: default !important;
}

.testimonial__img-container {
  max-width: 100%;
  margin: 0 auto;
  opacity: 0;
  display: flex;
  justify-content: center;
}

.testimonial {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -300%;
  z-index: 100000;
  opacity: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #191A1E;
}


.testimonial:not(.testimonial--zoom)::-webkit-scrollbar {
  width: 0px;
}




.testimonial__container {
  width: 100%;
  height: fit-content;
  background-color: #191A1E;
  display: block;
  cursor: zoom-in;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
  /*
  top:50%;
  transform:translate(0,-50%);
  */
}


.testimonial-icon {
  margin-top: -20px !important;
  margin-right: -20px !important;
  width: 30px;
  position: sticky;
  float: right;
  margin-top: -3px;
  cursor: pointer;
}

.testimonial-icon div,
.testimonial-icon:after,


.testimonial-icon:before {
  background-color: #191A1E;
  content: '';
  display: block;
  height: 2px;
  margin: 7px 0;
  transition: all 0.2s ease-in-out;
}

.testimonial-icon:before {
  transform: translateY(9px) rotate(135deg);
}

.testimonial-icon:after {
  transform: translateY(-9px) rotate(-135deg);
}

.testimonial-icon div {
  transform: scale(0);
}

.testimonial-icon {
  margin-top: 0px;
  margin-right: 0px;
  width: 34px;
  padding: 10px;
  border-radius: 150%;
  position: -webkit-sticky;
  position: sticky;
  float: right;
  z-index: 1000;
  top: 16px;
  background-color: #fff;
  right: 16px;
}

.testimonial__container {
  position: absolute;
}

@media screen and (max-width: 760px) {

  .testimonial__container {
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    background-color: #191A1E;
    display: block;
    cursor: zoom-in;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .testimonial__img-container {

    width: 100%;
  }


  .testimonial__img {
    width: 100%;
    height: auto;
  }


}
</style>
