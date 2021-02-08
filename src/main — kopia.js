import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios


import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)

import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)
import {
  TweenMax,
  TimelineMax
} from 'gsap'
Vue.mixin({
  data() {
    return {
      screenwidth: 0,
      settings: {
        url: "http://localhost:1337/graphql",
        componetname: "",
        path: "",
      },
      componentsdata: {}
    }
  },
  methods: {
    ScrollAnimations: function(target, triger, duration, style) {

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
    setgetdata: function() {
      this.settings.path = window.location.pathname
      this.settings.componetname = this.$options.name
      this.getalldata()
    },
    getcomponentdata: function(name, type) {
      let content = ""
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].textname === name) {
          if (type === "text") {
            content = this.componentsdata[i].text
          }
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
        console.log(result.data.data.sections[0].components)
        this.componentsdata = result.data.data.sections[0].components
      })
    },
    buildquary: function(typename) {
      let subquery = ""
      for (var i = 0; i < typename.length; i++) {
        if (typename[i].__typename === 'ComponentComponentsText') {
          subquery = subquery + ' ... on ' + typename[i].__typename + ' { textname text }'
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
