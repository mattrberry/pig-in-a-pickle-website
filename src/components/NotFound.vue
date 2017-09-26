<template>
  <div class="delivery">
    <h1 class="first-line">404</h1>
    <h3>Not Found!</h3>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<style scoped>
h1 {
  font-size: 128px;
  margin: 0;
}

h3 {
  margin: 0;
  margin-bottom: 42px;
}

a {
  padding: 10px 22px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 24px;
  text-decoration: none;
  color: #FFFFFF;
  transition: all .5s;
}

a:hover {
  color: #7D3A38;
  background-color: #FFFFFF;
}
</style>
