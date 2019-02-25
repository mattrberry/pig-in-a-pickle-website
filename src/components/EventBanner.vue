<template>
  <div v-if="nextEvent.title" class="event-banner">
    <h1 class="ribbon">
       <p class="ribbon-content">
         <p id="ribbon-content-head">{{nextEvent.head}}</p>
         <p id="ribbon-content-title">{{nextEvent.title}}</p>
       </p>
    </h1>
    <p id="info"><router-link id="nav-home" to="/events"><i>Click here for more info!</i></router-link></p>
  </div>
</template>

<script>
export default {
  name: 'event-banner',
  methods: {
    listener: function (data) {
      const parsed = JSON.parse(data.target.responseText)
      if (parsed.length < 1) {
        return
      }
      this.nextEvent.title = parsed[0].summary
      try {
        this.nextEvent.desc = parsed[0].description
      } catch (e) {
        this.nextEvent.desc = ''
      }
      this.nextEvent.head = this.daysDiffString(parsed[0].date)
    },
    getNextEvent: function () {
      const req = new XMLHttpRequest()
      req.addEventListener('load', this.listener.bind(req))
      req.open('GET', 'https://piginapickle.com/upcoming_events')
      req.send()
    },
    daysDiffString: function (eventDate) {
      eventDate = new Date(eventDate + 'T12:00:00-08:00')
      return 'Special Event on ' + eventDate.toLocaleString('en-us', {weekday: 'long', month: 'short', day: '2-digit'})
    }
  },
  data: function () {
    return {
      nextEvent: {
        head: '',
        title: '',
        desc: ''
      }
    }
  },
  mounted: function () {
    this.getNextEvent()
  }
}
</script>

<style scoped>
.event-banner {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
}


.ribbon {
  font-size: 20px !important;
  /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */

  width: 60%;
  min-height: 44px;

  position: relative;
  background: #7D3A38;
  color: #fff;
  text-align: center;
  padding: .5em 1.25em; /* Adjust to suit */
  margin: 0 auto 2em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
}
.ribbon:before, .ribbon:after {
  content: "";
  position: absolute;
  display: block;
  bottom: -1em;
  border: 1.5em solid #632E2C;
  z-index: -1;
}
.ribbon:before {
  left: -2em;
  border-right-width: 1.5em;
  border-left-color: transparent;
}
.ribbon:after {
  right: -2em;
  border-left-width: 1.5em;
  border-right-color: transparent;
}
.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
  content: "";
  position: absolute;
  display: block;
  border-style: solid;
  border-color: #562826 transparent transparent transparent;
  bottom: -1em;
}
.ribbon .ribbon-content:before {
  left: 0;
  border-width: 1em 0 0 1em;
}
.ribbon .ribbon-content:after {
  right: 0;
  border-width: 1em 1em 0 0;
}



p {
  margin: 0;
  font-size: 20px;
}
#ribbon-content-head, #ribbon-content-desc {
  font-size: 18px;
}
#ribbon-content-title {
  font-size: 26px;
}
#ribbon-content-title, #ribbon-content-head, #ribbon-content-desc {
  line-height: 22px;
}


#info {
  margin-top: -40px;
}
#info a {
  text-decoration: none;
  color: #FFF;
}
</style>
