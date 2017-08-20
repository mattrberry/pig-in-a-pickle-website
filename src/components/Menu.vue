<template>
  <div class="menu">
    <h1><span class="red">All our meats are Hormone & Antibiotic Free, Humanely Raised and Locally Sourced when possible, and are smoked with California White Oak.</span></h1>
    <div class="blocks">
      <div v-for="block in menu_blocks" v-bind:id="block.name">
        <h3>{{block.name}}</h3>
        <div class="item" v-for="item in block.items">
          <p class="item-name">{{item.name}}</p>
          <p class="item-details">{{item.details}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data: function () {
    return {
      menu_blocks: [
        {
          name: 'MEATS',
          items: [
            {
              name: 'Baby Back Ribs',
              details: 'Dry Rubbed and Lightly Smoked',
              price: '$7 1/4lb, $13 1/2lb, $26 1lb'
            },
            {
              name: 'Smoked Chicken',
              details: 'Tossed in Alabama White Sauce',
              price: '$8 1/4 chicken, $12 1/2 chicken, $24 whole chicken'
            },
            {
              name: 'Beef Brisket',
              details: 'Wet Rubbed & Smoked for 18 hours',
              price: '$7 , $13 , $26 1lb'
            },
            {
              name: 'Pulled Pork',
              details: 'Dry Rubbed Smoked Pork Shoulder',
              price: '$6 1/4lb, $10 1/2lb, $18 1lb'
            },
            {
              name: 'House Made Hot Link',
              details: '',
              price: '$6 each (approx 1/3lb)'
            }
          ]
        },
        {
          name: 'SIDES',
          items: ['potato salad', 'coleslaw', 'beans', 'mac', 'chili', 'greens', 'cornbread', 'rolls', 'chips', 'dill', 'pickle']
        },
        {
          name: 'SANDWITCHES',
          items: ['Brisket', 'Pulled Pork', 'Chicken Salad', 'link', 'kids dog', 'kids brisket', 'kids pork', 'kids chicken'] },
      { name: 'salads', items: ['mixed greens', '+chicken', '+pork', '+brisket'] },
      { name: 'plates', items: [] },
      { name: 'dessets', items: [] },
      { name: 'drinks', items: [] }
      ]
    }
  }
}
</script>

<style scoped>
.item p {
  margin: 2px;
}

.item-name {
  font-size: 26px;
}

.item-details {
  font-size: 20px;
}

.item-price {
  font-size: 24px;
}
</style>
