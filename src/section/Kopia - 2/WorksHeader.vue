<template>
<header>
  <div class="works__header__block">
    <subtitle>{{data.subtitle}}</subtitle>
    <titlee modifier="title--normal">{{data.title}}</titlee>
  </div>
  <scroll modifier="scroll--center" v-if="screenwidth > 1400">{{data.scroll}}</scroll>
  <div class="works__header__img">
    <img :src="getimgurl(data.img.url)">
  </div>
</header>
</template>
<script>
import scroll from "@/components/scroll";
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";

export default {
  name: 'WorksHeader',
  components: {
    scroll,
    subtitle,
    titlee,
  },
  props: {
    data: Object,
  }
}
</script>
<style scoped>
.works__header__block {
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
}

.works__header__img {
  width: 50%;
  min-width: min(700px, calc(100% - 62px));
  position: absolute;
  left: 50%;
  bottom: 0;
  border: solid 2px #EAEAED;
  border-bottom: 0;
  z-index: 1;
  transform: translate(-50%, 0)
}

@media screen and (max-width: 1400px) {
  header {
    float: left;
    clear: both;
    width: 100%;
  }
}

@media screen and (max-width: 1230px) {
  header {
    height: 100vh;
  }
}

@media (max-width: 768px) {
  header {
    height: 70vh;
    position: relative;
  }

  .works__header__block {
    top: 40%;
  }
}
</style>
