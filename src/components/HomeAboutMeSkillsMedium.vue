<template>
<div class="skills-medium">
  <subtitle class="center ">{{this.$GetComponentData('subtitle')}}</subtitle>
  <titlee class="center">{{this.$GetComponentData('tittle--medium')}}</titlee>
  <div class="skills-medium__wrapper" v-for="(item, index) in GetSkills" :key="index">
    <transition name="fade">
      <div v-if="visiblerow > index">
        <div class="skills-medium__title">{{item.skillname}}</div>
        <div class="skills-medium__container">
          <div class="skill__container" v-for="(skill, index) in item.skillobject" :key="index">
            <div class="skills-medium__img"><img :src="$GetImgUrl(skill.img.url)"></div>
            <div class="skills-medium__text">{{skill.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <transition name="fade" v-if="visiblerow < GetSkills.length">
    <div @click="ShowOneMore">
      <buttons>Pokaż więcej</buttons>
    </div>
  </transition>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import buttons from "@/components/buttons";

export default {
  name: 'HomeAboutMeSkills',
  components: {
    buttons,
    subtitle,
    titlee,
  },
  data() {
    return {
      visiblerow: 1
    }
  },
  computed: {
    GetSkills: function() {
      let skills = []
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].skillid !== undefined) {
          skills.push(this.$GetComponentData(this.componentsdata[i].skillid))
        }
      }
      return skills
    }
  },
  created() {},
  methods: {
    ShowOneMore: function() {
      this.visiblerow = this.visiblerow + 1
    },
    ShowOneLess: function() {
      this.visiblerow = this.visiblerow - 1
    },
  },
  mounted() {
    this.$SetGetData()
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.center {
    text-align: center;
}
.skills-medium {
    text-align: center;
    margin-bottom: 93px;
}
.skills-medium__container {
    width: 1040px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
}
.skill__container {
    flex: 1 0 20%;
    margin: 2.5%;
    position: relative;
    filter: grayscale(100%);
    transition: 0.75s;
}
.skill__container:before {
    content: '';
    float: left;
    padding-top: 100%;
}
.skill__container:hover {
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.50);
    filter:none;
}

.skills-medium__img {
    width: 35%;
    margin: 16.25% 32.5%;
}
.skills-medium__text {
    text-align: center;
    font-size: 18px;
}
.skills-medium__wrapper {
    text-align: center;
}
.skills-medium__title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 62px!important;
    margin-bottom: 0;
}

@media screen and (max-width: 600px) {
    .skill__container {
        flex: 1 0 45%;
    }
}

.skills-medium__container {
    width: 840px;
}
.skills-medium__title {
    font-size: 16px;
    margin-top: 31px !important;
}
.skills-medium__text {
    font-size: 14px;
}

@media screen and (max-width: 576px) {
    .skills-medium {
        margin-bottom: 62px;
    }
}

/* Fix Responsive breakpoints */
@media (min-width: 1440px) {
.skills-medium{
    text-align: center;
    margin-bottom: 93px;
    margin-top: 62px;
}
}
@media (max-width: 1440px) {
.skills-medium{
    text-align: center;
    margin-bottom: 93px;
    margin-top: 62px;
}
}

@media (max-width: 768px) {

  .skills-medium{
      text-align: center;
      margin-bottom: 93px;
      margin-top: 93px;
  }

}
</style>
