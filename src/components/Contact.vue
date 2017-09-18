<template>
  <div class="delivery">
    <h3 class="first-line">Thanks for wanting to contact us. We look forward to hearing from you.</h3>
    <h3>You can reach us via phone at <a href="tel:4158913265"><span class="red">415-891-3265</span></a>, via email at <a href="mailto:info@piginapickle.com"><span class="red">info@piginapickle.com</span></a>, or by sending us a message from the form below.</h3>
    <form action="https://formspree.io/info@piginapickle.com" method="POST">
      <input type="text" name="name" placeholder="Your name">
      <input type="email" name="email" placeholder="Your email">
      <input type="text" name="_subject" placeholder="Subject">
      <textarea rows="3" name="message" placeholder="Message"></textarea>
      <input type="submit" value="Send Message">
      <input type="hidden" name="_next" value="https://piginapickle.com/success">
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
a {
  text-decoration: none;
}
textarea {
  height: 90px;
}
form * {
  width: 80%;
}
</style>
