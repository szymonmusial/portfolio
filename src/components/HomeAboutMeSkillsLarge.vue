<template>
<div class="skills-large" id="skills-large">
  <subtitle>{{this.$GetComponentData('subtitle')}}</subtitle>
  <titlee modifier="title--left">{{this.$GetComponentData('tittle')}}</titlee>
  <div class="skills-large__container">
    <div v-for="skill in GetSkills" v-bind:key="skill.skillname">
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
  name: 'HomeAboutMeSkills',
  components: {
    subtitle,
    titlee
  },
  computed: {
    GetSkills: function() {
      let skills = []
      console.log(this.componentsdata)
      for (var i = 0; i < this.componentsdata.length; i++) {
        if (this.componentsdata[i].skillid !== undefined) {
          skills.push(this.$GetComponentData(this.componentsdata[i].skillid))
        }
      }
      return skills
    }
  },
  created() {
    this.$SetGetData()
  },
  methods: {
    AnimationAboutSkillOpacity: function() {
      const css = {
        'opacity': '1'
      }
      this.$ScrollAnimations('#skills-large', '#animation-triger-three', 300, css)
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

.skills-large__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.skills-large {
    float: left;
    padding: 40px;
    width: calc(28% - 40px * 2);
    margin: 30vh 6% 6%;
    opacity: 0;
}
</style>
