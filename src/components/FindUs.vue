<template>
  <div class="findus">
    <p class="first-line">We are looking forward to your visit with us. And if you want to just stop in and say hi, we’d like that too!</p>
<div class="address">
    <h3 class="center">Pig in a Pickle</h3>
    <p>341 Corte Madera Town Center</p>
    <p>Corte Madera, CA 94925</p>
  </div>
    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD8Pqp0WEP8v-jNQuNto6TydWc8WyVlwfQ&q=Pig+in+a+Pickle+BBQ,Corte+Madera+CA" allowfullscreen></iframe>
</div>
</template>

<script>
export default {
  name: 'findus'
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
