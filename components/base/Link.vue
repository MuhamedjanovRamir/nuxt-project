<script setup>
defineProps({ linkPath: String })
</script>

<template>
  <NuxtLink class="link" :to="linkPath">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  font-size: 20px;
  color: $color-text-primary;
  transition: .3s ease;

  &:hover { color: #24cda5; }
}
</style>
