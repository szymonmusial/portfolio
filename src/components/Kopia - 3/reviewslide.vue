<template>
<div class="reviews__slide__container">
  <div class="reviews__slide__row">
    <div class="reviews__slide__star" v-for="i in item.stars" :key="i">
      <img src="../assets/star.svg" alt="">
    </div>
  </div>
  <p class="reviews__slide__text" v-html="item.text">>
  </p>
  <div class="reviews__slide__info-container">
    <div class="reviews__slide__info reviews__slide__info--button" v-on:click="opentestimonial(item.testimonial)">
      <buttons modifier="buttons--out-line" color="black">Zobacz referencję</buttons>
    </div>
    <div class="reviews__slide__brand-name">
      <img :src="this.getimgurl(item.logo.url)" alt="">
    </div>
    <div class="reviews__slide__info reviews__slide__info--author">
      {{item.author}}<br>
      <span v-if="!ismobile">{{item.role}}</span>
    </div>
  </div>
</div>
</template>

<script>
import buttons from "@/components/buttons";

export default {
  props: {
    item: Object
  },
  components: {
    buttons,
  },
  methods: {
    opentestimonial: function(testimonial) {
      this.$emit('opentestimonial', testimonial)
    }
  },
  computed: {
    ismobile: function() {
      let mobile;

      if (window.innerWidth <= 1000)
        mobile = true;
      else
        mobile = false;
      return mobile;
    }
  }
}
</script>

<style scoped>
.reviews__slide__container {
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  text-align: center;
}

.reviews__slide__text {
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.1em;
  margin-top: 15px;
  margin-bottom: 31px;
}

.reviews__slide__star {
  width: 25px;
  display: inline-block;
  margin: 0.3em;
}

.reviews__slide__row {
  padding-top: 31px;
}

.reviews__slide__brand-name {
  width: 20%;
  display: inline-block;
}

.reviews__slide__info {
  display: inline-block;
  position: absolute;
  top: 60%;
  transform: translate(0, -50%);
  line-height: 25px;
  font-weight: 600;
}

.reviews__slide__info--author {
  right: 5% !important;
}

.reviews__slide__info--button {
  left: 5% !important;
}

.reviews__slide__info-container {
  display: block;
  position: relative;
}

@media screen and (max-width: 760px) {

  .reviews__slide__container {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    padding: 31px;
  }

  .reviews__slide__row {
    width: 60%;
    padding-top: 0px;
    float: right;
  }

  .reviews__slide__star {
    display: block;
    float: right;
    width: 20px;
    margin: 0 0.3em;
  }

  .reviews__slide__text {
    clear: both;
    text-align: left;
    margin: 0px;
    line-height: 25px;
    padding:20px 0px;
    padding-bottom:40px;
  }

  .reviews__slide__info-container {
    position: unset;
  }

  .reviews__slide__brand-name {
    display: none;
  }

  .reviews__slide__info {
    transform: none;
      left: 31px!important;
  }

    .reviews__slide__info--author {
      transform: none;
  top: 31px;
  right: auto !important;
}

  .reviews__slide__info--button{bottom:20px;top: auto;}
}
</style>
