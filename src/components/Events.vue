<template>
  <div class="events">
    <h3 class="first-line"><span class="red">Take a look at all of our exciting upcoming events!</span></h3>
    <div class="event" v-for="event in events">
      <h3 class="event-title">{{event.title}}</h3>
      <hr class="event-underline">
      <p class="event-head">{{event.head}}</p>
      <p class="event-desc" v-html="event.desc"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'events',
  methods: {
    formURL: function (id, key, time) {
      return 'https://www.googleapis.com/calendar/v3/calendars/' +
              id +
              '/events?key=' +
              key +
              '&orderBy=startTime&singleEvents=true&timeMin=' +
              time
    },
    listener: function (data) {
      var parsed = JSON.parse(data.target.responseText)
      for (var idx = 0; idx < parsed.items.length; idx++) {
        var event = {}
        event.title = parsed.items[idx].summary
        try {
          event.desc = parsed.items[idx].description
        } catch (e) {
          event.desc = ''
        }
        event.head = this.dateString(parsed.items[idx].start.date)
        this.events.push(event)
      }
    },
    getEvents: function () {
      var req = new XMLHttpRequest()
      req.addEventListener('load', this.listener)
      req.open('GET', this.formURL(this.calendarID, this.key, this.date))
      req.send()
    },
    dateString: function (eventDate) {
      eventDate = new Date(eventDate + 'T12:00:00-08:00')
      return eventDate.toLocaleString('en-us', {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'})
      // return eventDate.toDateString().substring(0, eventDate.toDateString().length - 5)
      // return 'Special Event on ' + eventDate.toDateString().substring(0, eventDate.toDateString().length - 5)
    }
  },
  data: function () {
    return {
      events: [],
      date: new Date().toISOString(),
      key: 'AIzaSyD8Pqp0WEP8v-jNQuNto6TydWc8WyVlwfQ',
      calendarID: 'piginapickle.com_adib4t2ct9jpipd3qao5pd4pgo@group.calendar.google.com'
    }
  },
  mounted: function () {
    this.getEvents()
  }
}
</script>

<style scoped>
.events {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
}
.event {
  margin-bottom: 20px;
}
.event-title {
  font-size: 26px;
  margin: 0;
}
.event-underline {
  width: 50%;
  margin: 2px auto 2px auto;
}
.event-head {
  font-size: 22px;
  margin: 0 0 2px 0;
}
.event-desc {
  font-size: 24px;
  line-height: 22px;
  margin: 0;
}
</style>
