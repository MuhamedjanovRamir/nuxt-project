<script setup>
defineProps({
  buttonType: {
    type: String,
    validator: value => ['filled', 'outline', 'opacity'].includes(value)
  },
})
</script>

<template>
  <button :class="['button', buttonType]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 14px 24px;
  border-radius: $border-big-radius;
  height: max-content;

  &.filled { background: $color-bg-light-green; }
  &.outline { background: transparent; border: 1px solid rgba(28, 47, 63, .2) }
  &.opacity { background: $opacity-link; }
}

@media (max-width: 992px) {
  .button {
    padding: 12px 20px;
  }
}

@media (max-width: 768px) {
  .button {
    padding: 8px 10px;
  }
}
</style>
