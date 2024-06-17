<script setup>
defineProps({
  textColor: String,
  title: String,
})
</script>

<template>
  <div class="section_header">
    <h2 :style="{color: textColor}" class="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.section_header {
  width: 100%;
  margin-bottom: 56px;
  display: flex;

  .title {
    font-size: 48px;
    line-height: 150%;
    font-family: $font-family-bold;
  }
}

@media (max-width: 768px) {
  .section_header {
    margin-bottom: 32px;

    .title {
      font-size: 34px;
    }
  }
}
</style>
