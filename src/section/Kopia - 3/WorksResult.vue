<template>
<div class="works-result">
  <works-detail :dataproject="data" theme="light"></works-detail>
  <div class="works-result__photo">
    <div class="works-result__photo__img-box">
      <div class="works-result__photo__img">
        <img :src="getimgurl(data.img[0].url)">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import WorksDetail from "@/components/WorksDetail";
export default {
  name: 'WorksResult',
  components: {
    WorksDetail
  },
  props: {
    data: Object
  }
}
</script>
<style scoped>
.works-result {
    width: 100%;
}
.works-result__photo {
    width: 60%;
    height: 100vh;
    background-color: #191a1e;
    float: left;
    position: relative;
}
.works-result__photo__img-box {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 50%;
    transform: translate(0, -50%);
}
.works-result__photo__img {
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-transform: translateZ(0) scale(1, 1);
}
@media screen and (max-width: 1400px) {
    .works-result__photo {
        width: 50%;
    }
    .works-result {
        width: 100%;
        position: relative;
        height: fit-content;
        display: block;
        overflow: hidden;
        display: flex;
        align-items: center;
        background-color: #191a1e;
    }
    .works-result__photo__img-box {
        width: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
@media (max-width: 992px) {
    .works-result {
        display: flex;
        flex-direction: column-reverse;
    }
    .works-result__photo {
        width: 100%;
    }
    .works-result__photo__img-box {
        position: relative;
        width: 100%;
        left: 0;
        top: 0;
        padding: 31px 0;
        transform: none;
    }
    .works-result__photo {
        height: fit-content;
    }
}
</style>
