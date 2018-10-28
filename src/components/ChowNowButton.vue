<template>
  <div id="chownow-button">
    <!-- <label for="chownow-toggle" v-on:click="toggleChowNow()" id="chownow-toggle-label"></label> -->
    <!-- <input type="checkbox" id="chownow-toggle" /> -->
    <a class="chownow-order-online" href="https://ordering.chownow.com/order/9478/locations" target="_blank">Order Now!</a>
    <!-- <p class="chownow-order-online">Order Now!</p> -->
  </div>
</template>

<script>
import { ChowNowToggle } from './mixins/ChowNowToggle.js'

export default {
  name: 'chownowbutton',
  mixins: [ChowNowToggle],
  mounted: function () {
    let chownowScript = document.createElement('script')
    chownowScript.setAttribute('src', 'https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js')
    chownowScript.setAttribute('data-chownow-company-id', '9478')
    document.head.appendChild(chownowScript)
  }
}
</script>

<style scoped>
#chownow-toggle {
  clip: rect(0, 0, 0, 0);
  display: none;
}
label[for="chownow-toggle"]:before, .chownow-order-online {
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
label[for="chownow-toggle"]:hover:before, .chownow-order-online {
  color: #FFFFFF;
  background-color: #7D3A38;
}
</style>
