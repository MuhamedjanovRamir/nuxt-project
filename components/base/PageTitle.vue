<template>
  <section class="page_title">
    <div class="container">
      <div class="page_title-content">
        <h1>
          <slot />
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page_title {
  position: relative;
  background: $color-bg-dark-green;
  padding: 20px 0;
  
  &::before {
    background-image: url('	https://www.uzpharmforum.com/x.png');
    background-repeat: no-repeat;
    background-size: 100%;
    content: "";
    height: 100px;
    position: absolute;
    right: 23px;
    top: 50%;
    transform: rotate(-45deg) translate(50px, -50%);
    width: 100px;
  }

  h1 {
    font-size: 44px;
    color: $color-text-primary;
    margin-bottom: 22px;
  }
}
</style>
