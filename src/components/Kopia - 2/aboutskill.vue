<template>
<div class="about-skill" id="about-skill">
  <subtitle>{{this.getcomponentdata('subtitle')}}</subtitle>
  <titlee modifier="title--left">{{this.getcomponentdata('tittle')}}</titlee>
<!--
  <div class="about-skill__container">
    <div v-for="skill in skillsold" v-bind:key="skill.name">

      <subtitle> {{skill.name}} </subtitle>

      <ul>
        <li v-for="item in skill.list" v-bind:key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </div>
-->



  <div class="about-skill__container">
    <div v-for="skill in getskills" v-bind:key="skill.skillname">

      <subtitle> {{skill.skillname}} </subtitle>

      <ul>
        <li v-for="item in skill.skillobject" v-bind:key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </div>



</div>
</template>

<script>
import subtitle from "@/components/subtitle";
import titlee from "@/components/title";

export default {
  name: 'skillcontainer',
  components: {

    subtitle,
    titlee,
  },
  data() {
    return {
      skillsold: [{
        name: 'Technologie',
        list: [{
          name: 'JavaScripit'
        }, {
          name: 'vue'
        }, {
          name: 'css'
        }, {
          name: 'Bootstrap'
        }, {
          name: 'Jquery'
        }, {
          name: 'Wordpress'
        }, {
          name: 'Prestashop'
        }, {
          name: 'MySQL'
        }],
      }, {
        name: 'Narzędzia',
        list: [{
          name: 'Figma'
        }, {
          name: 'Atom'
        }, {
          name: 'Visual studio'
        }, {
          name: 'Adobe XD'
        }, ],
      }, {
        name: 'usługi',
        list: [{
          name: 'JavaScripit'
        }, {
          name: 'vue'
        }, {
          name: 'css'
        }, {
          name: 'Bootstrap'
        }, {
          name: 'Jquery'
        }, {
          name: 'Wordpress'
        }, {
          name: 'Prestashop'
        }, {
          name: 'MySQL'
        }],
      }]

    }
  },
  computed: {
    getskills: function() {
      let skills = []
      console.log(this.componentsdata)
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].skillid !== undefined) {
          skills.push(this.getcomponentdata(this.componentsdata[i].skillid))
        }
      }
      return skills
    }
  },
  created() {
    this.setgetdata()
  },
  methods: {
    AnimationAboutSkillOpacity: function() {
      const css = {
        'opacity': '1'
      }
      this.$ScrollAnimations('#about-skill', '#animation-triger-three', 300, css)
    }
  },
  mounted() {
    this.AnimationAboutSkillOpacity()
  }
}
</script>
<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
    font-size: 15px;
    font-weight: 600;
}
li {
    margin-top: 16px;
}

.about-skill__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.about-skill {
    float: left;
    padding: 40px;
    width: calc(28% - 40px * 2);
    margin: 30vh 6% 6%;
    opacity: 0;
}
</style>
