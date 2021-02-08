<template>
<div class="works-description works-description--animation">
  <detail :dataproject="data" theme="dark"></detail>
  <workcarousel :dataproject="data"></workcarousel>
</div>
</template>
<script>
import workcarousel from "@/components/workcarousel";
import detail from "@/components/detail";

export default {
  name: 'WorksDescription',
  components: {
    workcarousel,
    detail
  },
  props: {
    data: Object,
  }
}
</script>
<style scoped>
.works-description--animation {
    margin-top: -31px;
}
.works-description {
    width: 100%;
}
@media screen and (max-width: 1400px) {
    .works-description--animation {
        width: 100%;
        position: relative;
        height: fit-content;
        display: block;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
}
@media (max-width: 992px) {
    .works-description--animation {
        display: block;
    }
}
</style>
