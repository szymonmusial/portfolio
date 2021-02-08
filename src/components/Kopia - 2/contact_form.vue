<template>
<div class="contac__form">

  <div class="contact__form__container">
    <subtitle class="">{{this.getcomponentdata('subtitle')}}</subtitle>
    <titlee modifier="title--left title--contact" color=""><span v-html="titletext"></span></titlee>
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="contact__form__box" v-for="(item, index) in this.getcomponentdata('contact').input" :key="item.inputname">
        <div class="contact__form__label__box" ref="label">
          <label for="name" class="contact__form__label"> {{item.labelname}} </label>
        </div>
        <div class="contact__form__input__box" v-on:click="focus(index)" ref="input">
          <input v-if="item.type != 'textarea'" class="contact__form__input" :type="item.type" :name="item.inputname">
          <textarea v-if="item.type === 'textarea'" :name="item.inputname" rows="6" cols="100%" class="contact__form__input" v-on:click="focus(index)"></textarea>
        </div>

      </div>
      <div v-on:click="emitsend()">
        <buttons>{{this.getcomponentdata('button--send')}}</buttons>
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
  name: 'contactform',
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
    titletext: function() {
      let text = '';
      if (this.mailstatus === "correct") {
        text = this.getcomponentdata('tittle--correct-send')
      } else if (this.mailstatus === "fail") {
        text = this.getcomponentdata('tittle--fail-send')
      } else {
        text = this.getcomponentdata('tittle--norma-text')
      }
      return text
    }
  },
  created() {},
  mounted() {
  this.setgetdata()

  },
  methods: {
    focus: function(i) {

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
    emitsend: function() {
      console.log("work")
      document.querySelector(".send").click()
    },
    sendEmail: function(e) {
      emailjs.sendForm(this.getcomponentdata('contact').serviceid, this.getcomponentdata('contact').templateid, e.target,  this.getcomponentdata('contact').userid)
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
.img__container{width:45px;display:block;display: inline-block;}
</style>
<style lang="scss" scoped>


.send {
    display: none;
}

.title--emote {
    font-size: 38px;
}
.title--contact {
    margin-bottom: 31px;
}

.contac__form {
    width: 60%;
    height: 100vh;
    position: relative;
    float: left;
}

.contact__form__container {
    position: absolute;
    top: 62.5%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 80vh;
    min-width: 300px;
}

.contact__form__box {
    padding: 31px 0;
}

.contact__form__input {
    border: 0;
    border-bottom: 1px solid #A5A5AB;
    width: 100%;
}

.contact__form__label {
    font-size: 19px;
    outline: -webkit-focus-ring-color auto 0;
}

.contact__form__label__box {
    font-size: 19px;
    outline: -webkit-focus-ring-color auto 0;
    color: #A5A5AB;
}

textarea {
    border: 0;
    border-bottom: 1px solid #A5A5AB;
    font-family: 'AcuminPro', sans-serif;
}
input:focus,
textarea:focus {
    outline: none;
}
@media screen and (max-width: 1400px) and (min-width: 1281px)  {
.contact__form__box{ padding: 15.5px 0; }
.contact__form__container{top: 60%;}
.title--contact{margin-bottom: 15.5px;}
}
@media screen and (max-width: 1281px) and (min-width: 750px)  {
.contact__form__container{top: 58%;}
}
@media screen and (max-width: 1300px) {
    .contac__form {
        width: 50%;
    }
}
@media screen and (max-width: 1280px) {
    .contact__form__container {
        left: 50%;
        /*margin-left:20px;*/
    }
}

@media screen and (max-width: 850px) {
    .contac__form {
        width: 100%;
        position: relative;
        top: 0;
        transform: none;
        height: auto;
    }

    .contact__form__container {
        width: calc(100% - 62px);
        left: 31px;
        position: relative;
        transform: none;
        padding: 62px 0px;
        text-align: center;
    }
    .contact__form__box {
        text-align: left;
    }
    .contact__form__container {
        margin-left: 0;
        height: fit-content;
    }
}
</style>
