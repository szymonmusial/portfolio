<template>
<div class="contact">
  <navigation></navigation>
  <div class="contact__detail">
    <div class="contact__detail__container">
      <subtitle class="white center--medium">{{this.$GetComponentData('subtitle')}}</subtitle>
      <titlee modifier="title--left" color="white">{{this.$GetComponentData('tittle')}}</titlee>
      <div class="contact__detail__information-block">
        <subtitle class="white">{{this.$GetComponentData('tittle--mail')}}</subtitle>
        <a :href="'mailto:'+this.$GetComponentData('mail--content')">
          <div class="contact__detail__info">
            {{this.$GetComponentData('mail--content')}}
          </div>
        </a>
      </div>
      <div class="contact__detail__information-block">
        <subtitle class="white">{{this.$GetComponentData('tittle--location')}}</subtitle>
        <div class="contact__detail__info">
          {{this.$GetComponentData('location--content')}}
        </div>
      </div>
      <div class="contact__detail__information-block">
        <subtitle class="white">{{this.$GetComponentData('tittle--socialmedia')}}</subtitle>
        <a :href="this.$GetComponentData('socialmedia--content').path">
          <div class="contact__detail__info">
            {{this.$GetComponentData('socialmedia--content').text}}
          </div>
        </a>
      </div>
      <div class="contact__detail__information-block">
        <subtitle class="white">{{this.$GetComponentData('tittle--phone')}}</subtitle>
        <a :href="this.$GetComponentData('phone--content')" target="_blank">
          <div class="contact__detail__info">
            {{this.$GetComponentData('phone--content')}}
          </div>
        </a>
      </div>
      <div class="contact__detail__information-block" v-if="this.screenwidth < 850">
        <subtitle class="white">Przydatne Linki</subtitle>
        <div class="contact__detail__info">
          <a :href="this.publicPath+'Szymon_Musia%C5%82_CV.pdf'" download>
            <div class="icon"><img src="../assets/cv.svg" alt=""></div>
          </a>
          <a :href="this.$GetComponentData('SocialMediaImgTwo').path" v-if="this.$GetComponentData('SocialMediaImgTwo').path !== undefined">
            <div class="icon"><img src="../assets/github.svg" alt=""></div>
          </a>
          <a :href="this.$GetComponentData('SocialMediaImgThree').path" v-if="this.$GetComponentData('SocialMediaImgThree').path !== undefined">
            <div class="icon"><img src="../assets/in.svg" alt=""></div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <contact-form></contact-form>
  <scroll modifier="scroll--center" class="none" v-if="screenwidth > 1300">{{this.$GetComponentData('scroll')}}</scroll>
  <sidebar class="none" color="white"></sidebar>
</div>
</template>

<script>
import navigation from "@/components/navigation";
import sidebar from "@/components/sidebar";

import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import scroll from "@/components/scroll";

import ContactForm from "@/components/ContactForm";


export default {
  name: 'Contact',
  components: {
    navigation,
    sidebar,
    subtitle,
    titlee,
    scroll,
    ContactForm
  },
  data() {
    return {
      form: [{
          labelname: "Name",
          inputname: "name",
          type: "text"
        },
        {
          labelname: "Email",
          inputname: "email",
          type: "email"
        },

      ]

    }
  },
  mounted() {
    this.$SetGetData()
  }
}
</script>
<style scoped>
.icon {
  width: 30px;
  filter: brightness(0) invert(1);
  margin: 15.5px;
  text-align: center;
  display: inline-block;
}

.title--emote {
  font-size: 38px;
}

.title--contact {
  margin-bottom: 31px;
}

.contact {
  height: 100%;
  position: fixed;
  width: 100%;
  height: 100%;

}

.contact__detail {
  width: 40%;
  height: 100vh;
  background-color: #191A1E;
  position: relative;
  float: left;
}

.contact__detail__container {
  position: absolute;
  top: 62.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  margin-left: 20px;
  min-width: 240px;
}

.contact__detail__info {
  font-size: 15px;
  font-weight: 600;
  margin-top: 15.5px;
  color: #fff;
}

.contact__detail__information-block {
  margin-top: 62px;
}

img {
  width: 100%;
  display: block;
}

svg {
  width: 100%;
  display: block;
}

.white {
  color: rgba(255, 255, 255, 0.8) !important;

}

@media screen and (max-width: 1400px) and (min-width: 1281px) {
  .contact__detail__container {
    top: 60%;
  }

  .contact__detail__information-block {
    margin-top: 31px;
  }
}

@media screen and (max-width: 1281px) and (min-width: 750px) {
  .contact__detail__container {
    top: 58%;
  }
}

@media screen and (max-width: 1300px) {
  .contact__detail {
    width: 50%;
  }
}

@media screen and (max-width: 850px) {
  .contact {
    position: relative;
  }

  .contact__detail {
    width: 100%;
  }

  .contact__detail__information-block {
    text-align: center;
  }

  .contact__detail__container {
    margin: 0;
  }

  .center--medium {
    text-align: center;
  }

  .contact__detail__container {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0px);
    height: fit-content;
    margin-left: 0;
    min-width: auto;
    margin: 0 auto !important !important;
    //padding: 93px 0px;
    padding: 155px 0;
  }

  .contact__detail {
    height: fit-content;
  }
}

@media screen and (max-width: 760px) {
  .contact__detail__container {
    padding: 93px 0 62px;
  }
}
</style>
