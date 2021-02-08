<template>
  <div class="about-skill__container">
    <div v-for="skill in skills" v-bind:key="skill.name">

      <subtitle>  {{skill.name}} </subtitle>

      <ul>
        <li v-for="item in skill.list" v-bind:key="item.name">{{item.name}}</li>
      </ul>
    </div>
  </div>

</template>

<script>

import subtitle from "@/components/subtitle";

export default {
  name: 'about-skill',
  components: {  subtitle,},
  data() {
    return {

      skills: [{
        name: 'Technologie',
        list: [{name: 'JavaScripit'},{name: 'vue'},{name: 'css'},{name: 'Bootstrap'},{name: 'Jquery'},{name: 'Wordpress'},{name: 'Prestashop'},{name: 'MySQL'}],
      }, {
        name: 'Narzędzia',
        list: [{name: 'Figma'},{name: 'Atom'},{name: 'Visual studio'},{name: 'Adobe XD'},],
      }, {
        name: 'usługi',
      list: [{name: 'JavaScripit'},{name: 'vue'},{name: 'css'},{name: 'Bootstrap'},{name: 'Jquery'},{name: 'Wordpress'},{name: 'Prestashop'},{name: 'MySQL'}],
      }]

    }
  },
  computed: {},
  created() {},
  methods: {}
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


</style>
