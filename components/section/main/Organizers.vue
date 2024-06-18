<template>
  <BaseWaves wave-color="#e0f6f1"></BaseWaves>
  <section class="section organizers">
    <div class="container">
      <SectionHeader title="Организаторы" color="#1c2f3f" class="organizers_header" />

      <div class="organizers_content">
        <div class="organizers_content-item" v-for="organizer in ORGANIZERS" :key="organizer">
          <div class="card">
            <div class="img">
              <img :src="organizer.img">
            </div>

            <p class="info">{{ organizer.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.organizers { background: #e0f6f1; }
.organizers_header { justify-content: center; }

.organizers_content {
  display: flex;
  margin: 0 -12px;

  .organizers_content-item {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    padding: 0 12px;

    .card {
      background: #ffff;
      border-radius: $border-big-radius;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      height: 100%;

      .img {
        height: 100px;
        width: 100px;

        img { width: 100%; height: 100%; }
      }

      .info {
        text-align: center;
        color: $color-text-dark;
        font-family: $font-family-bold;
      }
    }
  }
}

@media (max-width: 1200px) {
  .organizers_content {
    flex-wrap: wrap;
    row-gap: 24px;

    .organizers_content-item {
      flex: 0 0 50%;
      max-width: 50%;
    
      &:last-child {
        flex: 100%;
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .organizers_content {
    .organizers_content-item {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>
