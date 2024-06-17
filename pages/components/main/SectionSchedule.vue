<script setup>
import TheScheduleTable from './TheScheduleTable.vue'
import { PROGRAM_DAY_ONE, PROGRAM_DAY_TWO } from '~/utils/constants'

const activeTab = ref('one')
const setActive = value => activeTab.value = value;
</script>

<template>
  <app-waves wave-color="#059a77"></app-waves>
  <section class="section schedule">
    <div class="container">

      <app-section-header title="Программа форума" text-color="#ffff" class="schedule_header"></app-section-header>
      <div class="schedule_subtitle">Финальная версия программы форума будет доступна в ближайшее время</div>

      <div class="schedule_content">
        <div class="schedule_tabs">
          <div class="border"></div>
          <div class="buttons">
            <app-button 
              :class="['button', { active:  activeTab === 'one' }]" 
              button-type="outline"
              @click="setActive('one')"
            >
              <span class="button_text">День 1</span>
            </app-button>

            <app-button 
              :class="['button', { active:  activeTab === 'two' }]" 
              button-type="outline"
              @click="setActive('two')"
            >
              <span class="button_text">День 2</span>
            </app-button>
          </div>
          <div class="border"></div>
        </div>

        <div v-show="activeTab === 'one'" class="schedule_content-wrapper">
          <div
            v-for="program in PROGRAM_DAY_ONE"
            :key="program"
            class="schedule_content-table"
          >
            <the-schedule-table class="table" :table-data="program"></the-schedule-table>
            <div class="item">
              <h3 class="item_title">{{ program.location }}</h3>
              <div v-for="item in program.program" :key="item" class="item_program">
                <span class="time">{{ item.time }}</span>
                <h5 class="title">{{ item.title }}</h5>
                <p v-if="item.info" class="info">{{ item.info }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'two'" class="schedule_content-wrapper">
          <div 
            v-for="program in PROGRAM_DAY_TWO" 
            :key="program"
            class="schedule_content-table"
          >
            <the-schedule-table class="table" :table-data="program"></the-schedule-table>
            <div class="item">
              <h3 class="item_title">{{ program.location }}</h3>
              <div v-for="item in program.program" :key="item" class="item_program">
                <span class="time">{{ item.time }}</span>
                <h5 class="title">{{ item.title }}</h5>
                <p v-if="item.info" class="info">{{ item.info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.schedule {
  background: #059a77;

  .schedule_header { justify-content: center; }

  .schedule_subtitle {
    text-align: center;
    color: $color-text-primary;
    text-align: center;
    opacity: $opacity-text;
    margin-bottom: 32px;
  }
}

.schedule_content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .schedule_content-table {
    display: block;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;

    .item {
      display: none;
    }
  }
}

.schedule_tabs {
  display: flex;
  align-items: center;

  .border {
    flex-grow: 1;
    height: 1px;
    border-top: 1px dashed hsla(0, 0%, 100%, .4);
  }

  .buttons {
    display: flex;
    gap: 8px;
    padding: 0 8px;

    .button {
      border: 1px solid;
      border-color: hsla(0, 0%, 100%, .4);

      .button_text {
        color: $color-text-primary;
      }

      &.active {
        background: $color-bg-light-green;
        border-color: $color-bg-light-green;
      }
    }
  }
}

@media (max-width: 1200px) {
  .schedule_content-wrapper {

    .schedule_content-table {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}

@media (max-width: 769px) {
  .schedule_content-wrapper {

    .schedule_content-table .table {
      display: none;
    }

    .schedule_content-table {
      .item {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .item_title {
          font-size: 28px;
          color: $color-text-primary;
          text-align: center;
          line-height: 150%;
          margin-bottom: 14px;
        }

        .item_program {
          .time {
            font-size: 22px;
            color: $color-text-primary;
            line-height: 150%;
          }

          .title {
            font-size: 22px;
            line-height: 150%;
            color: $color-text-primary;
            margin-bottom: 11px;
          }

          .info {
            font-size: 22px;
            line-height: 150%;
            opacity: $opacity-text;
            color: $color-text-primary;
            margin-bottom: 22px;
          }
        }
      }
    }
  }
}
</style>
