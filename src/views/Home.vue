<template>
<div class="home">
  <navigation></navigation>
  <sidebar class="none"></sidebar>
  <home-header></home-header>
  <home-about-me></home-about-me>
  <home-reviews></home-reviews>
  <home-my-Work></home-my-work>
  <foter></foter>
</div>
</template>

<script>
import navigation from "@/components/navigation";
import sidebar from "@/components/sidebar";

import HomeHeader from "@/section/HomeHeader";
import HomeAboutMe from "@/section/HomeAboutMe";
import HomeReviews from "@/section/HomeReviews";
import HomeMyWork from "@/section/HomeMyWork";
import foter from "@/components/footer";


export default {
  name: 'Home',
  components: {
    navigation,
    HomeHeader,
    sidebar,
    HomeAboutMe,
    HomeReviews,
    HomeMyWork,
    foter
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 1230px) {
    .home {
        overflow-x: hidden;
    }
}

img {
    width: 100%;
    display: block;
}

svg {
    width: 100%;
    display: block;
}
</style>
