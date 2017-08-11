<template id="nav">
  <div id="nav">
    <router-link id="nav-home" to="/">Pig in a Pickle<img src="../assets/pig.png"></router-link>
    <!--<router-link id="nav-home-img" to="/"><img src="../assets/pig.png"></router-link>-->
    <p v-for="page in pages"><router-link v-bind:to="page.url">{{page.name}}</router-link></p>
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

<style>
#nav {
  background: #964F4C;
  //overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;

  font-size: 24px;
}
#nav p, #nav-home {
  //float: left;
  margin: 0;
  padding: 2px 4px 2px 4px;
  text-decoration: none;
  color: #FFF;

  vertical-align: middle;
  display: inline-block;
}
#nav-home {
  font-size: 36px;
}
#nav-home img {
  display: none;
}
#nav-home-img img {
  height: 80%;
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
