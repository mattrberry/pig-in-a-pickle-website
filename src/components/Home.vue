<template>
  <div class="hello">
    <EventBanner></EventBanner>
    <h1 class="first-line">Welcome to Pig in a Pickle</h1>
    <h3>Bringing you the best in Bay Area BBQ!</h3>
    <br>
    <img id="pig-1" src="/static/home/pig.png">
    <p>We <span class="red">pride ourselves</span> on using only fresh, local ingredients and the finest brisket, pork, ribs and chicken available. Everything is made <span class="red">from scratch</span> including the buns, ribs, pickles, sausage and sauces.</p>
    <p><span class="red center">We have your taste buds covered.</span></p>
    <p>Each sauce is created to represent a region from the South: Memphis Style, Mustard Sauce from South Carolina, Dip from North Carolina, Alabama White Sauce or Commitment (our habanero hot sauce).</p>
    <p><span class="red center">What makes us different you ask?</span></p>
    <p>We don’t claim to be ‘just like’, any specific part of the South! But no matter where you are from you will appreciate our attention to detail. We cook what we like to eat so come on in and create your own favorite combination of meat, sides, and sauces!</p>
    <video controls poster="/static/home/video_cover-min.png">
      <source src="/static/home/intro.webm" type="video/webm">
      <source src="/static/home/intro.mp4" type="video/mp4">
      Unable to play video on your browser.
    </video>
  </div>
</template>

<script>
import EventBanner from './EventBanner.vue'
import ChowNowButton from './ChowNowButton.vue'

export default {
  name: 'hello',
  components: {
    EventBanner,
    ChowNowButton
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p, a, span {
  margin: 0;
}
video {
  margin: 20px 0px 10px 0px;;
  width: 90%;
  max-width: 500px;
  border: 2px solid #FFF;
}
#pig-1 {
  width: 100px;
}
</style>
