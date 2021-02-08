<template>
<div class="about-skill-list">

  <subtitle class="center ">{{this.getcomponentdata('subtitle')}}</subtitle>
  <titlee class="center">{{this.getcomponentdata('tittle--medium')}}</titlee>

  <div class="about-skill-list__wrapper" v-for="(item, index) in getskills" :key="index">
    <transition name="fade">
      <div v-if="visiblerow > index">
        <div class="about-skill-list__title">{{item.skillname}}</div>
        <div class="about-skill-list__container">
          <div class="skill__container" v-for="(skill, index) in item.skillobject" :key="index">
            <div class="skill__img"><img :src="getimgurl(skill.img.url)"></div>
            <div class="skill__text">{{skill.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <!--
  <div id="animation-triger-four" v-if="screenwidth < 1900"></div>
  <div id="animation-triger-five" v-if="screenwidth < 1900"></div>
  -->
  <transition name="fade" v-if="visiblerow < getskills.length">
    <div @click="showonemore">
      <buttons>Pokaż więcej</buttons>
    </div>
  </transition>
  <!--
  <div @click="showoneless">
    <buttons>Pokaż więcej</buttons>
  </div>
-->
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import buttons from "@/components/buttons";

export default {
  name: 'skillcontainer',
  components: {
    buttons,
    subtitle,
    titlee,
  },
  data() {
    return {
      visiblerow: 1,
      skills: [{
        name: 'Technologie',
        list: [{
          name: 'JavaScripit',
          img: 'javascript.png'
        }, {
          name: 'vue',
          img: 'javascript.png'
        }, {
          name: 'css',
          img: 'javascript.png'
        }, {
          name: 'Bootstrap',
          img: 'javascript.png'
        }, {
          name: 'Jquery',
          img: 'javascript.png'
        }, {
          name: 'Wordpress',
          img: 'javascript.png'
        }, {
          name: 'Prestashop',
          img: 'javascript.png'
        }, {
          name: 'MySQL',
          img: 'javascript.png'
        }],
      }, {
        name: 'Narzędzia',
        list: [{
          name: 'Figma',
          img: 'javascript.png'
        }, {
          name: 'Atom',
          img: 'javascript.png'
        }, {
          name: 'Visual studio',
          img: 'javascript.png'
        }, {
          name: 'Adobe XD',
          img: 'javascript.png'
        }, ],
      }, {
        name: 'usługi',
        list: [{
          name: 'JavaScripit',
          img: 'javascript.png'
        }, {
          name: 'vue',
          img: 'javascript.png'
        }, {
          name: 'css',
          img: 'javascript.png'
        }, {
          name: 'Bootstrap',
          img: 'javascript.png'
        }, {
          name: 'Jquery',
          img: 'javascript.png'
        }, {
          name: 'Wordpress',
          img: 'javascript.png'
        }, {
          name: 'Prestashop',
          img: 'javascript.png'
        }, {
          name: 'MySQL',
          img: 'javascript.png'
        }],
      }]

    }
  },
  computed: {

    getskills: function() {
      let skills = []
      console.log(this.componentsdata)
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].skillid !== undefined) {
          skills.push(this.getcomponentdata(this.componentsdata[i].skillid))
        }
      }
      return skills
    }
  },
  created() {},
  methods: {
    showonemore: function() {
      this.visiblerow = this.visiblerow + 1
    },
    showoneless: function() {
      this.visiblerow = this.visiblerow - 1
    },
  },
  mounted() {
    this.setgetdata()
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.center {
    text-align: center;
}
.about-skill-list {
    //padding-top: 186px;
    //padding-top: max(8vw, 93px);
    text-align: center;
    margin-bottom: 93px;
}
.about-skill-list__container {
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

.skill__img {
    width: 35%;
    margin: 16.25% 32.5%;
}
.skill__text {
    text-align: center;
    font-size: 18px;
}
.about-skill-list__wrapper {
    text-align: center;
}
.about-skill-list__title {
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
    .about-skill-list__wrapper {
        /*  margin-top: 93px; */
    }
}

.about-skill-list__container {
    /*width: 800px;*/
    width: 840px;
}
.about-skill-list__title {
    font-size: 16px;
    margin-top: 31px !important;
}
.skill__text {
    font-size: 14px;
}


@media screen and (max-width: 576px) {
.about-skill-list{margin-bottom: 62px;}
}
</style>
