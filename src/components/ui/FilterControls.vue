<script setup lang="ts">

import FilterButton from "./FilterButton.vue";
import { useFilters } from "@/composables/useFilters";

const {filters} = useFilters()
</script>

<template>
  <div class="filters">
    <div class="container">
      <template :key="filter.id" v-for="filter in filters">
        <div class="filter"
        >
          <FilterButton
            @click="filter.isActive.value = !filter.isActive.value"
            :isActive="filter.isActive?.value"
            :name="filter.name"
          >
            <component :is="filter.icon" />
          </FilterButton>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.filters {
  margin-bottom: 20px;
}

@media (max-width: 520px) {

  .filter:nth-child(1) {
    margin-bottom: 8px;
  }
  .filter:nth-child(2) {
    margin-bottom: 8px;
  }

}

.filters .container {
  display: flex;
  flex-wrap: wrap;
  -moz-column-gap: 8px;
  column-gap: 8px;
}

.filter__wrapper {
  display: none;
}
</style>
