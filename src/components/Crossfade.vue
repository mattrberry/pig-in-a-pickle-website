<template>
  <div id="crossfade">
    <div class="images">
      <figure v-for="_ in numImages"></figure>
    </div>
    <div id="darkener"></div>
  </div>
</template>

<script>
export default {
  name: 'crossfade',
  data: function () {
    return {
      numImages: 7
    }
  }
}
</script>

<style>
.images > figure {
  animation: imageAnimation 42s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100vh;
  left: 0px;
  opacity: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: -1;
  margin: 0 auto;
}
.images > figure:nth-child(1) {
  background-image: url('/static/crossfade/bg-1-min.png');
}
.images > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: url('/static/crossfade/bg-2-min.png');
}
.images > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: url('/static/crossfade/bg-3-min.png');
}
.images > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: url('/static/crossfade/bg-4-min.png');
}
.images > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: url('/static/crossfade/bg-5-min.png');
}
.images > figure:nth-child(6) {
  animation-delay: 30s;
  background-image: url('/static/crossfade/bg-6-min.png');
}
.images > figure:nth-child(7) {
  animation-delay: 36s;
  background-image: url('/static/crossfade/bg-7-min.png');
}
@keyframes imageAnimation {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
  }
  8% {
    animation-timing-function: ease-out;
    opacity: 1;
  }
  17% {
    opacity: 1
  }
  25% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

#darkener {
  /*background: black;
  opacity: .6;*/
  background-image: linear-gradient(90deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,.5) 20%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.4) 100%);

  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
