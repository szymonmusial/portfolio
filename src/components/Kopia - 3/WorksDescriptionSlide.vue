<template>
  <div class="works-description-slide">
    <img :src="this.img" alt="">
  </div>
</template>

<script>


export default {
  name: 'WorksDescriptionSlide',
  props: {
    img:String
  }
}
</script>
<style scoped>

.works-description-slide {
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
}

@media screen and (max-width: 760px) {

.works-description-slide {
  margin: 62px 0;

}}
</style>
