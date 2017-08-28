<template>
  <div class="vendors">
    <h3 class="first-line"><span class="red center">Meet Our Vendors!</span></h3>

    <div class="vendor" v-for="vendor in vendors">
      <h1 class="vendor-product">{{vendor.product}}</h1>
      <img class="vendor-logo" :src="vendor.logo">
      <p class="vendor-link"><a :href="vendor.url"><span class="red">{{vendor.name}}</span></a></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vendors',
  data: function () {
    return {
      vendors: [
        {
          name: 'Hill Meat Company',
          url: 'http://www.hillmeat.com/',
          product: 'Pork',
          logo: 'http://www.hillmeat.com/wp-content/uploads/2017/02/hills-premium-meats-logo.png'
        },
        {
          name: 'Brandt Beef',
          url: 'http://www.brandtbeef.com/',
          product: 'Brisket',
          logo: 'http://www.brandtbeef.com/content/cache/skins/MrLobster/images/image-logo.png'
        },
        {
          name: 'Rancho Gordo',
          url: 'https://www.ranchogordo.com/',
          product: 'Piquinto Beans',
          logo: 'https://cdn.shopify.com/s/files/1/0685/2511/files/rancho_gordo_logo_360x.png?v=1501443167'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h3, p {
  margin: 0;
}

h3 {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

.vendor {
  display: inline-block;
  width: 200px;
  margin: 10px 10px 10px 10px;
}

.vendor-logo {
  height: 100%;
  max-height: 100px;
  width: auto;
}

.vendor-link {
  /*float: left;*/
}
</style>
