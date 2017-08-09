<template id="nav">
  <div id="nav">
    <h3>Pig in a Pickle</h3>
    <router-link v-for="page in pages" v-bind:to="page.url">{{page.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data: function () {
    return {
      pages: [
      { url: '/', name: 'Home' },
      { url: '/about', name: 'About' }
      ]
    }
  }
}
</script>

<style>
#nav {
  background: #964F4C;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;

  vertical-align: middle;
  font-size: 24px;
}
#nav a, #nav h3 {
  float: left;
  padding: 8px;
  text-decoration: none;
  color: #FFF;
}
#nav a.router-link-exact-active {
    color: #000;
}
#nav a:hover {
  animation: hover-on .5s forwards;
}
#nav a:not(:hover) {
  animation: hover-off .5s forwards;
}

@keyframes hover-on {
  from {background: #964F4C;}
  to   {background: #DECDBE;}
}
@keyframes hover-off {
  from {background: #DECDBE;}
  to   {background: #964F4C;}
}
</style>
