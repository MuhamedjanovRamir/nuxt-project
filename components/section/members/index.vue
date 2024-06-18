<script setup>
  const tabTitles = [
    'Участники форума',
    'Приглашенные компании',
    'Спикеры и гости форума'
  ]

  const activeTab = ref('Участники форума')
  const setActive = value => activeTab.value = value
</script>

<template>
  <section class="members">
    <div class="container">
      <div class="members_tabs">
        <BaseTab 
          v-for="tab in tabTitles" 
          :key="tab" 
          :subtitle="tab"
          @click="setActive(tab)"
          :class="['tab', {active: activeTab === tab}]"
        >
          <span>{{ tab }}</span>
        </BaseTab>
      </div>

      <div class="members_content">
        <h2 class="title">Участники форума</h2>
        
        <div class="list">
          <template v-if="activeTab === 'Участники форума'">
            <div v-for="item in MEMBERS_CARDS" :key="item" class="list_item-member">
              <CardMember
                :link-url="item.url"
                :image-url="item.imgUrl"
                :content-text="item.text"
              />
            </div>
          </template>

          <template v-if="activeTab === 'Приглашенные компании'">
            <div v-for="item in COMPANIES" :key="item" class="list_item-partniers">
              <CardPartnier
                :partnier-url="item.url"
                :partnier-img="item.logo"
              />
            </div>
          </template>

          <template v-if="activeTab === 'Спикеры и гости форума'">
            <div v-for="item in SPEAKERS_CARDS" :key="item" class="list_item-speakers">
              <CardSpeaker
                :speaker-image="item.imgUrl"
                :speaker-name="item.name"
                :speaker-position="item.position"
                :speaker-info="item.text"
                border
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.members {
  min-height: calc(100vh - 600px);
  padding: 60px 0 130px;

  .members_tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 40px;

    .tab {
      span {
        font-family: $font-family-bold;
        color: $color-text-gray;
        font-size: 22px;
        line-height: 150%;
      }

      &.active {
        border: 2px solid #06b48b;

        span {
          color: #06b48b;
        }
      }
    } 
  }
}

.members_content .title {
  color: $color-text-dark;
  font-size: 48px;
  line-height: 130%;
  margin-bottom: 40px;
}

.list {
  display: flex;
  margin: 0 -12px;
  flex-wrap: wrap;
  row-gap: 24px;

  .list_item-member {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 12px;
  }

  .list_item-partniers {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
    padding: 0 12px;
  }

  .list_item-speakers {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 12px;
  }
}

@media (max-width: 1200px) {
  .list {
    .list_item-member {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }

    .list_item-partniers {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .list_item-speakers {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }
  }
}

@media (max-width: 992px) {
  .list {
    .list_item-member {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .list_item-partniers {
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    }

    .list_item-speakers {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
}

@media (max-width: 768px) {
  .members_content .title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .members_tabs {
    .tab {
      flex: 0 0 100%;
      width: 100%;
    }
  }
  .list {
    .list_item-member {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .list_item-partniers {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .list_item-speakers {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>
