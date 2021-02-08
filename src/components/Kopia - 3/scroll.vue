<template>
<div :class="modifier">
  <subtitle class="position--center subtitle--heading"><slot></slot></subtitle>
  <div class="scroll__rectangle__big">
    <div class="scroll__rectangle__small"></div>
  </div>
</div>
</template>
<script>
import subtitle from "@/components/subtitle";
import {
  TweenMax
} from 'gsap'
export default {
  name: 'skill-container',
  props: {
    modifier: String
  },
  components: {
subtitle,
  },  data() {
      return {}
    },
  mounted() {

if(this.modifier == 'scroll--down')

  this.scrolldownanimation();
  },
  methods: {

scrolldownanimation: function(){
let element = this.$el.querySelector('.scroll__rectangle__small');
TweenMax.to(element,1,{delay:0,css:{transform: 'translate(0%, 600%) translate3d(0px, 0px, 0px)',height:'18px'},repeat : - 1,});

}


  },

}
</script>

<style scoped>


.scroll__rectangle__big {
  height: 100px;
  width: 2px;
  background-color: #C4C4C4;
  float: right;
  overflow:hidden;
}

.scroll__rectangle__small {
  height: 20px;
  width: 100%;
  background-color: #000;
}

.scroll--down {
  width: 300px;
  position: absolute;
  bottom: 31px;
  left: calc(25% - 300px);
}

.scroll--center {
  width: 300px;
  position: absolute;
  right: 31px;
}

.subtitle--heading {
  margin: 0 20px;
  right: 0;
}

.position--center, .scroll--center {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}




</style>
