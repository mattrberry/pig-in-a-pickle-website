<template id='location-selector'>
  <div id='location-selector'>
    <div id='locations'>
      <p class='location-option' v-for='loc in locations' v-bind:key='loc' :class='{ selected: loc == location }' v-on:click='clickHandler'>{{loc}}</p>
    </div>
    <slot v-for='loc in locations' :name='loc' v-if='location == loc'></slot>
  </div>
</template>

<script>
export default {
  name: 'locationSwitcher',
  mounted: function () {
    if (localStorage.location) {
      this.location = localStorage.location
    }
  },
  watch: {
    location (newLocation) {
      localStorage.location = newLocation
    }
  },
  data: function () {
    return {
      locations: ['Corte Madera', 'Emeryville'],
      location: 'Corte Madera'
    }
  },
  methods: {
    clickHandler: function (event) {
      this.location = event.target.textContent
    }
  }
}
</script>

<style scoped>
#location-selector {
    margin: 10px auto;
}
#locations {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
}
.location-option {
    margin: 0;
    padding: 20px;
    border: 1px solid #fff;
    cursor: pointer;
    min-width: 20%;
    border-radius: 2px;
    transition: background .2s;
    user-select: none;
}
.location-option.selected, .location-option:hover {
    background: rgba(255,255,255,.3);
}
</style>
