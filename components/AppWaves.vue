<script setup>
defineProps({ waveColor: String })
</script>

<template>
  <div class="hero_area">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="5" fill="#C1EDE2" />
        <use xlink:href="#gentle-wave" x="48" y="7" :fill="waveColor" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.hero_area {
  position: relative;
  height: 70px;
  background: #ffffff;
  width: 100%;
}

.waves {
  position: absolute;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
  bottom: 0;
  left: 0;
}

.parallax>use { animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite; }
.parallax>use:nth-child(1) {
  animation-delay: -4s;
  animation-duration: 8s;
}
.parallax>use:nth-child(2) {
  animation-delay: -5s;
  animation-duration: 15s;
}

@keyframes move-forever {
  0% {
      transform: translate3d(-90px, 0, 0);
  }
  100% {
      transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}

</style>
