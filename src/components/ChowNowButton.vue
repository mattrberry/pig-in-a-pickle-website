<template>
  <a class="chownow-order-online" href="https://ordering.chownow.com/order/9478/locations" target="_blank">Order Now!</a>
</template>

<script>
export default {
  name: 'chownowbutton',
  mounted: function () {
    let chownowScript = document.createElement('script')
    chownowScript.setAttribute('src', 'https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js')
    chownowScript.setAttribute('data-chownow-company-id', '9478')
    document.head.appendChild(chownowScript)
  }
}
</script>

<style scoped>
.chownow-order-online {
  padding: 6px 18px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  font-size: 24px;
  text-decoration: none;
  color: #7D3A38;
  transition: all .5s;
  background-color: #FFFFFF;
  cursor: pointer;

  font-size: 30px;
}
.chownow-order-online:hover {
  color: #FFFFFF;
  background-color: #7D3A38;
}
</style>
