<template id="nav">
  <div id="nav">
    <router-link id="nav-home" to="/" onclick="document.getElementById('menu-toggle').checked = false;">Pig in a Pickle</router-link>
    <label for="menu-toggle"></label>
    <input type="checkbox" id="menu-toggle" />
    <div id="menu-items">
      <p class="menu-item" onclick="document.getElementById('menu-toggle').checked = false;" v-for="route in routes" :key="route.path" :id="route.name">
        <router-link v-bind:to="route.path">{{route.name}}</router-link>
      </p>
      <ChowNowButton v-if="renderOrderButton" class="menu-item" id="chowNowButton"></ChowNowButton>
    </div>
  </div>
</template>

<script>
import ChowNowButton from '../components/ChowNowButton.vue'

export default {
  name: 'appNav',
  components: {
    ChowNowButton
  },
  props: {
    renderOrderButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      if (route.name === 'Events' || route.name === 'Success' || route.name === '404') {
        return
      }
      this.routes.push({
        name: route.name,
        path: route.path
      })
    })
  },
  data () {
    return {
      routes: []
    }
  }
}
</script>

<style scoped>
#chowNowButton {
  position: fixed;
  top: 8px;
  right: 8px;
}

@media (min-width: 801px) {
  #menu-items {
    display: inline-block;
  }
  #menu-toggle, label {
    display: none;
  }
  .menu-item {
    display: inline-block;
  }
  #nav {
    height: 70px;
  }
  #menu-items, #nav-home {
    margin-top: 16px;
  }
}
@media (max-width: 800px) {
  #menu-toggle {
    clip: rect(0, 0, 0, 0);
    display: none;
  }
  label[for="menu-toggle"]:before, #menu-toggle {
    content: "\2630";
    width: 50px;
    height: 50px;
    right: 0;
    line-height: 50px;
    position: absolute;
    margin: 0;
    padding: 0;
    float: right;
  }
  #menu-items {
    margin-top: -100vh;
    transition: all .4s ease-in;
  }
  #menu-toggle:checked + #menu-items {
    margin-top: 0;
    transition: all .4s ease-out;
  }
  .menu-item {
    display: block;
  }
  .menu-item a {
    display: inline-block;
    width: 95%;
  }
}
@media (max-width: 1000px) {
  #chowNowButton {
    top: initial;
    bottom: 8px;
  }
}

#nav {
  background: #7D3A38;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  min-height: 50px;
  z-index: 1;
  font-size: 24px;
}
p.menu-item, #nav-home {
  margin: 0;
  padding: 2px 6px 2px 6px;
  text-decoration: none;
  color: #FFF;

  vertical-align: middle;
}
#nav-home {
  font-size: 36px;
  display: inline-block;
}
#nav a:not([target]) {
  text-decoration: none;
  color: #FFF;
}
#nav a:not(#nav-home):not([target]) {
  opacity: .5;
}
#nav a.router-link-exact-active:not(#nav-home):not([target]) {
  opacity: 1;
}
#nav a:not(#nav-home):not(.router-link-exact-active):hover:not([target]) {
  animation: hover-on .3s forwards;
}
#nav a:not(#nav-home):not(.router-link-exact-active):not(:hover):not([target]) {
  animation: hover-off .3s forwards;
}

@keyframes hover-on {
  from {opacity: .5;}
  to   {opacity: 1;}
}
@keyframes hover-off {
  from {opacity: 1;}
  to   {opacity: .5;}
}
</style>
