<template>
  <div :class="[modifier, color]" class="buttons">
    <div class="button">
      <slot></slot>
    </div>
    <div class="arrow">
      <svg viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.3651 0.272358C24.0784 -0.0243799 23.6012 -0.0243799 23.3045 0.272358C23.0178 0.559072 23.0178 1.03626 23.3045 1.3223L28.6825 6.70035H1.49935C1.08565 6.70102 0.756836 7.02984 0.756836 7.44353C0.756836 7.85723 1.08565 8.19674 1.49935 8.19674H28.6825L23.3045 13.5648C23.0178 13.8615 23.0178 14.3394 23.3045 14.6254C23.6012 14.9221 24.0791 14.9221 24.3651 14.6254L31.0164 7.97419C31.3131 7.68747 31.3131 7.21029 31.0164 6.92424L24.3651 0.272358Z" fill="white" :class="color"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modifier: String,
    color: String,
  }
}
</script>

<style scoped>

.buttons {
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    background: #191A1E;
    color: #fff;
    display: inline-block;
    padding: 30px 50px 28px;
    border-radius: 30px;
    font-weight: 600;
    cursor:pointer;
    line-height: 0;
}


.buttons--white{background-color:#fff;color:#191A1E;}

.buttons > .arrow{display:none;}
.buttons--out-line > .arrow{display:block;}
.buttons--out-line{padding:0px;background:none;line-height: normal;}

.arrow,
.button {
    float: left;
    text-transform: upercases;
}
.arrow {
    width: 40px;
    margin-left: 16px;
}

.black{color:#000;fill:#000;}
.white{background-color:#fff;fill:#000;color:#000;}

@media screen and (max-width: 760px) {
.buttons{  font-size: 14px;  padding: 30px 50px 26px;}
.buttons--out-line{padding:0px;background:none;line-height: normal;}
.arrow{    margin-top: -1.5px;}
}

</style>
