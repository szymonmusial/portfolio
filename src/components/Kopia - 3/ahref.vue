<template>
<div class="anchor" v-if="this.path !== undefined">
  <div class="anchor__link" v-if="islink()" :class="this.regclass(this.path)">
    <router-link :to="this.path" v-bind:class="{'nav--active':  chechpath }">
      <slot></slot>
    </router-link>
  </div>
  <div class="anchor__todiv" v-else v-on:click="scrolltodiv">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    path: String
  },
  methods: {
    regclass: function(word) {
      word = word.replace('/', '')
      word = word.replace('#', '')
      word = word.replace('.', '')
      return word
    },
    reg: function(word) {
      const hashindex = word.indexOf("#")
      word = word.slice(0, hashindex)
      return word
    },
    islink: function() {
      let isitlink = false;
      const hashpostion = this.path.indexOf("#");
      const curentlocation = location.pathname
      const linkpath = this.reg(this.path)
      if (curentlocation === linkpath) {
        console.log("work")
      }
      if (hashpostion < 0) {
        isitlink = true;
      }
      if (curentlocation !== linkpath) {
        isitlink = true;
      }
      return isitlink
    },
    scrolltodiv: function() {
      console.log(this.path.replace('/', ''))
      let element = document.querySelector(this.path.replace('/', ''))
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  },
  computed: {
    chechpath: function() {
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
  .nav--active {
    color: #fff;
  }

  a:active {
    color: inherit;
  }

  a:focus {
    color: #fff;
  }
}
</style>
