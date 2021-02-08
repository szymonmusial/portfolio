<template>
<div class="works-description works-description--animation">
  <works-detail :dataproject="data" theme="dark"></works-detail>
  <works-description-slider :dataproject="data"></works-description-slider>
</div>
</template>
<script>
import WorksDescriptionSlider from "@/components/WorksDescriptionSlider";
import WorksDetail from "@/components/WorksDetail";

export default {
  name: 'WorksDescription',
  components: {
    WorksDescriptionSlider,
    WorksDetail
  },
  props: {
    data: Object
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
