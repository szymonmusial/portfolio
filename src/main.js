import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios
export const bus = new Vue()


import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)

import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)

import {
  TweenMax,
  TimelineMax
} from "vue-scrollmagic/node_modules/gsap"



Vue.mixin({
  data() {
    return {
      screenwidth: 0,
      publicPath: process.env.BASE_URL,
      settings: {
        url: "{apiurl}",
        imgurl: "",
        componetname: "",
        path: "",
      },
      componentsdata: {}
    }
  },
  methods: {
    $ScrollAnimations: function(target, triger, duration, style) {

      const timeline = new TimelineMax()
      timeline.add([TweenMax.to(
        target, 1, {
          css: style
        }
      )])

      const animation = this.$scrollmagic.scene({
        triggerElement: triger,
        duration: duration,
      })

      animation.setTween(timeline)
      this.$scrollmagic.addScene([animation])

    },
    onResize: function() {
      this.screenwidth = window.innerWidth
    },
    $GetImgUrl: function(url) {
      const returnurl = this.settings.imgurl + url
      return returnurl
    },
    $SetGetData: function() {
      let path = window.location.pathname
      const indexpath = path.indexOf(":")
      if (indexpath > '0') {
        path = path.slice(0, indexpath)
      }
      this.settings.path = path
      this.settings.componetname = this.$options.name
      this.getalldata()
    },
    $GetComponentData: function(name) {
      let content = ""
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].textname === name) {
          content = this.componentsdata[i].text
        }
        if (this.componentsdata[i].buttonname === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].workobjectname === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].reviewsname === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].imgname === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].skillid === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].navigationname === name) {
          content = this.componentsdata[i]
        }
        if (this.componentsdata[i].mailformname === name) {
          content = this.componentsdata[i]
        }
      }
      return content
    },
    getalldata: function() {
      this.$axios({
        url: this.settings.url,
        method: 'Post',
        data: {
          query: `
          query {
            sections(where: { name: "` + this.settings.componetname + `", pages: {path:"` + this.settings.path + `"} }) {
          components {

          __typename

            }
          }
          }
      `
        }
      }).then((result) => {
        const typename = result.data.data.sections[0].components
        this.getdata(typename)
      })
    },
    getdata: function(typename) {
      const inputquary = this.buildquary(typename)
      this.$axios({
        url: this.settings.url,
        method: 'Post',
        data: {
          query: inputquary
        }
      }).then((result) => {
        this.componentsdata = result.data.data.sections[0].components
      })
    },
    buildquary: function(typename) {
      let subquery = ""
      for (var i = 0; i < typename.length; i++) {
        if (typename[i].__typename === 'ComponentComponentsText') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { textname text }'
        }
        if (typename[i].__typename === 'ComponentComponentsImg') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { imgname img {url} }'
        }
        if (typename[i].__typename === 'ComponentComponentsButton') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { buttonname text path img { url } }'
        }
        if (typename[i].__typename === 'ComponentComponentsWorkobject') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { workobjectname Work { tittle subtitle button workpath img { url }}}'
        }
        if (typename[i].__typename === 'ComponentComponentsReviewo') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { reviewsname review { name text stars author role logo { url } testimonial { url }}}'
        }
        if (typename[i].__typename === 'ComponentComponentsSkilllist') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { skillid skillname skillobject { name img { url } }}'
        }
        if (typename[i].__typename === 'ComponentComponentsNavigation') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { navigationname button{ path text }}'
        }
        if (typename[i].__typename === 'ComponentComponentsMailform') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { mailformname userid serviceid templateid input{ inputname type labelname }}'
        }
      }
      const query = 'query { sections(where: { name: "' + this.settings.componetname + '", pages: {path:"' + this.settings.path + '"} }) {components { ' + subquery + ' } } }'
      return query
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize()
  },
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
