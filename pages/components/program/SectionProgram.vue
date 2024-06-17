<script setup>
import AppProgramItem from './AppProgramItem.vue'
import AppProgramTab from './AppProgramTab.vue'
import { PROGRAM_DAY_ONE, PROGRAM_DAY_TWO } from '~/utils/constants' 

const activeTab = ref('one')
const setActive = value => activeTab.value = value 
</script>

<template>
  <section class="program">
    <div class="container">
      <div class="program_tabs">
        <app-program-tab 
          @click="setActive('one')" 
          title="День 1" 
          subtitle="30.05.2024"
          :class="['tab', {active: activeTab === 'one'}]"
        ></app-program-tab>

        <app-program-tab 
          @click="setActive('two')" 
          title="День 2" 
          subtitle="31.05.2024"
          :class="['tab', {active: activeTab === 'two'}]"
        ></app-program-tab>
      </div>

      <template v-if="activeTab==='one'">
        <div
          v-for="list in PROGRAM_DAY_ONE" 
          :key="list"
          class="program_list"
        >
          <h2 class="program_list-title">{{ list.location }}</h2>
          <div class="list_wrapper">
            <template v-for="item in list.program" :key="item">
              <app-program-item 
                :time="item.time"
                :title="item.title"
                :info="item.info"
              />
            </template>
          </div>
        </div>
      </template>

      <template v-if="activeTab==='two'">
        <div
          v-for="list in PROGRAM_DAY_TWO" 
          :key="list"
          class="program_list"
        >
          <h2 class="program_list-title">{{ list.location }}</h2>
          <div class="list_wrapper">
            <template v-for="item in list.program" :key="item">
              <app-program-item 
                :time="item.time"
                :title="item.title"
                :info="item.info"
              />
            </template>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.program { 
  padding:  60px 0 130px 0;
  min-height: calc(100vh - 600px);
}

.program_tabs {
  display: flex;
  gap: 32px;
  margin-bottom: 40px;

  .tab.active {
    border: 2px solid $color-bg-light-green;
  }
}

.program_list {
  margin-bottom: 40px;

  .program_list-title {
    font-size: 32px;
    margin-bottom: 16px;
    color: $color-text-dark;
  }

  .list_wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .program_tabs {
    flex-wrap: wrap;

    .tab {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>
