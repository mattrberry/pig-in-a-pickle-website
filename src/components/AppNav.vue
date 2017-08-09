<template id="nav">
  <div id="nav">
    <img src="../assets/pig.png" height="30px" />
    <a v-for="page in pages" v-bind:href="page.url">{{page.name}}</a>
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

  font-size: 24px;
}
#nav img {
  float: left;
  display: block;
}
#nav a {
  float: left;
  padding: 8px;
  text-decoration: none;
  color: #FFF;
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
