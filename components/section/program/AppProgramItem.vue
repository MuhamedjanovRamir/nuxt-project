<script setup>
  defineProps({
    time: String,
    title: String,
    info: String
  })
</script>

<template>
  <div class="item">
    <div class="item_time">
      <span>{{ time }}</span>
    </div>
    <div class="item_content">
      <h3 class="item_content-title">{{ title }}</h3>
      <p v-if="info" class="item_content-info">{{ info }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 16px 20px;
  background: #f2f8f6;
  border-radius: $border-medium-radius;
  display: flex;
  align-items: center;
  gap: 24px;

  .item_time {
    flex: 0 0 200px;
    text-align: center;
    background: $color-bg-green;
    padding: 10px 34px;
    border-radius: $border-small-radius;

    span {
      color: $color-text-primary;
    }
  }

  .item_content-title {
    color: #1b8c6c;
    font-size: 24px;
    line-height: 170%;
  }

  .item_content-info {
    font-size: 22px;
    line-height: 170%;
  }
}

@media (max-width: 768px) {
  .item {
    flex-wrap: wrap;

    .item_time {
      text-align: center;
      flex: 0 0 100%;
    }

    .item_content-title {
      flex: 0 0 100%;
    }

    .item_content-info {
      flex: 0 0 100%;
    }
  }
}
</style>
