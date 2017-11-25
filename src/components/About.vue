<template>
  <div class="about">
    <h3 class="first-line"><span class="red center">You only need 2 things to make great BBQ: Time and the right wood.</span></h3>
    <div id="img-container">
      <img src="/static/about/about.jpg"></img>
      <div id="photo-credit">
        <p>Photo Credit: Marin IJ & Stuart Lirette</p>
      </div>
    </div>
    <p>Pig in a Pickle’s Damon Stainbrook worked in the restaurant business as a chef since the early 90’s when he worked for Executive Chef Bradley Ogden at Lark Creek Inn. Since then, he has worked in a variety of capacities at high end restaurants in San Francisco including as Poissonier at Heights Restaurant, Grill Cook at One Market Restaurant, Lead Line Cook at American Bistro, and finally as Sous Chef under Thomas Keller at French Laundry.</p>
    <p>What makes our restaurant different is the amount, consideration, and attention to each part of what goes into a great smoked meat or recipe. We pride ourselves on using only fresh, local ingredients and the finest brisket, pork, ribs, and chicken available. Everything is made from scratch including the buns, rubs, pickles, sausage, and sauces. Each sauce is created to represent a region from the South: Memphis Style, Mustard Sauce from South Carolina, Dip from North Carolina, Alabama White Sauce, or our very own hot sauce.</p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
img {
  width: 100%;
  max-width: 300px;
  border: 2px solid #FFF;
}

p:last-child {
  margin-bottom: 10px;
}

#img-container {
  position: relative;
  color: white;
  width: min-content;
  margin: 10px auto;

  max-width: 300px;
  width: 90%;
}

#photo-credit p {
  position: absolute;
  bottom: 0px;
  right: 8px;
  font-size: 14px;
  opacity: .9;
}
</style>
