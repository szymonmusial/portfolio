<template>
<div v-if="workdata.workresult !== undefined" class="work">
  <testimonial ref="testimonial"></testimonial>
  <navigation class="navigation--works"></navigation>
  <sidebar></sidebar>
  <works-header :data="workdata.workheader"></works-header>
  <div class="triger--opacity"></div>
  <works-description :data="workdata.workdescription"></works-description>
  <works-result :data="workdata.workresult"></works-result>
  <works-page :img="item.img.url" :title="item.title" :subtitle="item.subtitle" v-for="(item, index) in workdata.workpage" :key="index" @OpenTestimonial="OpenTestimonial"></works-page>
  <foooter></foooter>
</div>
</template>

<script>
import WorksHeader from "@/section/WorksHeader";
import WorksDescription from "@/section/WorksDescription";
import WorksResult from "@/section/WorksResult";
import WorksPage from "@/section/WorksPage";
import foooter from "@/components/footer";
import navigation from "@/components/navigation";
import sidebar from "@/components/sidebar";

import testimonial from "@/components/testimonial";

export default {
  name: 'Works',
  components: {
    WorksHeader,
    navigation,
    sidebar,
    WorksDescription,
    WorksResult,
    WorksPage,
    foooter,
    testimonial

  },
  data() {
    return {
      workdata: {},
    }
  },
  watch: {
    workdata: function() {
      if (this.workdata.workresult !== undefined) {
         setTimeout(() => this.AnimationWorkInit(), 300);
      }
    }
  },
  computed: {
    GetWorkName: function() {
      let name = this.$route.params.id
      name = name.replace(':', '')
      return name
    }
  },
  mounted() {
    //  setTimeout(() => this.AnimationWorkInit(), 300);
    this.GetWorks()
  },
  methods: {
    OpenTestimonial: function(testimonial) {
      this.$refs.testimonial.opentestimonial(testimonial);
    },
    GetWorks: function() {
      this.$axios({
        url: this.settings.url,
        method: 'Post',
        data: {
          query: `
          query {
  works(where: { name: "` + this.GetWorkName +
            `" }) {
    workheader {
      subtitle
      title
      scroll
      img {
        url
      }
    }
    workdescription {
      name
      title
      subtitle
      detail {
        name
        content
      }
      img {
        url
      }
    }
    workresult {
      name
      title
      subtitle
      detail {
        name
        content
      }
      img {
        url
      }
    }
    workpage {
      title
      subtitle
      img {
        url
      }
    }
  }
}`
        }
      }).then((result) => {
        this.workdata = result.data.data.works[0]
      })
    },
    AnimationWorkInit() {
      if (this.screenwidth > 992) {
        this.AnimationWorkOpacity()
        this.AnimationWorkWidth()
        this.AnimationWorkMargin()
        this.AnimationWorkNoOpacity()
      }
    },
    AnimationWorkMargin: function() {
      const css = {
        'marginTop': '100px'
      }
      this.$ScrollAnimations('.works-description--animation', '.works-header__img', 900, css)
    },
    AnimationWorkWidth: function() {
      let css = {
        'width': '40%'
      }
      if (this.screenwidth < 1400) {
        css = {
          'width': '50%'
        }
      }
      this.$ScrollAnimations('.works-detail--animation', '.works-header__img', 850, css)
    },
    AnimationWorkOpacity: function() {
      const css = {
        'opacity': '1'
      }
      this.$ScrollAnimations('.opacity--animation', '.triger--opacity', 100, css)
    },
    AnimationWorkNoOpacity: function() {
      const css = {
        'opacity': '0'
      }
      this.$ScrollAnimations('.works-header__img', '.works-detail--animation', 300, css)
    }
  }
}
</script>

<style scoped>
.navigation--works {
  padding-top: 31px;
}

.triger--opacity {
  position: absolute;
  top: 140vh;
}
</style>
