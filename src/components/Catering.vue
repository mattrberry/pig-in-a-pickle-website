<template>
  <div class="catering">
  <h3 class="first-line"><span class="red center">We can customize any event to your specific needs, so let’s start with the basics...</span></h3>
  <h3><span class="center">Catering office hours Monday- Friday 9am to 4pm</span></h3>
  <h3><span class="center">Reach us at <a href="tel:4158918124"><span class="red">415-891-8124</span></a> or <a href="mailto:piapevents@gmail.com"><span class="red">piapevents@gmail.com</span></a></span></h3>
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
      try {
        var slides = document.getElementsByClassName('slide')
        for (var idx = 0; idx < slides.length; idx++) {
          slides[idx].style.display = 'none'
        }
        this.slideIndex++
        if (this.slideIndex >= slides.length) {
          this.slideIndex = 0
        }
        slides[this.slideIndex].style.display = 'block'
        setTimeout(this.carousel, 4000)
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('Couldn\'t style image. This is expected if you have navigated off of the catering page.')
        } else {
          throw e
        }
      }
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
  top: 0;
}
#slides {
  border: 2px #FFF solid;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

h3 {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
