<script setup>
defineProps({ linkPath: String })
</script>

<template>
  <nuxt-link class="link" :to="linkPath">
    <slot />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.link {
  font-size: 20px;
  color: $color-text-primary;
  transition: .3s ease;

  &:hover { color: #24cda5; }
}
</style>
