<template>
  <div class="tab">
    <slot />
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
} 
</style>
