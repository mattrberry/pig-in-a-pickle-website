<template>
  <div class="catering">
  <h3 class="first-line"><span class="red center">We can customize any event to your specific needs, so let’s start with the basics...</span></h3>
  <h3><span class="center">Catering office hours Monday- Friday 9am to 4pm</span></h3>
  <h3><span class="center">Reach us at <a href="tel:4158918124"><span class="red">415-891-8124</span></a> or <a href="mailto:piapevents@gmail.com"><span class="red">piapevents@gmail.com</span></a></span></h3>
  <!-- <div class="container"> -->
    <div id="slides">
    <img class="slide" id="first" :src="imgSrc(0)">
      <img v-for="(_, n) in 10" class="slide" :src="imgSrc(n)">
    </div>
  <!-- </div> -->
</div>
</template>

<script>
export default {
  name: 'catering',
  methods: {
    imgSrc: function (num) {
      return '/static/catering/c' + num + '.jpg'
    }
  }
}
</script>

<style scoped>
#first {
  width: 100%;
}
.slide:not(#first) {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;

  animation: fade-in 40s linear infinite;
}
#slides {
  border: 2px #FFF solid;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

#slides > .slide:nth-child(2) {
  animation-delay: 0s;
}
#slides > .slide:nth-child(3) {
  animation-delay: 4s;
}
#slides > .slide:nth-child(4) {
  animation-delay: 8s;
}
#slides > .slide:nth-child(5) {
  animation-delay: 12s;
}
#slides > .slide:nth-child(6) {
  animation-delay: 16s;
}
#slides > .slide:nth-child(7) {
  animation-delay: 20s;
}
#slides > .slide:nth-child(8) {
  animation-delay: 24s;
}
#slides > .slide:nth-child(9) {
  animation-delay: 28s;
}
#slides > .slide:nth-child(10) {
  animation-delay: 32s;
}
#slides > .slide:nth-child(11) {
  animation-delay: 36s;
}

@keyframes "fade-in" {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  16% {
    opacity: 0;
  }
}

h3 {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
