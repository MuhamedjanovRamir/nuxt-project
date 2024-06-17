<script setup>
defineProps({
  speakerImage: String,
  speakerName: String,
  speakerPosition: String,
  speakerInfo: String,
  border: Boolean
})
</script>

<template>
  <div class="card">
    <div class="card_img">
      <img :src="speakerImage">
    </div>

    <div class="card_content" :class="{bordered: border}">
        <h4 class="card_content-name">{{ speakerName }}</h4>
        <span class="card_content-position">{{ speakerPosition }}</span>
        <div class="card_content-info">
          <span>{{ speakerInfo }}</span>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  .card_img {
    border-radius: 20px;
    flex: 350px 0 0;
    height: 350px;
    overflow: hidden;
    width: 100%;

    img {
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
      width: 100%;
    }
  }

  .card_content {
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex: 100% 1 1;
    flex-direction: column;
    padding: 16px;

    &.bordered {
      border: 1px solid #c5d4e0;
    }

    .card_content-name {
      font-size: 20px;
      line-height: 150%;
      color: $color-text-dark;
      margin-bottom: 12px;
    }

    .card_content-position {
      display: block;
      font-size: 18px;
      font-family: $font-family-bold;
      color: $color-text-green;
      margin-bottom: 16px;
    }

    .card_content-info {
      border-top: 1px solid #c5d4e0;
      height: 85px;
      margin-bottom: 16px;
      margin-top: auto;
      padding-top: 16px;
      width: 100%;

      span {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        font-size: 18px;
        font-family: $font-family-bold;
        color: $color-text-dark;
        opacity: $opacity-text;
        margin-top: auto;
      }
    }
  }
}
</style>
