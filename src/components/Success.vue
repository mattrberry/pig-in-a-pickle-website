<template>
  <div class="delivery">
    <h1 class="first-line">Your message has been successfully delivered!</h1>
    <p>We'll get back to you as soon as we can.</p>
    <a href="/">Home</a>
  </div>
</template>

<script>
export default {
  name: 'success'
}
</script>

<style scoped>
h1 {
  margin: 10px auto;
}

p {
  margin: 0;
  margin-bottom: 40px;
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
