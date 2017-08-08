<template id="nav">
  <ol>
    <li v-for="page in pages">
      <a v-bind:href="page.url">{{page.name}}</a>
    </li>
  </ol>
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
