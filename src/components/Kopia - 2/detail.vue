<template>
<div class="detail detail--animation" :class="theme">
  <div class="detail__container opacity--animation">
    <subtitle :class="theme === 'light' ? 'black' : 'white'">{{dataproject.subtitle}}</subtitle>
    <titlee modifier="title--left" :color="theme === 'light' ? 'black' : 'white'">{{dataproject.title}}</titlee>
    <info :name="item.name" :content="item.content" v-for="item in dataproject.detail" :key="item.name" :color="theme === 'light' ? 'black' : 'white'"></info>
  </div>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import info from "@/components/detailinfo";

export default {
  name: 'detail',
  components: {
    subtitle,
    titlee,
    info

  },
  props: {
    dataproject: Object,
    theme: {
      type: String,
      default: "light"
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
}
</script>
<style lang="scss" scoped>
.title--emote {
    font-size: 38px;
}
.title--detail {
    margin-bottom: 31px;
}

.detail {
    width: 40%;
    height: 100vh;
    background-color: #191A1E;
    position: relative;
    float: left;
}

.detail__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.detail__info {
    font-size: 15px;
    font-weight: 600;
    margin-top: 15.5px;
    color: #fff;
    line-height: 30px;
}

.detail__information-block {
    margin-top: 62px;
}

img {
    width: 100%;
    display: block;
}

svg {
    width: 100%;
    display: block;
}

.white {
    color: rgba(255, 255, 255,0.8)!important;
}
.black {
    color: rgba(28, 28, 32,0.8)!important;
}

.light {
    background-color: white;
}


@media screen and (max-width: 1400px) {
.detail{height: fit-content;clear:both;}
.detail__container{
    position: relative;
    top: unset;
    left: unset;
    transform: none;
    padding: 93px;
}
}

@media screen and (min-width: 760px) {

    .detail--animation {
        width: 80%;
    }
    .opacity--animation {
        opacity: 0;
    }
}

@media (max-width: 992px) {
.detail--animation{width:100%!important;}
.opacity--animation{opacity:1; text-align: center;}
}
@media (max-width: 768px) {
.detail__container{padding: 62px 31px;}

}
</style>
