<template>
  <div class="delivery">
    <h3 class="first-line"><span class="red center">It’s not just for pizza or Chinese food anymore!</span></h3>
    <LocationSwitcher>
      <div slot="Corte Madera">
        <p>We are now teaming up with Dine-In Marin because they deliver ALL DAY, EVERYDAY!  You can have your Pig in a Pickle BBQ delivered anytime we are open by ordering online at <a href="https://www.dineinmarin.com/order/restaurant/pig-in-a-pickle-menu/83"><span class="red">DineInMarin.com</span></a></p>
        <p>But Wait…. what about my FREE <strong><i>Office Delivery</i></strong>?  Yes, with 24 hour notice we will still deliver lunch to your office Monday through Friday for orders  over $150. Email your order to <a href="mailto:catering@piginapickle.com"><span class="red">catering@piginapickle.com</span></a></p>
        <p>For 20 people or more, check out our <strong><i>Catering Department 415-891-8124</i></strong> for details on delivery and more.</p>
      </div>
      <div slot="Emeryville">
        <p>Unfortunately, delivery is currently only available from the Corte Madera location. Please check back soon!</p>
      </div>
    </LocationSwitcher>
    <img src="/static/delivery/all-that.png">
  </div>
</template>

<script>
import LocationSwitcher from './LocationSwitcher.vue'

export default {
  name: 'delivery',
  components: {
    LocationSwitcher
  }
}
</script>

<style scoped>
img {
  width: 90%;
  border: 2px #FFF solid;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
}
</style>
