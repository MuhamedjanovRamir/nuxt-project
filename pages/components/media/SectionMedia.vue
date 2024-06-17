<script setup>
import { MEDIA_DATA } from '~/utils/constants'

const activeDateFilter = ref('15-16 Июня, 2022 года')
const activeGalleryTypeFilter = ref('Фотогалерея')

const setActiveDateFilter = value => activeDateFilter.value = value
const setActiveGalleryTypeFilter = value => activeGalleryTypeFilter.value = value

const currentDataByDate = computed(() => {
  return MEDIA_DATA.find(item => item.date === activeDateFilter.value)
})

const contentGallery = computed(() => {
  switch (activeGalleryTypeFilter.value) {
    case 'Фотогалерея':
      return currentDataByDate.value.photo
      break
    case 'Видеогалерея':
      return currentDataByDate.value.video
      break
    case 'Презентация':
      return currentDataByDate.value.presentations
      break
  }
})
</script>

<template>
  <section class="media">
    <div class="container">
      <div class="media_tabs">
        <app-button-tab
          v-for="date in MEDIA_DATA"
          :key="date"
          @click="setActiveDateFilter(date.date)"
          :class="['tab', {active: activeDateFilter === date.date}]"
        >
          <span>{{ date.date }}</span>
        </app-button-tab>
      </div>

      <div class="line"></div>

      <div class="media_tabs">
        <app-button-tab @click="setActiveGalleryTypeFilter('Фотогалерея')" :class="['tab', {active: activeGalleryTypeFilter === 'Фотогалерея'}]"><span>Фотогалерея</span></app-button-tab>
        <app-button-tab @click="setActiveGalleryTypeFilter('Видеогалерея')" :class="['tab', {active: activeGalleryTypeFilter === 'Видеогалерея'}]"><span>Видеогалерея</span></app-button-tab>
        <app-button-tab v-if="currentDataByDate.presentations" @click="setActiveGalleryTypeFilter('Презентация')" :class="['tab', {active: activeGalleryTypeFilter === 'Презентация'}]"><span>Презентация</span></app-button-tab>
      </div>

      <div class="media_content">
        <template v-if="activeGalleryTypeFilter === 'Фотогалерея'">
          <article v-for="item in contentGallery" :key="item.id" class="media_content-item">
            <app-media-card
              card-type="photo"
              :image-url="item.img"
            />
          </article>
        </template>

        <template v-else>
          <article v-for="item in contentGallery" :key="item.id" class="media_content-item">
            <a :href="item.url">
              <app-media-card 
                :image-url="item.img"
                card-type="video"
              />
            </a>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.media {
  min-height: calc(100vh - 600px);
  padding: 60px 0 130px 0;

  .line {
    width: 100%;
    height: 1px;
    margin: 40px 0;
    background: rgb(197, 212, 224);
  }

  .media_tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 40px;

    .tab {
      span {
        font-family: $font-family-bold;
        color: #465863;
        font-size: 22px;
      }
    }

    .tab.active {
      border: 2px solid #06b48b;
      span {
        color: #06b48b;
      }
    }
  }
}

.media_content {
  display: flex;
  margin: 0 -12px;
  flex-wrap: wrap;
  row-gap: 24px;

  .media_content-item {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 12px;
  }
}

@media (max-width: 1200px) {
  .media_content {
    .media_content-item {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
  }
}

@media (max-width: 992px) {
  .media_content {
    .media_content-item {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
}

@media (max-width: 768px) {
  .media_content {
    .media_content-item {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .media_tabs {
    .tab {
      flex: 0 0 100%;
      max-width: 100%;
    } 
  }
}
</style>
