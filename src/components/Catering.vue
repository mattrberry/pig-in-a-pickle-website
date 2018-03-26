<template>
  <div class="catering">
    <h3 class="first-line"><span class="red center">We can customize any event to your specific needs, so let’s start with the basics...</span></h3>
    <h3><span class="center">Catering office hours Monday - Friday, 9am-4pm</span></h3>
    <h3><span class="center">Reach us at <a href="tel:4158918124"><span class="red">415-891-8124</span></a> or <a href="mailto:catering@piginapickle.com"><span class="red">catering@piginapickle.com</span></a></span></h3>
    <div class="images">
      <div id="img-container">
        <img id="main"></img>
        <div id="photo-credit">
          <p>Photo Credit: Jade Turgel Photography</p>
        </div>
      </div>
      <div id="prevDiv" v-on:click="prev">
        <img id="prev">
        <div class="imgNavText">&larr;</div>
      </div>
      <img id="cur">
      <div id="nextDiv" v-on:click="next">
        <img id="next">
        <div class="imgNavText">&rarr;</div>
      </div>
    </div>
    <h1><span class="center">See Menus Below for Parties of 20 to 50 people</span></h1>
    <a id="pdf-menu" href="/static/catering/menu.pdf"><span class="center red">For Parties of 50 to 250, click <span class="underline">here</span> for menus and service options</span></a>
    <h3><span class="center">Getting Married?</span></h3>
    <a id="pdf-wedding" href="/static/catering/wedding.pdf"><span class="center red">Click <span class="underline">Here</span> for Packages and Pricing</span></a>
    <div id="buffet-styles-container">
      <h1 id="buffet-header">Buffet Style</h1>
      <div class="buffet-styles">
        <div v-for="style in styles" class="buffet-style">
          <p class="style-header"><b>{{style.name}}:</b> {{style.times}}</p>
          <ul class="style-options">
            <li v-for="option in style.options" class="option">
              {{option.name}} ~ <i>{{option.details}}</i>
              <ul v-if="option.subdetails">
                <li v-for="subdetail in option.subdetails">{{subdetail}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="choices">
      <div v-for="choice in choices" class="choice" :id="choice.id">
        <h1 class="choice-name"><span class="center">{{choice.name}}</span></h1>
        <i v-if="choice.description" class="choice-description"><span class="center">{{choice.description}}</span></i>
        <p v-for="item in choice.items"class="choice-item"><span class="center">{{item}}</span></p>
      </div>
    </div>
    <div id="extras">
      <p v-for="extra in extras" class="extra">{{extra}}</p>
    </div>
    <br>
    <p id="follow-buffet"><span class="red">Don’t see what your looking for? We can do any combination of meats and sides to customize a menu that’s right for you. Call our catering department for further details.</span></p>
    <br><br>
    <div id="favorite-events">
      <h1>Some of our Favorite Events have Included:</h1>
      <p>Backyard/Beach Barbecue's</p>
      <p>Weddings, Life Celebrations, Baby Showers (even a few stork deliveries to Marin General!),</p>
      <p>Employee/Corporate Picnics,</p>
      <p>Overnight Corporate Camp Out (This had multiple meals including a cowboy breakfast and a midnight movie snack!)</p>
    </div>
    <br><br>
    <h1>Interested? Send us a catering request!</h1>
    <form action="https://formspree.io/catering@piginapickle.com" method="POST">
      <input type="text" name="name" placeholder="Your name">
      <input type="tel" name="phone" placeholder="Your phone number">
      <input type="email" name="email" placeholder="Your email">
      <input type="text" name="date" placeholder="Date of event">
      <input type="text" name="time" placeholder="Time of event">
      <input type="number" name="guests" placeholder="Number of guests">
      <input type="text" name="location" placeholder="Location">
      <select name="preference">
        <option>Catering preference</option>
        <option>Pick Up</option>
        <option>Delivered</option>
        <option>Delivered and Set Up</option>
        <option>Fully Staffed</option>
      </select>
      <input type="submit" value="Send Catering Request">
      <input type="hidden" name="_next" value="https://piginapickle.com/success">
      <input type="hidden" name="_subject" value="Catering Request">
    </form>
    <br>
  </div>
</template>

<script>
export default {
  name: 'catering',
  methods: {
    next: function (event) {
      this.imgIdx += 1
      this.setImg(this.imgIdx)
    },
    prev: function (event) {
      this.imgIdx -= 1
      this.setImg(this.imgIdx)
    },
    setImg: function (idx) {
      var images = this.images
      if (idx < 1) {
        idx += 50
      }
      document.getElementById('main').src = images[idx % 50]
      document.getElementById('prev').src = images[(idx - 1) % 50]
      document.getElementById('cur').src = images[idx % 50]
      document.getElementById('next').src = images[(idx + 1) % 50]
    },
    getImages: function () {
      var l = []
      for (var i = 1; i <= 50; i++) {
        l.push('/static/catering/' + i.toString() + '.jpg')
      }
      return l
    }
  },
  mounted: function () {
    this.images = this.getImages()
    this.imgIdx = 11
    this.setImg(this.imgIdx)
  },
  data () {
    return {
      imgIdx: 0,
      images: null,
      styles: [
        {
          name: '1 Meat 2 Sides and Choice of Sandwich or Slider Buns',
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
              details: 'includes 1/3 lb. of meat per person',
              subdetails: [
                'Choice of Pulled Chicken or Chicken Salad'
              ]
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
            'White Cheddar Mac n Cheese (add $1)',
            'Collard Greens (Ham Hocks or Vegetarian)',
            'Seasonal Mixed Green Salad',
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
          description: '$2 per person',
          items: [
            'House Made Lemonade',
            'Ice Tea (Regular or Sweet)',
            'Cola, Diet Cola, or Lemon Lime Soda',
            'Bottled Water'
          ]
        },
        {
          name: 'Deserts',
          description: '$3 per person',
          id: 'addons',
          items: [
            'Oatmeal and Seasonal Fruit Bars (individual)',
            'Butterscotch Pudding with Whipped Cream (individual)',
            'Bread Pudding (½ pans, Buffet Style)',
            'Seasonal Fruit Cobbler (½ pans, Buffet Style)'
          ]
        }
      ],
      extras: [
        'Add Paper Plates, Compostable Utensils, Napkins and Wet Wipes $1 per person',
        'Add Bamboo Plates, Compostable Utensils, Napkins and Wet Wipes $2 per person',
        'Disposable Chafing Dishes with Serving Utensils and Sterno $15 each'
      ]
    }
  }
}
</script>

<style scoped>
.images {
  margin-top: 20px;
  margin-bottom: 10px;
}
#img-container {
  position: relative;
  color: white;
  width: min-content;
  margin: 10px auto;
}
#photo-credit p {
  position: absolute;
  bottom: 2px;
  left: 4px;
  font-size: 14px;
  opacity: .9;
}
#main {
  display: block;
  margin: 0 auto;
  border: 2px #FFF solid;
  width: 600px;
  height: 450px;
  overflow: hidden;
  object-fit: cover;
}
#prev, #cur, #next {
  width: 200px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
}
#prev, #next {
  filter: brightness(30%);
}
#nextDiv, #prevDiv {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
#pdf-menu, #pdf-wedding {
  font-size: 26px;
}
#pdf-menu span {
  margin-bottom: 10px;
}
.imgNavText {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 80px;
  transform: translate(-50%, -50%);
  user-select: none;
}

@media screen and (max-width: 800px) {
  #main {
    width: 356px;
    height: 267px;
  }
  #next, #prev {
    width: 178px;
    height: 133px;
  }
  #cur {
    display: none;
  }
}

@media screen and (max-width: 400px) {
  #main {
    width: 316px;
    height: 237px;
  }
  #next, #prev {
    width: 158px;
    height: 118px;
  }
}


h1, h2, h3, p, ul, li, span {
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

.choice-description {
  font-size: 24px;
  margin-top: -5px;
  margin-bottom: -5px;
}

#extras {
  margin-top: 50px;
  margin-bottom: 20px;
  line-height: 20px;
}

.extra {
  font-size: 22px;
  margin-top: 6px;
}

@media screen and (min-width: 800px) {
  #sauces {
    margin-top: -40px;
  }
}

#addons {
  max-width: 100%;
}

#favorite-events p {
  margin-top: 8px;
}

input[type="submit"] {
  cursor: pointer;
  transition: .5s all;
}

input[type="submit"]:hover {
  background: #FFFFFF;
  color: #7D3A38;
}
</style>
