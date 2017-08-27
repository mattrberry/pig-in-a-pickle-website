<template>
  <div class="about">
    <h3 class="first-line"><span class="red center">You only need 2 things to make great BBQ: Time and the right wood.</span></h3>
    <img src="../assets/damon.jpg"></img>
    <p>Pig in a Pickle’s Damon Stainbrook worked in the restaurant business as a chef since the early 90’s when he worked for Executive Chef Bradley Ogden at Lark Creek Inn. Since then, he has worked in a variety of capacities at high end restaurants in San Francisco including as Poissonier at Heights Restaurant, Grill Cook at One Market Restaurant, Lead Line Cook at American Bistro, and finally as Sous Chef under Thomas Keller at French Laundry.</p>
    <p>What makes our restaurant different is the amount, consideration and attention to each part of what goes into a great smoked meat or recipe. We pride ourselves on using only fresh, local ingredients and the finest brisket, pork, ribs and chicken available. Everything is made from scratch including the buns, rubs, pickles, sausage and sauces. Each sauce is created to represent a region from the South: Memphis Style, Mustard Sauce from South Carolina, Dip from North Carolina, Alabama White Sauce or our very own hot sauce.</p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
@media (min-width: 765px) {
  img {
    float: left;
    margin: 10px;
    margin-bottom: 50px;
  }
}
img {
  width: 90%;
  max-width: 300px;
  border: 2px solid #FFF;
}
</style>
