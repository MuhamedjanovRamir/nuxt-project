<template>
  <BaseWaves wave-color="#e0f6f1 "></BaseWaves>
  <section class="section speakers">
    <div class="container">
      <SectionHeader class="speakers_header" title="Основные спикеры" text-color="#1c2f3f">
        <BaseButton button-type="outline" class="button">
          <span class="button_text">Смотреть все</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="t-icon t-icon-svg t-icon-arrow-left" style="width:16px;height:16px;flex:16px 0 0;fill:transparent;stroke:transparent;">
            <path fill="#06B48B" d="M12.172 7 6.808 1.636 8.222.222 16 8l-7.778 7.778-1.414-1.414L12.172 9H0V7z"></path>
          </svg>
        </BaseButton>
      </SectionHeader>

      <div class="speakers_content">
        <div v-for="card in SPEAKERS_CARDS" :key="card" class="speakers_content-item">
          <CardSpeaker
            :speaker-image="card.imgUrl"
            :speaker-name="card.name"
            :speaker-position="card.position"
            :speaker-info="card.text"
            class="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.speakers { background: $color-bg-opacity-green; }

.speakers_header {
  justify-content: space-between;

  .button  {
    display: flex;
    align-items: center;
    gap: 8px;

    .button-text { color: $color-text-dark; }
  }
}

.speakers_content {
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  margin: 0 -12px;

  .speakers_content-item {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 12px;
    min-height: 100%;

    .item { height: 100%; }
  }
}

@media (max-width: 1200px) {
  .speakers_content .speakers_content-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .speakers_content .speakers_content-item {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .speakers_header {
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .button  {
      display: flex;
      align-items: center;
      gap: 8px;

      .button-text { color: $color-text-dark; }
    }
  }
}
</style>
