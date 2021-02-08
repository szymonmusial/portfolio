<template>
<header>
  <div class="header__block">
    <subtitle class="center">{{this.getcomponentdata('subtitle')}}</subtitle>
    <titlee modifier="title--normal" class="center titlee--header"><span v-html="this.getcomponentdata('tittle')"></span></titlee>
    <ahref :path="this.getcomponentdata('button').path">
      <buttons>{{this.getcomponentdata('button').text}}</buttons>
    </ahref>
  </div>
  <scroll modifier="scroll--down" class="none" v-if="screenwidth > 1230">{{this.getcomponentdata('scroll--down')}}</scroll>
  <scroll modifier="scroll--center" class="none" v-if="screenwidth > 1230">{{this.getcomponentdata('scroll--center')}}</scroll>
</header>
</template>

<script>
import scroll from "@/components/scroll";
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import buttons from "@/components/buttons";
import ahref from "@/components/ahref";

export default {
  name: 'HomeHeader',
  components: {
    scroll,
    subtitle,
    titlee,
    buttons,
    ahref
  },
  mounted() {
    this.setgetdata()
  }
}
</script>
<style scoped>

.header__block {
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
}

@media screen and (min-width: 761px) {
    .header__block {
        width: 950px!important;
        max-width: 100%;
    }
}

@media screen and (max-width: 1230px) {
    header {
        height: 93vh;
    }
    .header__block {
        width: 80%;
    }
}
@media screen and (max-width: 600px) {
    header {
        height: calc(100vh - 120px);
    }
}

@media screen and (max-width: 576px) {
    .header__block {
        width: 100%;
    }
    .titlee--header {
        margin: 16px 16px 24px;
    }
}
</style>
