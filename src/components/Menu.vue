<template>
  <div class="menu">
    <h3><span class="red">All our meats are Hormone & Antibiotic Free, Humanely Raised and Locally Sourced when possible, and are smoked with California White Oak.</span></h3>
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
              price: '$9 3 ribs, $18 6 ribs, $30 12 ribs'
            },
            {
              name: 'Smoked Chicken',
              details: 'Tossed in Alabama White Sauce',
              price: '$8 1/4 chicken, $12 1/2 chicken, $24 whole chicken'
            },
            {
              name: 'Beef Brisket',
              details: 'Wet Rubbed & Smoked for 18 hours',
              price: '$8 1/4lb, $15 1/2lb, $28 1lb'
            },
            {
              name: 'Pulled Pork',
              details: 'Dry Rubbed Smoked Pork Shoulder',
              price: '$6 1/4lb, $10 1/2lb, $18 1lb'
            },
            {
              name: 'House Made Hot Link',
              price: '$7 each (approx 1/3lb)'
            }
          ]
        },
        {
          name: 'SIDES',
          items: [
            {
              name: 'Potato Salad',
              price: '$3.50 8oz, $7 16oz, $11 32oz'
            },
            {
              name: 'Coleslaw',
              price: '$3 8oz, $6 16oz, $9 32oz'
            },
            {
              name: 'Ranch Style Beans',
              price: '$3.50 8oz, $7 16oz, $11 32oz'
            },
            {
              name: 'Beef Brisket Chili',
              details: '~ when available ~',
              price: '$5 8oz, $9 16oz, $16 32oz'
            },
            {
              name: 'Collard Greens w/ Ham Hock',
              price: '$4 8oz, $8 16oz, $14 32oz'
            },
            {
              name: 'Vegetarian Collard Greens',
              price: '$4 8oz, $8 16oz, $14 32oz'
            },
            {
              name: 'Cornbread',
              price: '$3'
            },
            {
              name: 'Parker House Rolls',
              price: '$4 for 4 small rolls'
            },
            {
              name: 'Kettle Tallow Chips',
              price: '$2 side, $4 bag'
            },
            {
              name: 'Dill Pickle',
              price: '$2'
            },
            {
              name: 'B & B Pickles',
              price: '$3 side, $7 jar'
            },
            {
              name: 'To Go Sauces',
              details: '2oz per 1/4lb of Meat is Included',
              price: '$2 4oz, $7 jar'
            }
          ]
        },
        {
          name: 'SANDWITCHES',
          items: [
            {
              name: 'Brisket Sandwitch',
              price: '$14'
            },
            {
              name: 'Pulled Pork Sandwitch',
              price: '$12'
            },
            {
              name: 'Chicken Salad',
              details: 'Pulled Chicken, Parsley & Celery Tossed in Alabama White Sauce With Caramelized Onions & Romaine Hearts',
              price: '$12'
            },
            {
              name: 'Hot Link Sandwitch',
              details: 'With Roasted Sweet Peppers & Caramelized Onions',
              price: '$11'
            },
            {
              name: 'KIDS Beef Hot Dog',
              price: '$6'
            },
            {
              name: 'KIDS Brisket Sandwitch',
              price: '$7'
            },
            {
              name: 'KIDS Pork Sandwitch',
              price: '$6'
            },
            {
              name: 'KIDS Pulled Chicken Sandwitch',
              details: '(cold)',
              price: '$6'
            }
          ]
        },
        {
          name: 'SALADS',
          items: [
            {
              name: 'Seasonal Mixed Greens',
              price: '$9'
            },
            {
              name: 'with Pulled Chicken',
              price: '$12'
            },
            {
              name: 'with Pulled Pork',
              price: '$14'
            },
            {
              name: 'with Beef Brisket',
              price: '$16'
            }
          ]
        },
        {
          name: 'PLATES & PLATTERS',
          items: [
            {
              name: '2 Meats & 3 Sides',
              details: '1/2lb of Meat',
              price: '$19'
            },
            {
              name: '3 Meats & 3 Sides',
              details: '3/4lb of Meat',
              price: '$25'
            },
            {
              name: '3 Meats & 4 Sides',
              details: '1.5lb of Meat',
              price: '$65'
            }
          ]
        },
        {
          name: 'DESSERTS',
          items: [
            {
              name: 'Scoop of Three Twins Vanilla',
              details: 'with House Made Caramel Sauce',
              price: '$3'
            },
            {
              name: 'Seasonal Selections',
              details: 'add $1 for Three Twins Vanilla Ice Cream on Top',
              price: '$6'
            }
          ]
        },
        {
          name: 'DRINKS',
          items: [
            {
              name: 'Cola / Diet Cola / Lemon-Lime / Ginger Ale / Ice Tea / Sweet Tea / Arnold Palmer',
              details: 'Free Refills',
              price: '$3'
            },
            {
              name: 'Coffee / Decaf',
              details: '$1 Refills',
              price: '$3'
            },
            {
              name: 'Lemonade',
              details: '$1 Refills',
              price: '$3'
            },
            {
              name: 'Strawberry Lemonade',
              details: '$1 Refills',
              price: '$3.50'
            },
            {
              name: 'Sprechers Root Beer',
              details: 'Bottle',
              price: '$4'
            },
            {
              name: 'Marin Kombucha',
              details: 'Bottle',
              price: '$5'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 800px) {
  .block {
    float: left;
    padding: 8px;
    width: 30%;
  }
  .block-checkbox {
    display: none;
  }
  .block-name {
    font-size: 26px;
    font-weight: bold;
  }
}

@media (max-width: 799px) {
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
