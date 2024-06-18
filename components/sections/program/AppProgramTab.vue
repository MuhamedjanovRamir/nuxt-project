<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="tab">
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="subtitle">
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  padding: 19px;
  border: $border-disabled;
  border-radius: $border-medium-radius;
  cursor: pointer;
  height: 100%;
  min-width: 300px;

  &:hover {
    background: rgba(6, 180, 139, .1)
  }

  .title {
    span {
      color: $color-text-green;
      font-family: $font-family-bold;
      font-size: 22px;
    }
  }

  .subtitle {
    span {
      color: $color-text-gray;
      font-family: $font-family-bold;
    }
  }
} 
</style>
