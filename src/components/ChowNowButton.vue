<template>
  <div id="chownow-button">
    <label for="chownow-toggle" v-on:click="toggleChowNow()" id="chownow-toggle-label"></label>
    <input type="checkbox" id="chownow-toggle" />
  </div>
</template>

<script>
import { ChowNowToggle } from './mixins/ChowNowToggle.js'

export default {
  name: 'chownowbutton',
  mixins: [ChowNowToggle]
}
</script>

<style scoped>
#chownow-toggle {
  clip: rect(0, 0, 0, 0);
  display: none;
}
label[for="chownow-toggle"]:before {
  content: "Order Now!";
  padding: 6px 18px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 24px;
  text-decoration: none;
  color: #7D3A38;
  transition: all .5s;
  background-color: #FFFFFF;
  cursor: pointer;

  font-size: 30px;
}
label[for="chownow-toggle"]:hover:before {
  color: #FFFFFF;
  background-color: #7D3A38;
}
</style>
