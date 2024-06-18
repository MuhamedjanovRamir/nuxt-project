<script setup>
import { MEMBERS_CARDS } from '~/utils/constants'
</script>


<template>
  <section class="section members">
    <div class="container">
      
      <app-section-header title="Участники Форума" text-color="#1c2f3f" class="members_header">
        <app-button button-type="outline" text-color="#1c2f3f" class="members_header-button">
          <span class="button_text">Смотреть все</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            style="width: 16px; height: 16px; flex: 0 0 16px; fill: transparent; stroke: transparent;"
          >
            <path fill="#06B48B" d="M12.172 7 6.808 1.636 8.222.222 16 8l-7.778 7.778-1.414-1.414L12.172 9H0V7z"></path>
          </svg>
        </app-button>
      </app-section-header>

      <div class="members_content">
        <article v-for="card in MEMBERS_CARDS" :key="card" 
          class="members_content-card"
        >
          <app-member-card
            :link-url="card.url"
            :image-url="card.imgUrl"
            :content-text="card.text"
            class="item"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.members { padding: 280px 0 160px 0; }

.members_header {
  justify-content: space-between;
  align-items: center;

  .members_header-button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.members_content {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  row-gap: 24px;

  .members_content-card {
    padding: 0 12px;
    flex: 0 0 25%;
    min-height: 100%;

    .item {
      height: 100%;
    }
  }
}

@media (max-width: 1200px) {
  .members_content {
    .members_content-card {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
}

@media (max-width: 992px) {
  .members { padding: 80px 0; }
}

@media (max-width: 768px) {
  .members { padding: 40px 0; }

  .members_header {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 32px;
  }

  .members_content {
    .members_content-card {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>
