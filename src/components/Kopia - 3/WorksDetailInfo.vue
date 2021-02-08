<template>
<div class="detail-info">
  <subtitle :class="color">{{name}}</subtitle>
  <div class="detail-info__content" :class="color === 'white' ? 'white--content' : 'black--content'">
    {{content}}
  </div>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
export default {
  name: 'WorksDetailInfo',
  components: {
    subtitle
  },
  props: {
    name: String,
    content: String,
    color: String
  }
}
</script>
<style scoped>
.detail-info__content {
  font-size: 15px;
  font-weight: 600;
  margin-top: 15.5px;
  color: #fff;
  line-height: 30px;
}

.detail-info {
  margin-top: 62px;
}

.white {
  color: rgba(255, 255, 255, 0.8) !important;
}

.white--content {
  color: rgba(255, 255, 255) !important;
}

.black {
  color: #1C1C20 !important;

}

.black--content {
  color: #1C1C20 !important;

}
</style>
