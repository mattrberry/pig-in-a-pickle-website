<template>
  <div class="catering">
    <h3 class="first-line"><span class="red center">We can customize any event to your specific needs, so let’s start with the basics...</span></h3>
    <h3><span class="center">Catering office hours Monday - Friday, 9am-4pm</span></h3>
    <h3><span class="center">Reach us at <a href="tel:4158918124"><span class="red">415-891-8124</span></a> or <a href="mailto:catering@piginapickle.com"><span class="red">catering@piginapickle.com</span></a></span></h3>
    <div id="slides">
      <img class="slide" id="first" :src="imgSrc(0)">
      <img v-for="(_, n) in 10" class="slide" :src="imgSrc(n)">
    </div>
    <h1><span class="center">Menus for 20 people or more...</span></h1>
    <p><span class="center red">(if 100-500 people call for a custom quote)</span></p>
    <div id="buffet-styles-container">
      <h1 id="buffet-header">Buffet Style</h1>
      <div class="buffet-styles">
        <div v-for="style in styles" class="buffet-style">
          <p class="style-header"><b>{{style.name}}:</b> {{style.times}}</p>
          <ul class="style-options">
            <li v-for="option in style.options" class="option">{{option.name}} ~ <i>{{option.details}}</i></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="choices">
      <div v-for="choice in choices" class="choice" :id="choice.id">
        <h1 class="choice-name"><span class="center">{{choice.name}}</span></h1>
        <p v-for="item in choice.items"class="choice-item"><span class="center">{{item}}</span></p>
      </div>
    </div>
    <br>
    <p id="follow-buffet"><span class="red">Don’t see what your looking for? We can do any combination of meats and sides to customize a menu that’s right for you. Call our catering department for further details.</span></p>
  </div>
</template>

<script>
export default {
  name: 'catering',
  methods: {
    imgSrc: function (num) {
      return '/static/catering/c' + num + '.jpg'
    }
  },
  data () {
    return {
      styles: [
        {
          name: '1 Meat and 3 Sides',
          times: '(only 11am-2pm)',
          options: [
            {
              name: 'Brisket: $15 per person',
              details: 'includes 1/3 lb. meat per person'
            },
            {
              name: 'Pulled Pork: $12 per person',
              details: 'includes 1/3 lb. meat per person'
            },
            {
              name: 'Chicken: $12 per person',
              details: 'includes 1/4 chicken per person'
            },
            {
              name: 'Baby Back Ribs: $15 per person',
              details: 'includes 4 ribs per person'
            }
          ]
        },
        {
          name: '2 Meat and 3 Sides',
          options: [
            {
              name: '$18 per person',
              details: 'includes 1/2 lb. total meat per person'
            }
          ]
        },
        {
          name: '3 Meat and 3 Sides',
          options: [
            {
              name: '$21 per person',
              details: 'includes 1/2 lb. total meat per person'
            },
            {
              name: '$24 per person',
              details: 'includes 3/4 lb. of meat per person'
            }
          ]
        }
      ],
      choices: [
        {
          name: 'Meats',
          items: [
            'Beef Brisket',
            'Pulled Pork',
            'Baby Back Ribs (add $2)',
            'Chicken',
            'House-Made Hot Links'
          ]
        },
        {
          name: 'Sides',
          items: [
            'Coleslaw',
            'Potato Salad',
            'Savory Ranch Style Beans',
            'White Cheddar Mac n Cheese',
            'Collard Greens (Ham Hocks or Vegetarian)',
            'Cornbread Muffin',
            'Parker House Rolls'
          ]
        },
        {
          name: 'BBQ Sauces',
          id: 'sauces',
          items: [
            'Mild BBQ',
            'Spicy BBQ',
            'Mustard',
            'Dip',
            'Eastern Carolina',
            'Alabama White'
          ]
        },
        {
          name: 'Beverages',
          items: [
            'House Made Lemonade',
            'Ice Tea (Regular or Sweet)',
            'Cola, Diet Cola, or Lemon Lime Soda',
            'Bottled Water'
          ]
        },
        {
          name: 'Add-ons',
          id: 'addons',
          items: [
            '$36 ~ Mized Green Salad (full pan serves 25-35 as a side)',
            '$48 ~ Mixed Green Salad with Cold Pulled Chicken',
            '$10 ~ Large Bag Kettle Tallow Chips (12oz)',
            '$32 ~ Bread Pudding (half pan serves 10-12 people)',
            '$32 ~ Seasonal Crisp or Cobbler (half pan server 10-12 people)',
            '$2 ~ Non-Alcoholic Beverages (per person)'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
#first {
  width: 100%;
}
#slides {
  border: 2px #FFF solid;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

.slide:not(#first) {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;

  animation: fade-in 40s linear infinite;
}
#slides > .slide:nth-child(2) {
  animation-delay: 0s;
}
#slides > .slide:nth-child(3) {
  animation-delay: 4s;
}
#slides > .slide:nth-child(4) {
  animation-delay: 8s;
}
#slides > .slide:nth-child(5) {
  animation-delay: 12s;
}
#slides > .slide:nth-child(6) {
  animation-delay: 16s;
}
#slides > .slide:nth-child(7) {
  animation-delay: 20s;
}
#slides > .slide:nth-child(8) {
  animation-delay: 24s;
}
#slides > .slide:nth-child(9) {
  animation-delay: 28s;
}
#slides > .slide:nth-child(10) {
  animation-delay: 32s;
}
#slides > .slide:nth-child(11) {
  animation-delay: 36s;
}

@keyframes "fade-in" {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  16% {
    opacity: 0;
  }
}

h1, h3, p, ul, li, span {
  margin: 0;
}

a {
  text-decoration: none;
}

#buffet-styles-container {
  text-align: left;
  margin-top: 20px;
}

.style-header {
  margin-left: 24px;
}

.style-options {
  margin-left: 40px;
}

.buffet-styles > .buffet-style {
  margin-top: 16px;
}


#choices {
  margin-top: 20px;
}

.choice {
  display: inline-block;
  width: 100%;
  max-width: 400px;
  vertical-align: top;
  margin-top: 20px;
}

.choice-name {
  text-transform: uppercase;
}

@media screen and (min-width: 800px) {
  #sauces {
    margin-top: -40px;
  }
}

#addons {
  max-width: 100%;
}
</style>
