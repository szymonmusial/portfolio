<template>
<div class="anchor" v-if="this.path !== undefined">
  <div class="anchor__link" v-if="IsLink()" :class="this.RegClass(this.path)">
    <router-link :to="this.path" v-bind:class="{'nav--active':  CheckhPath }">
      <slot></slot>
    </router-link>
  </div>
  <button class="anchor__todiv" v-else v-on:click="ScrollToDiv(); CloseNav();">
    <slot></slot>
  </button>
</div>
</template>

<script>
import {
  bus
} from '../main';


export default {
  props: {
    path: String
  },
  methods: {
    CloseNav: function() {
      bus.$emit('CloseNav');
    },
    RegClass: function(word) {
      word = word.replace('/', '')
      word = word.replace('#', '')
      word = word.replace('.', '')
      return word
    },
    Reg: function(word) {
      const hashindex = word.indexOf("#")
      word = word.slice(0, hashindex)
      return word
    },
    IsLink: function() {
      let isitlink = false;
      const hashpostion = this.path.indexOf("#");
      const curentlocation = location.pathname
      const linkpath = this.Reg(this.path)
      if (hashpostion < 0) {
        isitlink = true;
      }
      if (curentlocation !== linkpath) {
        isitlink = true;
      }
      return isitlink
    },
    ScrollToDiv: function() {
      console.log(this.path.replace('/', ''))
      let element = document.querySelector(this.path.replace('/', ''))
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  },
  computed: {
    CheckhPath: function() {
      let boolean = false
      if (document.location.pathname === this.path) {
        boolean = true
      }
      return boolean
    }
  }
}
</script>
<style>
.anchor__todiv {
  all: unset
}

.work .home-my-work__slider {
  color: #000;
}

a {
  text-decoration: none;
  color: inherit;
}


.nav--active {
  color: #000;
}

.nav__mobile__brand-name .nav--active {
  color: black;
}

@media screen and (max-width: 850px) {
  .contact .nav--active {
    color: #fff;
  }
}

@media screen and (max-width: 750px) {
  .work .home-my-work__slider {
    color: #fff;
  }
  .nav--active {
    color: #fff;
  }

  a:active {
    color: inherit;
  }

  .anchor__todiv:active {
    color: inherit;
  }

  .anchor__todiv:focus {
    color: #fff;
  }

  a:focus {
    color: #fff;
  }
}
</style>
