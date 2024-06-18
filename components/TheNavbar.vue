<template>
  <nav class="navigation">
    <div v-for="link in NAV_LINKS" :key="link"
      class="navigation_item"
    >
      <BaseLink :link-path="link.path">{{ link.text }}</BaseLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 12px;
}
</style>
