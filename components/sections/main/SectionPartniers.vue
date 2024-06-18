<script setup>
import { PARTNIERS } from '~/utils/constants'
</script>

<template>
  <section class="section partniers">
    <div class="container"> 
      <app-section-header title="Партнеры форума" text-color="#1c2f3f" class="partniers_header"></app-section-header>

      <div class="partniers_content">
        <div 
          v-for="partnier in PARTNIERS"
          :key="partnier"
          class="partniers_content-section"
        >
          <h2 class="partnier-title">{{ partnier.title }}</h2>
          <div class="partnier_cards">
            <div
              v-for="item in partnier.partniers"
              :key="item"
              class="cardtnier_cards-item"   
            >
              <app-partnier-card 
                :partnier-url="item.url"
                :partnier-img="item.logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partniers_header { justify-content: center; }

.partniers_content {
  display: flex;
  flex-direction: column;
  align-items: center;

  .partniers_content-section { width: 100%; }

  .partniers_content-section {

    &:not(:last-child) { margin-bottom: 60px; }

    .partnier-title {
      font-size: 28px;
      line-height: 130%;
      color: $color-text-dark;
      margin-bottom: 30px;
      text-align: center;
    }

    .partnier_cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 -12px;
      row-gap: 24px;

      .cardtnier_cards-item {
        flex: 0 0 16.66666667%;
        max-width: 16.66666667%;
        padding-left: 12px;
        padding-right: 12px;
      }
    }
  }
}

@media (max-width:1200px) {
  .partniers_content {
    .partniers_content-section {
      .partnier_cards {
        .cardtnier_cards-item {
          flex: 0 0 33.33333333%;
          max-width: 33.33333333%;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .partniers_content {
    .partniers_content-section {
      .partnier_cards {
        .cardtnier_cards-item {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .partniers_content {
    .partniers_content-section {
      .partnier_cards {
        .cardtnier_cards-item {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
