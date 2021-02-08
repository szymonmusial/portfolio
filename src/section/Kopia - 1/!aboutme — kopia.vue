<template>
<div>
  <div class="wrapper" v-bind:style="{ height: aboutheight+'px' }">
    <aboutskill v-if="screenwidth > 1900"></aboutskill>
    <div id="animation-triger-one"></div>
    <div id="animation-triger-two"></div>
    <div id="animation-triger-three"></div>
    <aboutdescription :key="screenwidth" @divupdate="obsheight()"></aboutdescription>

    <!--
    <div id="animation-triger-four" v-if="screenwidth < 1900"></div>
    <div id="animation-triger-five" v-if="screenwidth < 1900"></div>
    -->

  </div>

  <aboutskilllist v-if="screenwidth < 1900"></aboutskilllist>

</div>
</template>


<script>
import aboutskill from "@/components/aboutskill";
import aboutdescription from "@/components/aboutdescription";
import aboutskilllist from "@/components/aboutskilllist";
export default {
  name: 'aboutme',
  data() {
    return {
      aboutheight: "500"
    }
  },
  components: {
    aboutskill,
    aboutdescription,
    aboutskilllist
  },
  methods: {
    obsheight: function() {
      var ro = new ResizeObserver(entries => {
        for (let entry of entries) {
          const cr = entry.contentRect
          this.aboutheight = cr.height
        }
      });
      ro.observe(document.querySelector("#about-description"));
    }
  },
  mounted() {
    setTimeout(() => this.obsheight(), 1)
  },
}
</script>
<style lang="scss" scoped>
#animation-triger-one {
    position: absolute;
    top: 0;
    margin-top: -42vh;
}
#animation-triger-two {
    position: absolute;
    top: 0;
}
#animation-triger-three {
    position: absolute;
    top: 20vh;
}

#animation-triger-four {
    position: absolute;
    top: 105vh;
}

#animation-triger-five {
    position: absolute;
    top: 80vh;
}

.wrapper {
    width: calc(100% - 31px * 4 - 50px);
    margin: 0 auto;
    height: 90vh;
    //  height: 70vh;
    position: relative;
}
@media screen and (min-width: 1080px) {
    .wrapper {
        height: calc(500px + 30vh + 93px)!important;
    }
}
@media screen and (max-width: 1080px) {
    .wrapper {
        margin-bottom: calc(30vh + 93px)!important;
    }
}

@media screen and (max-width: 1060px) {
    .wrapper {
        width: calc(100% - 62px);
        margin: 0 31px!important !important;
    }
}
@media screen and (max-width: 860px) {
    .wrapper {
        width: 100%;
        margin: 0;
    }
}
@media screen and (max-width: 600px) {
    #animation-triger-one {
        margin-top: -20vh;
    }
}
@media screen and (max-width: 1500px) {
    #animation-triger-one {
        position: absolute;
        top: 0;
        margin-top: -32vh!important;
    }
}
/*
@media screen and (max-width: 760px) {

    .wrapper {
        width: 100%;
        margin-top: 80vh;
        height: 100%;
    }

    #animation-triger-one {
        margin-top: -20vh;
    }
    #animation-triger-three {
        position: absolute;
        top: 30vh;
    }
}
*/

@media screen and (max-width: 576px) {
    .wrapper {
        margin-bottom: calc(62px) !important;
    }
}
</style>
