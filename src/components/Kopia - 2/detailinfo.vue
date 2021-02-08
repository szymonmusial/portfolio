<template>
  <div class="detail__information-block">
    <subtitle :class="color">{{name}}</subtitle>
    <div class="detail__info" :class="color === 'white' ? 'white--content' : 'black--content'">
    {{content}}
    </div>
  </div>
</template>

<script>
import subtitle from "@/components/subtitle";

export default {
  name: 'info',
  components: {
    subtitle,

  },
  props: {
  name: String,
  content: String,
  color: String,
},
  computed: {},
  created() {},
}
</script>
<style lang="scss" scoped>





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

.white--content{
    color: rgba(255, 255, 255)!important;
}

.black {
    color: #1C1C20!important;

}
.black--content{
    color: #1C1C20!important;

}
@media screen and (max-width: 760px) {


}
</style>
