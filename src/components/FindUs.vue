<template>
  <div class="findus">
    <p class="first-line">We are looking forward to your visit with us. And if you want to just stop in and say hi, we’d like that too!</p>
    <div class="address">
      <LocationSwitcher>
        <div slot="Corte Madera">
          <h3 class="center">Pig in a Pickle</h3>
          <p>341 Corte Madera Town Center</p>
          <p>Corte Madera, CA 94925</p>
          <br>
          <p>Open Daily: 11am - 9pm</p>
          <br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1214075357752!2d-122.51905218422078!3d37.927594079731804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a8c82983669%3A0x497397edcc974380!2sPig+In+A+Pickle!5e0!3m2!1sen!2sus!4v1547008648208" allowfullscreen></iframe>
        </div>
        <div slot="Emeryville">
          <h3 class="center">Pig in a Pickle</h3>
          <p>Emeryville Public Market</p>
          <p>Emeryville, CA 94608</p>
          <br>
          <p>Open Daily: 11am - 9pm or until we sell out</p>
          <br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.815737065387!2d-122.29579748422248!3d37.841199379747266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857f5109ce2845%3A0xac7e9c9f10a9fc98!2sPig+In+A+Pickle!5e0!3m2!1sen!2sus!4v1547006252951" allowfullscreen></iframe>
        </div>
      </LocationSwitcher>
    </div>
  </div>
</template>

<script>
import LocationSwitcher from './LocationSwitcher.vue'

export default {
  name: 'findus',
  components: {
    LocationSwitcher
  }
}
</script>

<style scoped>
.address {
  margin-bottom: 10px;
}
.address p, .address h3 {
  margin: 2px;
  padding: 0;
  line-height: 24px;
}
iframe {
  width: 90%;
  height: 400px;
  border: 2px solid #FFF;
  margin-bottom: 10px;
}
</style>
