<template>
<div class="works-detail works-detail--animation" :class="theme">
  <div class="works-detail__container opacity--animation">
    <subtitle :class="theme === 'light' ? 'black' : 'white'">{{dataproject.subtitle}}</subtitle>
    <titlee modifier="title--left" :color="theme === 'light' ? 'black' : 'white'">{{dataproject.title}}</titlee>
    <works-detail-info :name="item.name" :content="item.content" v-for="item in dataproject.detail" :key="item.name" :color="theme === 'light' ? 'black' : 'white'"></works-detail-info>
  </div>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import WorksDetailInfo from "@/components/WorksDetailInfo";

export default {
  name: 'WorksDetail',
  components: {
    subtitle,
    titlee,
    WorksDetailInfo
  },
  props: {
    dataproject: Object,
    theme: {
      type: String,
      default: "light"
    }
  }
}
</script>
<style lang="scss" scoped>
.title--emote {
    font-size: 38px;
}
.title--works-detail {
    margin-bottom: 31px;
}

.works-detail {
    width: 40%;
    height: 100vh;
    background-color: #191A1E;
    position: relative;
    float: left;
}

.works-detail__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
    .works-detail {
        height: fit-content;
        clear: both;
    }
    .works-detail__container {
        position: relative;
        top: unset;
        left: unset;
        transform: none;
        padding: 93px;
    }
}
@media (max-width: 992px) {
    .works-detail--animation {
        width: 100%!important;
    }
    .opacity--animation {
        opacity: 1;
        text-align: center;
    }
}
@media screen and (min-width: 760px) {
    .works-detail--animation {
        width: 80%;
    }
    .opacity--animation {
        opacity: 0;
    }
}
@media (max-width: 768px) {
    .works-detail__container {
        padding: 62px 31px;
    }

}
</style>
