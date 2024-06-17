<script setup>
defineProps({
  tableData: Object
})
</script>

<template>
  <table class="table">
    <thead>
      <tr class="table_header">
        <th></th>
        <th><h4 class="table_header-title">{{ tableData.location }}</h4></th>
      </tr>
    </thead>

    <tbody class="table_body">
      <tr v-for="item in tableData.program" :key="item" class="table_item">
        <td><div class="time"><span>{{ item.time }}</span></div></td>

        <td>
          <h5 class="title">{{ item.title }}</h5>
          <p v-if="item.info" class="info">{{ item.info }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.table {
  margin-bottom: 32px;
  border-collapse: collapse;

  .table_header {

    .table_header-title {
      font-size: 28px;
      line-height: 150%;
      color: $color-text-primary;
      margin-bottom: 14px;
    }

    th:first-child { padding-right: 12px; }
    th:last-child { padding-left: 12px; display: flex; }
  }

  .table_body {
    tr > td { padding: 0 12px; }
    tr > td:first-child { 
      display: flex; 
      padding: 0 12px; 
      width: max-content;
    }

    .time {
      font-size: 22px;
      color: $color-text-primary;
    }

    .title {
      font-size: 22px;
      line-height: 150%;
      color: $color-text-primary;
      margin-bottom: 11px;
    }

    .info {
      font-size: 22px;
      color: $color-text-primary;
      opacity: $opacity-text;
      margin-bottom: 22px;
    }
  }
}
</style>