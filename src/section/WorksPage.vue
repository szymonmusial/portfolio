<template>
<div class="works-page">
  <subtitle>{{subtitle}}</subtitle>
  <titlee>{{title}}</titlee>
  <div class="works-page__img">
    <img :src="$GetImgUrl(img)" @click="OpenTestimonial(img)">
  </div>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";

export default {
  name: 'worksPage',
  components: {
    titlee,
    subtitle
  },
  props: {
    title: String,
    subtitle: String,
    img: String
  },
  data() {
    return {
      eventstatus: 0
    }
  },
  methods: {
    OpenTestimonial: function(testimonial) {
      this.$emit('OpenTestimonial', testimonial)
    }
  }
}
</script>
<style scoped>
.works-page {
    padding-top: 15vh;
    position: relative;
    float: left;
    text-align: center;
    width: 100%;
    background-color: #F1F1F3;
}
.works-page__img {
    width: 70%;
    margin: 31px auto 0;
    padding: 0;
    cursor: zoom-in;
}

.works-page__img img {
    border: solid 2px #EAEAED;
}

@media screen and (max-width: 1280px) {
    .works-page__img {
        min-width: min(1028px, calc(100% - 62px));
    }
}
@media (max-width: 992px) {
    .works-page {
        padding-top: 62px;
    }
    .works-page__img {
        min-width: calc(100% - 32px);
    }
}

/* Fix Responsive breakpoints */
@media (min-width: 768px) {
.works-page__img{margin: 8px auto;}
}
@media (min-width: 0px) {
.works-page__img{margin: 4px auto;}
}
@media (min-width: 1440px) {
.works-page__img{margin: 16px auto;}
}
</style>
