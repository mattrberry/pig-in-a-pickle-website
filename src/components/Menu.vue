<template>
  <div class="menu">
    <h3><span class="red">All our meats are Hormone & Antibiotic Free, Humanely Raised and Locally Sourced when possible, and are smoked with California White Oak.</span></h3>
    <div class="blocks">
      <div v-for="block in menu_blocks" v-bind:id="block.name" class="block tab">
        <input v-bind:id="classAddTab(block.name)" type="checkbox" name="tabs" class="block-checkbox">
        <label v-bind:for="classAddTab(block.name)" class="block-name">{{block.name}}</label>
        <div class="tab-content item" v-for="item in block.items">
          <h4 class="item-name">{{item.name}}<strong class="price" v-if="objSize(item.prices) == 1">{{item.prices[0].value}}</strong></h4>
          <p class="item-details">{{item.details}}</p>
          <p class="item-prices" v-if="objSize(item.prices) > 1" v-for="price in item.prices">{{price.label}}<strong class="price">{{price.value}}</strong></p>
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
    },
    objSize: function (obj) {
      try {
        return Object.keys(obj).length
      } catch (e) {
        console.log('Failed. Object received: ' + obj)
        return 0
      }
    }
  },
  data: function () {
    return {
      menu_blocks: [
        {
          name: 'Meats',
          items: [
            {
              name: 'Baby Back Ribs',
              details: 'Dry Rubbed and Lightly Smoked',
              prices: [
                {
                  label: '3 ribs',
                  value: '9'
                },
                {
                  label: '6 ribs',
                  value: '18'
                },
                {
                  label: '12 ribs',
                  value: '30'
                }
              ]
            },
            {
              name: 'Smoked Chicken',
              details: 'Tossed in Alabama White Sauce',
              prices: [
                {
                  label: '1/4 chicken',
                  value: '8'
                },
                {
                  label: '1/2 chicken',
                  value: '12'
                },
                {
                  label: '1 chicken',
                  value: '24'
                }
              ]
            },
            {
              name: 'Beef Brisket',
              details: 'Wet Rubbed & Smoked for 18 hours',
              prices: [
                {
                  label: '1/4 pound',
                  value: '8'
                },
                {
                  label: '1/2 pound',
                  value: '15'
                },
                {
                  label: '1 pound',
                  value: '28'
                }
              ]
            },
            {
              name: 'Pulled Pork',
              details: 'Dry Rubbed Smoked Pork Shoulder',
              prices: [
                {
                  label: '1/4 pound',
                  value: '6'
                },
                {
                  label: '1/2 pound',
                  value: '10'
                },
                {
                  label: '1 pound',
                  value: '18'
                }
              ]
            },
            {
              name: 'House Made Hot Link',
              prices: [
                {
                  label: 'Per Link',
                  value: '7'
                }
              ]
            }
          ]
        },
        {
          name: 'Sandwiches',
          items: [
            {
              name: 'Beef Brisket Sandwich',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '14'
                }
              ]
            },
            {
              name: 'Pulled Pork Sandwich',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '12'
                }
              ]
            },
            {
              name: 'Chicken Salad Sandwich',
              details: 'Pulled Chicken, Parsley & Celery Tossed in Alabama White Sauce With Caramelized Onions & Romaine Hearts',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '12'
                }
              ]
            },
            {
              name: 'Hot Link Sandwich',
              details: 'With Roasted Sweet Peppers & Caramelized Onions',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '11'
                }
              ]
            },
            {
              name: 'KIDS Beef Hot Dog',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '6'
                }
              ]
            },
            {
              name: 'KIDS Brisket Sandwich',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '7'
                }
              ]
            },
            {
              name: 'KIDS Pork Sandwich',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '6'
                }
              ]
            },
            {
              name: 'KIDS Pulled Chicken Sandwich',
              details: '(cold)',
              prices: [
                {
                  label: 'Per Sandwich',
                  value: '6'
                }
              ]
            }
          ]
        },
        {
          name: 'Sides',
          items: [
            {
              name: 'Potato Salad',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '3.50'
                },
                {
                  label: 'Medium (16oz)',
                  value: '7'
                },
                {
                  label: 'Large (32oz)',
                  value: '11'
                }
              ]
            },
            {
              name: 'Coleslaw',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '3'
                },
                {
                  label: 'Medium (16oz)',
                  value: '6'
                },
                {
                  label: 'Large (32oz)',
                  value: '9'
                }
              ]
            },
            {
              name: 'Ranch Style Beans',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '3.50'
                },
                {
                  label: 'Medium (16oz)',
                  value: '7'
                },
                {
                  label: 'Large (32oz)',
                  value: '11'
                }
              ]
            },
            {
              name: 'Beef Brisket Chili',
              details: '~ when available',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '5'
                },
                {
                  label: 'Medium (16oz)',
                  value: '9'
                },
                {
                  label: 'Large (32oz)',
                  value: '16'
                }
              ]
            },
            {
              name: 'Collard Greens w/ Ham Hock',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '4'
                },
                {
                  label: 'Medium (16oz)',
                  value: '8'
                },
                {
                  label: 'Large (32oz)',
                  value: '14'
                }
              ]
            },
            {
              name: 'Vegetarian Collard Greens',
              prices: [
                {
                  label: 'Small (8oz)',
                  value: '4'
                },
                {
                  label: 'Medium (16oz)',
                  value: '8'
                },
                {
                  label: 'Large (32oz)',
                  value: '14'
                }
              ]
            },
            {
              name: 'Cornbread',
              prices: [
                {
                  label: 'Per Piece',
                  value: '3'
                }
              ]
            },
            {
              name: 'Parker House Rolls',
              prices: [
                {
                  label: '4 small rolls',
                  value: '4'
                }
              ]
            },
            {
              name: 'Kettle Tallow Chips',
              prices: [
                {
                  label: 'Side',
                  value: '2'
                },
                {
                  label: 'Bag',
                  value: '4'
                }
              ]
            },
            {
              name: 'Dill Pickle',
              prices: [
                {
                  label: 'Per Pickle',
                  value: '2'
                }
              ]
            },
            {
              name: 'B & B Pickles',
              prices: [
                {
                  label: 'Side',
                  value: '3'
                },
                {
                  label: 'Jar',
                  value: '7'
                }
              ]
            },
            {
              name: 'To Go Sauces',
              details: '2oz per 1/4lb of Meat is Included',
              prices: [
                {
                  label: '4oz',
                  value: '2'
                },
                {
                  label: 'Jar',
                  value: '7'
                }
              ]
            }
          ]
        },
        {
          name: 'Salads',
          items: [
            {
              name: 'Seasonal Mixed Greens',
              prices: [
                {
                  label: 'Per Salad',
                  value: '9'
                }
              ]
            },
            {
              name: '-> with Pulled Chicken',
              prices: [
                {
                  label: 'Per Salad',
                  value: '12'
                }
              ]
            },
            {
              name: '-> with Pulled Pork',
              prices: [
                {
                  label: 'Per Salad',
                  value: '14'
                }
              ]
            },
            {
              name: '-> with Beef Brisket',
              prices: [
                {
                  label: 'Per Salad',
                  value: '16'
                }
              ]
            }
          ]
        },
        {
          name: 'Plates & Platters',
          items: [
            {
              name: '2 Meats & 3 Sides',
              details: '1/2lb of Meat',
              prices: [
                {
                  label: 'Per Plate',
                  value: '19'
                }
              ]
            },
            {
              name: '3 Meats & 3 Sides',
              details: '3/4lb of Meat',
              prices: [
                {
                  label: 'Per Plate',
                  value: '25'
                }
              ]
            },
            {
              name: '3 Meats & 4 Sides',
              details: '1.5lb of Meat',
              prices: [
                {
                  label: 'Per Platter',
                  value: '65'
                }
              ]
            }
          ]
        },
        {
          name: 'Desserts',
          items: [
            {
              name: 'Scoop of Three Twins Vanilla',
              details: 'with House Made Caramel Sauce',
              prices: [
                {
                  label: 'Per Scoop',
                  value: '3'
                }
              ]
            },
            {
              name: 'Seasonal Selections',
              details: 'add $1 for Three Twins Vanilla Ice Cream on Top',
              prices: [
                {
                  label: 'Per Dessert',
                  value: '6'
                }
              ]
            }
          ]
        },
        {
          name: 'DRINKS',
          items: [
            {
              name: 'Cola / Diet Cola / Lemon-Lime / Ginger Ale / Ice Tea / Sweet Tea / Arnold Palmer',
              details: 'Free Refills',
              prices: [
                {
                  label: 'Per Drink',
                  value: '3'
                }
              ]
            },
            {
              name: 'Coffee / Decaf',
              details: '$1 Refills',
              prices: [
                {
                  label: 'Per Coffee',
                  value: '3'
                }
              ]
            },
            {
              name: 'Lemonade',
              details: '$1 Refills',
              prices: [
                {
                  label: 'Per Lemonade',
                  value: '3'
                }
              ]
            },
            {
              name: 'Strawberry Lemonade',
              details: '$1 Refills',
              prices: [
                {
                  label: 'Per Lemonade',
                  value: '3.50'
                }
              ]
            },
            {
              name: 'Sprechers Root Beer',
              details: 'Bottle',
              prices: [
                {
                  label: 'Per Bottle',
                  value: '4'
                }
              ]
            },
            {
              name: 'Marin Kombucha',
              details: 'Bottle',
              prices: [
                {
                  label: 'Per Bottle',
                  value: '5'
                }
              ]
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
  .blocks {
    width:100%;
    column-count: 3;
    column-gap: 0;
  }

  .block {
    display: block;
    width: calc(100% - 20px);
    break-inside: avoid;
    padding: 10px;
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
  .item {
    padding: 0 0 0 24px;
  }
  .block {
    padding: 0px;
  }
  .price {
    padding: 0 24px 0 0;
  }
  /* Acordeon styles */
  .tab {
    //position: relative;
    margin-bottom: 1px;
    width: 100%;
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
    font-weight: bold;
    line-height: 3;
    cursor: pointer;

    text-align: left;
    font-size: 24px;
  }
  .tab-content {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
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

.block-name {
  text-transform: uppercase;
}

.item-name {
  text-align: left;
  margin: 10px 0 0 0;
  font-size: 26px;
}

.item:nth-of-type(1) > .item-name {
  margin: 0 0 0 0;
}

.item-details {
  text-align: left;
  font-size: 20px;
  font-style: italic;
  margin: -5px 0 0 0;
}

.item-prices {
  text-align: left;
  font-size: 20px;
  margin: 0;
}

.price:before {
  content: '$';
}

.price {
  float: right;
  font-size: 18px;
}
</style>
