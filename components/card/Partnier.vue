<script setup>
defineProps({
  partnierUrl: String,
  partnierImg: String,
})
</script>

<template>
  <div class="partnier">
    <a :href="partnierUrl">
      <div class="img">
        <img :src="partnierImg" >
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.partnier {
  border: 1px solid #c5d4e0;
  border-radius: 20px;
  height: 180px;
  padding: 20px;

  .img {
    height: 100%;
    overflow: hidden;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
