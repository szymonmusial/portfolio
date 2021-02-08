<template>
<div>
  <div class="wrapper" v-bind:style="{ height: aboutheight+'px' }">
     <!-- was screenwidth > 1900 -->
    <home-about-me-skills-large v-if="false"></home-about-me-skills-large>
    <div id="animation-triger-one"></div>
    <div id="animation-triger-two"></div>
    <div id="animation-triger-three"></div>
    <home-about-me-description :key="screenwidth" @divupdate="ObserveHeight()"></home-about-me-description>
  </div>                             <!-- was screenwidth < 1900 -->
  <home-about-me-skills-medium v-if="true"></home-about-me-skills-medium>
</div>
</template>
<script>
import HomeAboutMeSkillsLarge from "@/components/HomeAboutMeSkillsLarge";
import HomeAboutMeSkillsMedium from "@/components/HomeAboutMeSkillsMedium";
import HomeAboutMeDescription from "@/components/HomeAboutMeDescription";
export default {
  name: 'HomeAboutMe',
  data() {
    return {
      aboutheight: "500"
    }
  },
  components: {
    HomeAboutMeSkillsLarge,
    HomeAboutMeSkillsMedium,
    HomeAboutMeDescription
  },
  methods: {
    ObserveHeight: function() {
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
    setTimeout(() => this.ObserveHeight(), 1)
  }
}
</script>
<style scoped>
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

.wrapper {
    width: calc(100% - 31px * 4 - 50px);
    margin: 0 auto;
    height: 90vh;
    position: relative;
}
@media screen and (max-width: 1500px) {
    #animation-triger-one {
        position: absolute;
        top: 0;
        margin-top: -32vh!important;
    }
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
@media screen and (max-width: 576px) {
    .wrapper {
        margin-bottom: calc(62px) !important;
    }
}
</style>
