<template>
  <div class="event-banner">
    <h1 class="ribbon">
       <p class="ribbon-content">
         <p id="ribbon-content-head">{{nextEvent.head}}</p>
         <p id="ribbon-content-title">{{nextEvent.title}}</p>
         <!-- <p id="ribbon-content-desc">{{nextEvent.desc}}</p> -->
       </p>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'event-banner',
  methods: {
    formURL: function (id, key, time) {
      return 'https://www.googleapis.com/calendar/v3/calendars/' +
              id +
              '/events?key=' +
              key +
              '&maxResults=1&orderBy=startTime&singleEvents=true&timeMin=' +
              time
    },
    listener: function (data) {
      var parsed = JSON.parse(data.target.responseText)
      this.nextEvent.title = parsed.items[0].summary
      try {
        this.nextEvent.desc = parsed.items[0].description
      } catch (e) {
        this.nextEvent.desc = ''
      }
      this.nextEvent.head = this.daysDiffString(parsed.items[0].start.date)
    },
    getNextEvent: function () {
      var req = new XMLHttpRequest()
      req.addEventListener('load', this.listener)
      req.open('GET', this.formURL(this.calendarID, this.key, this.date))
      req.send()
    },
    daysDiffString: function (eventDate) {
      // var currentDate = new Date(this.date)
      eventDate = new Date(eventDate + 'T12:00:00-08:00')
      // var days = Math.floor((eventDate - currentDate) / (1000 * 60 * 60 * 24))

      // var diffString
      // if (days <= 0) {
      //   diffString = 'Special Event Today!'
      // } else if (days === 1) {
      //   diffString = 'Special Event in 1 Day!'
      // } else if (days <= 14) {
      //   diffString = 'Special Event in ' + days + ' Days!'
      // } else {
      //   document.getElementsByClassName('event-banner')[0].style.display = 'none'
      // }

      return 'Special Event on ' + eventDate.toDateString().substring(0, eventDate.toDateString().length - 5)
      // return diffString
    }
  },
  data: function () {
    return {
      nextEvent: {
        head: '',
        title: '',
        desc: ''
      },
      date: new Date().toISOString(),
      key: 'AIzaSyD8Pqp0WEP8v-jNQuNto6TydWc8WyVlwfQ',
      calendarID: 'piginapickle.com_adib4t2ct9jpipd3qao5pd4pgo@group.calendar.google.com'
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
  /*margin-bottom: 15px;*/
}


.ribbon {
  font-size: 20px !important;
  /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */

  width: 60%;

  position: relative;
  background: #964F4C;
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
  border: 1.5em solid #783F3C;
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
  border-color: #693734 transparent transparent transparent;
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
</style>
