<template>
<div class="sidebar">
  <a :href="this.getcomponentdata('brand__name').path" v-if="this.getcomponentdata('brand__name').path !== undefined">
    <div class="sidebar__brand-name" :class="color"> {{this.getcomponentdata('brand__name').text}} </div>
  </a>
  <div class="icon position--down" :class="color">
    <a :href="this.getcomponentdata('icon--send').path" v-if="this.getcomponentdata('icon--send').path !== undefined">
      <img :src="getimgurl(this.getcomponentdata('icon--send').img.url)" alt="">
    </a>
  </div>
  <div class="sidebar__social" :class="color" v-if="this.getcomponentdata('icon--up').path !== undefined">
    <div class="icon">
      <a :href="this.getcomponentdata('icon--up').path" v-if="this.getcomponentdata('icon--up').path !== undefined">
        <img :src="getimgurl(this.getcomponentdata('icon--up').img.url)" alt="">
      </a>
    </div>

    <div class="icon">
      <a :href="this.getcomponentdata('icon--center').path" v-if="this.getcomponentdata('icon--center').path !== undefined">
        <img :src="getimgurl(this.getcomponentdata('icon--center').img.url)" alt="">
      </a>
    </div>

    <div class="icon">
      <a :href="this.getcomponentdata('icon--down').path" v-if="this.getcomponentdata('icon--down').path !== undefined">
        <img :src="getimgurl(this.getcomponentdata('icon--down').img.url)" alt="">
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    color: String,
  },
  mounted() {
    this.setgetdata()
  }
}
</script>
<style scoped>
.white img {
  filter: brightness(0) invert(1);
}

.white {
  fill: #fff;
  color: #fff !important;
}

.sidebar {
  position: sticky;
  left: 31px;
  top: 31px;
  bottom: 31px;
  height: calc(100vh - 31px * 2);
  width: 10vh;
}

.sidebar__brand-name {
  font-size: 23px;
  font-weight: bold;
  -webkit-text-stroke: 0.2px black;
  color: #191a1e;
  position: absolute;
}


.icon>img:hover {
  transform: scale(1.1);
}

.sidebar__social>* {
  margin: 15px 0;
}

.icon {
  width: 25px;
  height: auto;
}



.position--down {
  position: absolute;
  bottom: 0;
}

.sidebar__social {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
@media screen and (max-width: 850px) {
.contact .sidebar{padding-top:31px;}
.contact .icon {
  display: none!important;
}
}
@media screen and (max-width: 760px) {
.contact .sidebar__brand-name{display:none;}
}
@media screen and (max-width: 500px) {
.contact .sidebar{display:none!important;}
}
@media screen and (max-width: 1230px) {
  .sidebar {
    display: none;
  }

  .contact .sidebar {
    display: block;
  }
}
</style>
