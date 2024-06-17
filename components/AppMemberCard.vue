<script setup>
defineProps({
  linkUrl: String,
  imageUrl: String,
  contentText: String,
})
</script>

<template>
  <a :href="linkUrl" class="card">
    <div class="card-img">
      <img :src="imageUrl">
    </div>

    <p class="card-text">
      {{ contentText }}
    </p>
  </a>
</template>

<style lang="scss" scoped>
.card {
  padding: 24px;
  border-radius: $border-big-radius;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: $color-bg-opacity-green;
  height: 100%;

  p {
    color: $color-text-dark;
    font-family: $font-family-bold;
  }
}

@media (max-width: 1200px) {
  .card {
    padding: 24px;
    border-radius: $border-big-radius;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #ebf2f0;
    height: 100%;

    .card-img {
      width: 60px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: $color-text-dark;
      font-family: $font-family-bold;
    }
  }
}
</style>
