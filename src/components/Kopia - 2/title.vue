<template>
<div :class="modifier">
  <h1 :class="color">
    <slot></slot>
  </h1>
  <h1 :class="color" v-html="rawhtml"></h1>
</div>
</template>

<script>
export default {
  props: {
    modifier: String,
    color: String,
    rawhtml: String,
  }
}
</script>

<style scoped>
h1 {
  font-size: 54px;
  line-height: 74px;
  color: #141418;
  margin: 0;
}

.title--left {
  margin-left: -40px;
}

.title--normal {
  margin: 1.8em;
}

.title {}

.white {
  color: #fff;
}

.black {
  color: #1C1C20;
}

@media screen and (max-width: 1500px) {
  h1 {
    font-size: 48px;
  }
}

/* was 760px */
@media screen and (max-width: 850px) {
  .title--left {
    margin-left: 0px;
    text-align:center;
  }
}

@media screen and (max-width: 760px) {
  h1 {
    font-size: 28px;
    line-height: 1.5;
    color: #141418;
    margin: 8px;
  }

  .title--normal {
    margin: 0.8em 1em;
  }

  .title--left {
    margin-left: 0px;
  }

}
</style>
