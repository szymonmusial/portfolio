<template>
<div class="contact-form__wrapper">
  <div class="contact-form__container">
    <subtitle class="">{{this.$GetComponentData('subtitle')}}</subtitle>
    <titlee modifier="title--left title--contact" color=""><span v-html="TitleText"></span></titlee>
    <form class="contact-form" @submit.prevent="SendEmail">
      <div class="contact-form__box" v-for="(item, index) in this.$GetComponentData('contact').input" :key="item.inputname">
        <div class="contact-form__label__box" ref="label">
          <label for="name" class="contact-form__label"> {{item.labelname}} </label>
        </div>
        <div class="contact-form__input__box" v-on:click="Focus(index)" ref="input">
          <input v-if="item.type != 'textarea'" class="contact-form__input" :type="item.type" :name="item.inputname">
          <textarea v-if="item.type === 'textarea'" :name="item.inputname" rows="6" cols="100%" class="contact-form__input" v-on:click="Focus(index)"></textarea>
        </div>
      </div>
      <div v-on:click="EmitSend()">
        <buttons>{{this.$GetComponentData('button--send')}}</buttons>
      </div>
      <input class="send" type="submit" value="Send">
    </form>
  </div>
</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";
import buttons from "@/components/buttons";
import emailjs from 'emailjs-com';



import {
  TweenMax
} from 'gsap'

export default {
  name: 'ContactForm',
  components: {
    subtitle,
    titlee,
    buttons,

  },
  data() {
    return {
      mailstatus: "",
    }
  },
  computed: {
    TitleText: function() {
      let text = '';
      if (this.mailstatus === "correct") {
        text = this.$GetComponentData('tittle--correct-send')
      } else if (this.mailstatus === "fail") {
        text = this.$GetComponentData('tittle--fail-send')
      } else {
        text = this.$GetComponentData('tittle--norma-text')
      }
      return text
    }
  },
  mounted() {
    this.setgetdata()
  },
  methods: {
    Focus: function(i) {

      let label = this.$refs.label[i];
      console.log(label)
      TweenMax.to(this.$refs.label, 0.2, {
        delay: 0,
        css: {
          transform: "translateY(0)",
          color: "#A5A5AB"
        }
      });
      TweenMax.to(label, 0.2, {
        delay: 0,
        css: {
          transform: "translateY(-10px)",
          color: ""
        }
      });
    },
    EmitSend: function() {
      console.log("work")
      document.querySelector(".send").click()
    },
    SendEmail: function(e) {
      emailjs.sendForm(this.$GetComponentData('contact').serviceid, this.$GetComponentData('contact').templateid, e.target, this.$GetComponentData('contact').userid)
        .then((result) => {
          this.mailstatus = "correct";
          document.querySelector(".contact-form").reset();
          console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
          console.log('FAILED...', error);
          this.mailstatus = "fail";
          document.querySelector(".contact-form").reset();
        });
    }
  }
}
</script>
<style>
.img__container {
  width: 45px;
  display: block;
  display: inline-block;
}
</style>
<style scoped>
.send {
  display: none;
}

.title--emote {
  font-size: 38px;
}

.title--contact {
  margin-bottom: 31px;
}

.contact-form__wrapper {
  width: 60%;
  height: 100vh;
  position: relative;
  float: left;
}

.contact-form__container {
  position: absolute;
  top: 62.5%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 80vh;
  min-width: 300px;
}

.contact-form__box {
  padding: 31px 0;
}

.contact-form__input {
  border: 0;
  border-bottom: 1px solid #A5A5AB;
  width: 100%;
}

.contact-form__label {
  font-size: 19px;
  outline: -webkit-Focus-ring-color auto 0;
}

.contact-form__label__box {
  font-size: 19px;
  outline: -webkit-Focus-ring-color auto 0;
  color: #A5A5AB;
}

textarea {
  border: 0;
  border-bottom: 1px solid #A5A5AB;
  font-family: 'AcuminPro', sans-serif;
}

input:Focus,
textarea:Focus {
  outline: none;
}

@media screen and (max-width: 1400px) and (min-width: 1281px) {
  .contact-form__box {
    padding: 15.5px 0;
  }

  .contact-form__container {
    top: 60%;
  }

  .title--contact {
    margin-bottom: 15.5px;
  }
}

@media screen and (max-width: 1281px) and (min-width: 750px) {
  .contact-form__container {
    top: 58%;
  }
}

@media screen and (max-width: 1300px) {
  .contact-form__wrapper {
    width: 50%;
  }
}

@media screen and (max-width: 1280px) {
  .contact-form__container {
    left: 50%;
  }
}

@media screen and (max-width: 850px) {
  .contact-form__wrapper {
    width: 100%;
    position: relative;
    top: 0;
    transform: none;
    height: auto;
  }

  .contact-form__container {
    width: calc(100% - 62px);
    left: 31px;
    position: relative;
    transform: none;
    padding: 62px 0;
    text-align: center;
  }

  .contact-form__box {
    text-align: left;
  }

  .contact-form__container {
    margin-left: 0;
    height: fit-content;
  }
}
</style>
