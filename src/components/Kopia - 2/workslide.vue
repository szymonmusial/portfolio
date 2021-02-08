<template>
  <div class="work-description__img">
    <img :src="this.img" alt="">
  </div>
</template>

<script>


export default {
  name: 'work-slide',
  props: {
    img:String
  },
  data() {
    return {}
  },
  created() {},
}
</script>
<style lang="scss" scoped>

.work-description__img {
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
}

@media screen and (max-width: 760px) {

.work-description__img {
  margin: 62px 0;

}}
</style>
