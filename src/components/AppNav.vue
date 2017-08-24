<template id="nav">
  <div id="nav">
    <router-link id="nav-home" to="/" onclick="document.getElementById('menu-toggle').checked = false;">Pig in a Pickle</router-link>
    <label for="menu-toggle"></label>
    <input type="checkbox" id="menu-toggle" />
    <div id="menu-items">
      <p class="menu-item" onclick="document.getElementById('menu-toggle').checked = false;" v-for="page in pages">
        <router-link v-bind:to="page.url">{{page.name}}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data: function () {
    return {
      pages: [
        { url: '/', name: 'Home' },
        { url: '/about', name: 'About' },
        { url: '/menu', name: 'Menu' }
      ]
    }
  }
}
</script>

<style scoped>
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
}
@media (max-width: 800px) {
  #menu-toggle {
    clip: rect(0, 0, 0, 0);
  }
  label[for="menu-toggle"]:before, #menu-toggle {
    content: "\2630";
    width: 50px;
    height: 50px;
    right: 0;
    line-height: 50px;
    position: fixed;
    margin: 0;
    padding: 0;
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
}

#nav {
  background: #964F4C;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  min-height: 50px;
  z-index: 1;
  font-size: 24px;
}
.menu-item, #nav-home {
  margin: 0;
  padding: 2px 4px 2px 4px;
  text-decoration: none;
  color: #FFF;

  vertical-align: middle;
}
#nav-home {
  font-size: 36px;
  display: inline-block;
}
#nav a {
  text-decoration: none;
  color: #FFF;
}
#nav a:not(#nav-home) {
  opacity: .5;
}
#nav a.router-link-exact-active:not(#nav-home) {
  opacity: 1;
}
#nav a:not(#nav-home):not(.router-link-exact-active):hover {
  animation: hover-on .3s forwards;
}
#nav a:not(#nav-home):not(.router-link-exact-active):not(:hover) {
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
