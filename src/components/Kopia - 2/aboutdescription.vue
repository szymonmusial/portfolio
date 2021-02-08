<template>
<div class="about-description" id="about-description">
  <div class="down-arrow" id="down-arrow">
    <img src="../assets/arow-down.svg" alt="">
  </div>
  <div class="animation-block" id="animation-block"></div>

  <div class="about-description__img" v-if="this.getcomponentdata('img').img !== undefined">
    <img :src="this.getimgurl(this.getcomponentdata('img').img.url)">
  </div>
  <div class="about-description__container" id="about-description__container">
    <div class="about-description__heading-block">
      <div class="about-description__heading-block__item">
        <div class="about-description__number">
          {{this.getcomponentdata('number--first')}}
        </div>
        <div class="about-description__tittle">
          {{this.getcomponentdata('tittle--first')}}
        </div>
      </div>

      <div class="about-description__heading-block__item">
        <div class="about-description__number">
          {{this.getcomponentdata('number--second')}}
        </div>
        <div class="about-description__tittle">
          {{this.getcomponentdata('tittle--second')}}
        </div>
      </div>

    </div>

    <div class="about-description__content">
      {{this.getcomponentdata('content')}}
    </div>
    <router-link :to="this.getcomponentdata('button').path" v-if="this.getcomponentdata('button').path !== undefined">
      <buttons modifier="buttons--out-line">{{this.getcomponentdata('button').text}}</buttons>
    </router-link>
  </div>


</div>
</template>

<script>
import buttons from "@/components/buttons";

export default {
  name: 'aboutdescription',
  components: {
    buttons,
  },
  methods: {
    AnimationAboutPosition: function() {
      let css = {}
      if (this.screenwidth < 576) {
        return false;
      }
      if (this.screenwidth > 1900) {
        css = {
          'width': '1040px',
          'margin': '30vh 87px 0px 0px',
          'right': '25.1%'
        }
      }
      if (this.screenwidth < 1900) {
        css = {
          'width': '1040px',
          'margin': '30vh 0px 0px',
          'right': '50%'
        }
      }
      if (this.screenwidth < 1060) {
        css = {
          'width': '1040px',
          'margin': '30vh 0px 0px',
          'right': '50%',
          'max-width': '100%'
        }
      }
      let duration = 900
      if (this.screenwidth < 1500) {
        duration = duration - 180
      }
      this.$ScrollAnimations('#about-description', '#animation-triger-one', duration, css)
    },
    AnimationAboutWidth: function() {
      if (this.screenwidth < 576) {
        return false;
      }
      const css = {
        'width': '0%'
      }
      let duration = 800
      if (this.screenwidth < 1500) {
        duration = duration - 120
      }
      this.$ScrollAnimations('#animation-block', '#animation-triger-one', duration, css)
    },
    AnimationAboutOpacityBlock: function() {
      let duration = 300
      const css = {
        'opacity': '1'
      }
      if (this.screenwidth < 576) {
        duration = duration - 300
      }
      this.$ScrollAnimations('#about-description__container', '#animation-triger-three', duration, css)
    },
    AnimationAboutOpacityArrow: function() {
      const css = {
        'opacity': '0'
      }
      this.$ScrollAnimations('#down-arrow', '#animation-triger-one', 300, css)
      this.$ScrollAnimations('.scroll--down', '#animation-triger-one', 300, css)
    },
    AnimationAboutinit: function() {
      this.AnimationAboutPosition()
      this.AnimationAboutWidth()
      this.AnimationAboutOpacityBlock()
      this.AnimationAboutOpacityArrow()
    },
  },
  mounted() {
    this.$emit('divupdate')
    this.AnimationAboutinit()
    this.setgetdata()
  }
}
</script>
<style lang="scss" scoped>
.down-arrow {
    background-color: black;
    height: 20px;
    padding: 17.5px;
    width: 20px;
    left: -20px;
    top: -20px;
    position: absolute;
    z-index: 10000;
    opacity: 1;
}

.none {
    display: none;
}

.animation-block {
    background-color: #105afb;
    width: 50%;
    //height: 500px;
    height: 100%;
    position: absolute;
    right: 50%;
    margin-right: -1px;
    padding-left: 1px;
}

.abouttext--margin {
    margin-left: -40px;
}
.about-skill {
    float: left;
    padding: 40px;
    width: calc(28% - 40px * 2);
    margin: 30vh 6% 6%;
    opacity: 0;
}

.about-arrow,
.about-button {
    float: left;
    text-transform: upercases;
}
.about-arrow {
    width: 40px;
    margin-left: 16px;
}

.about-description__content {
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    /* or 200% */

    letter-spacing: 0.1em;
    margin-top: 31px;
    margin-bottom: 31px;
    color: #FAFAFA;
}
.about-description__heading-block__item {}
.about-description__tittle {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
.about-description__number {
    font-size: 45px;
    font-weight: bold;
    flex: 1 100%;
}
.about-description__img {
    width: 50%;
    float: left;
}
.about-description__container {
    width: calc(50% - 40px * 2);
    height: 100px;
    float: left;
    padding: 40px;
    color: #fff;
    opacity: 0;
}

.about-description__heading-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.wrapper {
    width: calc(100% - 31px * 4 - 50px);
    margin: 0 auto;
    height: 100vh;
    position: relative;
}

.about-description {
    background-color: #105AFB;
    position: absolute;
}

#about-description {
    margin-right: 35%;
    transform: translateX(50%);
    width: 70%;
    right: -87px;
}

@media screen and (max-width: 1060px) {
    #about-description {
        right: -31px;
    }
    .about-description__img {
        display: none;
    }
    .about-description__container {
        width: calc(100% - 40px * 2);
        height: auto;
    }
    .about-description {
        max-width: 100%;
    }
}
@media screen and (max-width: 860px) {
    #about-description {
        right: 0;
    }
}

/*
@media screen and (max-width: 760px) {

    .about-description {
        position: relative;
    }

    .down-arrow {
        display: none;
    }

    #about-description {
        width: 100%;
        margin: 0;
    }
    .about-description__img {
        width: 100%;
    }
    .about-description__container {
        width: calc(100% - 31px * 2);
        padding: 31px;
        height: auto;

    }

    .animation-block {
        width: 100%;
        right: 0;
    }
    .about-description__tittle {
        font-size: 11px;
    }
}
*/

@media screen and (max-width: 576px) {
    .down-arrow{display:none;}
    #about-description {
        margin-right: 0;
        width: 100%;
        right: auto;
        left: 0;
        transform: none;
    }
    .down-arrow {
        transform: translate(-50%, -50%);
        left: 50%;
        right: unset;
        top: unset;
    }
    .animation-block {
        display: none;
    }
    .about-description__container {
        width: calc(100% - 32px * 2);
        height: auto;
        padding: 32px 32px;
    }
}

</style>
