<template>
<div class="nav__mobile">


  <div class="nav__mobile__brand-name mobile">
    <router-link to="/" class="brand--mobile">Musiał </router-link>
    <div class="nav-icon" v-on:click="clickmenu" :class="{ test: menu  }">
      <div></div>
    </div>
  </div>


  <nav class="nav" id="nav">



    <ul class="nav__ul" v-if="this.getcomponentdata('navigation') !== undefined">
      <li v-for="item in this.getcomponentdata('navigation').button" :key="item.text">
        <ahref :path="item.path">{{item.text}}</ahref>
      </li>
    </ul>

    <!--
  <ul class="nav__lang__ul">
    <li class="nav--active">
      PL
    </li>
    <li>
      EN
    </li>
  </ul>
  -->

    <div class="nav__mobile__block mobile">

      <ul class="">

        <li class="nav__mobil__title">
          {{this.getcomponentdata('title')}}
        </li>

        <li class="nav__mobil__info">
          {{this.getcomponentdata('info--first')}}
        </li>
        <li class="nav__mobil__info">
          {{this.getcomponentdata('info--second')}}
        </li>
        <li class="">
          <ahref :path="this.getcomponentdata('button').path">
            <buttons modifier="buttons--white">{{this.getcomponentdata('button').text}}</buttons>
          </ahref>
        </li>
      </ul>
    </div>

  </nav>
</div>
</template>
<script>
import buttons from "@/components/buttons";
import ahref from "@/components/ahref";
import {
  TweenMax
} from 'gsap'

export default {
  name: 'navigation',
  components: {
    buttons,
    ahref
  },
  data: function() {
    return {
      menu: false,
    }
  },
  methods: {

    clickmenu: function() {
      if (this.menu == false) {



        TweenMax.to('#nav', 0.8, {
          delay: 0,
          css: {
            top: "0px",
            opacity: '1'
          }
        });
        TweenMax.to('.brand--mobile', 0.8, {
          delay: 0,
          css: {
            color: '#fff'
          }
        });

        this.menu = true;
      } else {
        TweenMax.to('#nav', 0.8, {
          delay: 0,
          css: {
            top: "-120%",
            opacity: '0'
          }
        });
        TweenMax.to('.brand--mobile', 0.8, {
          delay: 0,
          css: {
            color: '#191A1E'
          }
        });
        this.menu = false;
      }
    }

  },
  mounted() {
    this.setgetdata()
  },
  watch: {
    /*
    menu: function(val) {
      if (val !== false) {
        setTimeout( () =>   document.querySelector("#app").style.position = "fixed", 800 )
      } else {
        document.querySelector("#app").style.position = "unset"
      }
    },
    */
  }
}
</script>

<style lang="scss" scoped>
.mobile {
    display: none;
}
.nav {
    position: absolute;
    //right: 31px;
    right: 0;
    top: 0;
    padding: 31px;
    //top: 31px;
    font-size: 19px;
    z-index: 10;
    background-color: #fff;
}
ul {
    margin: 0;
    padding: 0;
    display: inline-block;
}
.nav__ul > li {
    margin: 0 20px;
}

.nav__lang__ul > li {
    margin: 0 5px;
}

.nav__lang__ul > li:last-child {
    margin-right: 0;
}

.nav__lang__ul > li:first-child {
    margin-left: 40px;
}

a,
li {
    display: inline-block;
    text-decoration: none;
    color: #A5A5AB;
    font-weight: normal;
    cursor: pointer;
}

.nav__mobile__brand-name a{color:#191A1E;}


a:hover {
    color: #141418;
}
li:hover {
    color: #141418;
}
.nav--active {
    color: #141418;
    font-weight: 600;
}

@media screen and (max-height: 700px) {
    .nav__mobil__info {
        display: none;
    }
    //.nav__mobil__title{display:none;}
}
@media screen and (max-width: 850px) {
    .nav {
        background-color: transparent;
    }
}
@media screen and (max-width: 760px) {
    .mobile {
        display: block;
    }

    .nav__ul {
        position: absolute;
        top: 38%;
        transform: translate(0%, -50%);
    }
    .nav {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #191A1E;
        right: 0;
        opacity: 1;
        top: -120%;
    }
    ul {
        text-align: center;
        width: 100%;
        margin: 0!important !important;
    }
    li {
        width: 100%;

        font-size: 1.5em;
        margin: 10px 0 !important;
    }
    a {}
    .nav__lang__ul {
        display: none;
    }

    //nav icon poczatek

    .nav__mobile__brand-name {
        font-size: 23px;
        font-weight: bold;
        color: #191A1E;
        position: sticky;
        -webkit-text-stroke: 0 white;
        position: fixed;

        top: 30px;

        margin-left: 30px;
        margin-right: 30px;
        z-index: 100;

        width: calc(100% - 60px);
    }

    .nav-icon {

        width: 28px;
        position: sticky;
        float: right;
        margin-top: -3px;
    }

    .contact .nav__mobile__brand-name a {
        color: #fff!important;
    }
    .contact .nav-icon div,
    .contact .nav-icon:after,
    .contact .nav-icon:before {
        background-color: #fff;
        content: '';
        display: block;
        height: 2px;
        margin: 7px 0;
        transition: all 0.2s ease-in-out;
    }

    .nav-icon div,
    .nav-icon:after,
    .nav-icon:before {
        background-color: #191A1E;
        content: '';
        display: block;
        height: 2px;
        margin: 7px 0;
        transition: all 0.2s ease-in-out;
    }

    .test:before {
        transform: translateY(9px) rotate(135deg);
    }

    .test:after {
        transform: translateY(-9px) rotate(-135deg);
    }

    .test div {
        transform: scale(0);
    }

    //nav icon koniec
    .nav__mobile__block {
        position: absolute;
        padding-top: 10px;
        //    height:30vh;
        background-color: #242529;
        bottom: 62px;
        width: 100%;
    }

    .test div,
    .test::before,
    .test:after {
        background-color: #fff;
        content: '';
        display: block;
        height: 2px;
        margin: 7px 0;
        transition: all 0.2s ease-in-out;
    }
    .test:after {
        background-color: #fff;
    }

    .nav__mobil__title {
        color: #fff;
        font-size: 1.2em;
        margin: 5px 0;
    }
    .nav__mobil__info {
        font-size: 16px;
        margin: 5px 0;
    }
    .nav__mobile {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 10000;
    }

}
</style>
