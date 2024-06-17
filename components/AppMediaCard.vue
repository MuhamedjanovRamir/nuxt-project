<script setup>
defineProps({
  cardType: {
    type: String,
    validator: value => ['photo', 'video'].includes(value)
  },
  imageUrl: String
})
</script>

<template>
  <div :class="['card', cardType]">
    <div class="card_img">
      <img :src="imageUrl">
    </div>

    <div v-if="cardType === 'photo'" class="overlay">
      <span>
        <svg focusable="false" class="" data-icon="eye" width="1em" height="1em" fill="#ffff" aria-hidden="true" viewBox="64 64 896 896"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
        Preview
      </span>
    </div>

    <div v-if="cardType === 'video'" class="video"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  max-height: 280px;
  overflow: hidden;

  .card_img {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: .3s;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .3s ease;
    left: 0;
    top: 0;

    span {
      display: flex;
      align-items: center;
      color: $color-text-primary;
      font-size: 14px;
      gap: 4px;
    }
  }

  .video::before {
    background-image: url('	https://www.uzpharmforum.com/play.svg');
    background-size: 100%;
    content: "";
    height: 70px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: .3s;
    width: 70px;
  }

  &.photo:hover {
    .overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }

  &.video:hover {
    .video::before {
      opacity: 1;
    }
  }
}
</style>
