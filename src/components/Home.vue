<template>
  <div class="hello">
    <h1>Welcome to Pig in a Pickle</h1>
    <h3>Bringing you the best in Bay Area Bar-B-Q!</h3>
    <br>
    <img id="pig-1" src="../assets/pig.png">
    <p>We <span class="red">pride ourselves</span> on using only fresh, local ingredients and the finest brisket, pork, ribs and chicken available. Everything is made <span class="red">from scratch</span> including the buns, ribs, pickles, sausage and sauces.</p>
    <p><span class="red center">We have your taste buds covered.</span></p>
    <p>Each sauce is created to represent a region from the South: Memphis Style, Mustard Sauce from South Carolina, Dip from North Carolina, Alabama White Sauce or Commitment (our habanero hot sauce).</p>
    <p><span class="red center">What makes us different you ask?</span></p>
    <p>We don’t claim to be ‘just like’, any specific part of the South! But no matter where you are from you will appreciate our attention to detail. We cook what we like to eat so come on in and create your own favorite combination of meat, sides and sauces!</p>
    <video controls poster="../assets/video_cover.png">
      <source src="../assets/intro.webm" type="video/webm">
      <source src="../assets/intro.mp4" type="video/mp4">
      Unable to play video on your browser.
    </video>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p, a, span {
  margin: 0;
}
video {
  margin: 20px 0px 20px 0px;;
  width: 90%;
  max-width: 500px;
  border: 2px solid #FFF;
}
#pig-1 {
  width: 100px;
}
</style>
