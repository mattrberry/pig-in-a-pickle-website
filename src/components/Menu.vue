<template>
  <div class="menu">
    <h1><span class="red">All our meats are Hormone & Antibiotic Free, Humanely Raised and Locally Sourced when possible, and are smoked with California White Oak.</span></h1>

    <div class="blocks">
      <div v-for="block in menu_blocks" v-bind:id="block.name" class="block tab">
        <input v-bind:id="classAddTab(block.name)" type="checkbox" name="tabs" class="block-checkbox">
        <label v-bind:for="classAddTab(block.name)" class="block-name">{{block.name}}</label>
        <div class="tab-content item" v-for="item in block.items">
          <p class="item-name">{{item.name}}</p>
          <p class="item-details">{{item.details}}</p>
          <p class="item-price">{{item.price}}</p>
          <br>
        </div>
      </div>
    </div>

    <!--<div class="blocks">
      <div v-for="block in menu_blocks" v-bind:id="block.name" class="block">
        <h3>{{block.name}}</h3>
        <div class="item" v-for="item in block.items">
          <p class="item-name">{{item.name}}</p>
          <p class="item-details">{{item.details}}</p>
          <p class="item-price">{{item.price}}</p>
          <br>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'menu',
  methods: {
    classAddTab: function (nameToAdd) {
      return 'tab-' + nameToAdd
    }
  },
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
              price: '$6 each (approx 1/3lb)'
            }
          ]
        },
        {
          name: 'SIDES',
          items: [
            {
              name: 'Potato Salad',
              price: '$3, $6, $9'
            },
            {
              name: 'Coleslaw',
              price: '$3, $6, $9'
            },
            {
              name: 'Ranch Style Beans',
              price: '$3, $6, $9'
            },
            {
              name: 'Beef Brisket Chili',
              details: '~ when available ~',
              price: '$4, $8, $12'
            }
          ]
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
@media (min-width: 600px) {
  .block {
    float: left;
    padding: 8px;
  }
  .block-checkbox {
    display: none;
  }
  .block-name {
    font-size: 26px;
    font-weight: bold;
  }
}

@media (max-width: 599px) {
  .block {
    padding: 0px;
  }
  /* Acordeon styles */
  .tab {
    //position: relative;
    margin-bottom: 1px;
    width: 100%;
    //color: #fff;
    //overflow: hidden;
  }
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  label {
    position: relative;
    display: block;
    padding: 0 0 0 1em;
    //background: #16a085;
    font-weight: bold;
    line-height: 3;
    cursor: pointer;

    text-align: left;
    font-size: 24px;
  }
  .blue label {
    //background: #2980b9;
  }
  .tab-content {
    max-height: 0;
    overflow: hidden;
    //background: #1abc9c;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
  }
  .blue .tab-content {
    //background: #3498db;
  }
  .tab-content p {
    margin: 1em;
  }
  /* :checked */
  input:checked ~ .tab-content {
    max-height: 10em;
  }
  /* Icon */
  label::after {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 3em;
    height: 3em;
    line-height: 3;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
  }
  input[type=checkbox] + label::after {
    content: "+";
  }
  input[type=radio] + label::after {
    content: "\25BC";
  }
  input[type=checkbox]:checked + label::after {
    transform: rotate(315deg);
  }
  input[type=radio]:checked + label::after {
    transform: rotateX(180deg);
  }
}

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
