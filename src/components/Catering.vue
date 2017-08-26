<template>
  <div class="catering">
    <h3><span class="red center">We can customize any event to your specific needs, so let’s start with the basics...</span></h3>
    <h3><span class="red center">Catering office hours Monday- Friday 9am to 4pm</span></h3>
    <h3><span class="red center">Reach us at <a href="tel:4158918124">415-891-8124</a> or <a href="mailto:piapevents@gmail.com">piapevents@gmail.com</a></span></h3>
    <div id="slides">
      <img class="slide" v-for="n in 9" :src="imgSrc(n)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'catering',
  methods: {
    imgSrc: function (num) {
      return '/static/catering/c' + num + '.jpg'
    },
    carousel: function () {
      var slides = document.getElementsByClassName('slide')
      for (var idx = 0; idx < slides.length; idx++) {
        slides[idx].style.display = 'none'
      }
      this.slideIndex++
      if (this.slideIndex >= slides.length) {
        this.slideIndex = 0
      }
      slides[this.slideIndex].style.display = 'block'
      setTimeout(this.carousel, 3000)
    }
  },
  data: function () {
    return {
      slideIndex: 100000
    }
  },
  mounted: function () {
    this.carousel()
  }
}
</script>

<style scoped>
.slide {
  width: 100%;
}
#slides {
  border: 2px #FFF solid;
  width: 80%;
  margin: 0 auto;
}
</style>
