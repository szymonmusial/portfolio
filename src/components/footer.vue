<template>
<footer>
  <div class="footer">

    <subtitle class="white">{{this.$GetComponentData('subtitle')}}</subtitle>
    <titlee color="white" :rawhtml="this.$GetComponentData('tittle')"></titlee>
    <router-link :to="this.$GetComponentData('button').path" v-if="this.$GetComponentData('button').path !== undefined">
      <buttons class="black footer__buttons--margin" color="white">{{this.$GetComponentData('button').text}}</buttons>
    </router-link>
  </div>
  <div class="footer__down">
    <div class="footer__brand-name">{{this.$GetComponentData('brand')}}</div>
    <div class="footer__img">
    </div>
    <subtitle>{{$GetComponentData('copyright')}}</subtitle>
  </div>
</footer>
</template>

<script>
import buttons from "@/components/buttons";
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
export default {
  name: 'foter',
  props: {
    modifier: String
  },
  components: {
    buttons,
    subtitle,
    titlee
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$SetGetData()
  },
}
</script>

<style scoped>
footer {
  width: 100%;
}

.footer {
  width: 100%;
  background-color: #141418;
  text-align: center;
  padding: 80px 0px;
  position: relative;
  z-index: 1000;
  clear: both;
}

.white {
  color: #fff;
}

.black {
  color: #000;
}

.footer__down {
  width: 100%;
  padding: 30px 0px;
  color: #000;
  text-align: center;
  background-color: #fff;
  position: relative;
  z-index: 1000;
}

.footer__brand-name {
  font-size: 23px;
  font-weight: bold;
  -webkit-text-stroke: 0.2px black;
  position: absolute;
  left: 31px;
}

.footer__buttons--margin {
  margin-top: 20px;
}

.footer__img {
  position: absolute;
  right: 31px;
}

@media screen and (max-width: 760px) {

  /* .home  .footer {  margin-top: 31px; } */
  .footer {
    position: relative;
    float: left;
  }

  .footer__down {
    float: left;
  }

  .footer__brand-name {
    display: none;
  }
}

@media screen and (max-width: 576px) {
  .footer {
    padding: 62px 0px;
  }

}
</style>
