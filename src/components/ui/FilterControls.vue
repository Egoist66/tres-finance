<script setup lang="ts">
import { ref, type Component, type Ref } from "vue";
import AssetsIdentifier from "../icons/AssetsIdentifier.vue";
import NameIdentifier from "../icons/NameIdentifier.vue";
import NetworkIdentifier from "../icons/NetworkIdentifier.vue";
import FilterButton from "./FilterButton.vue";

type FilterProps = {
  name: string;
  id: string;
  icon: Component;
  isActive: Ref<boolean>;
};


const filters: FilterProps[] = [
  {
    name: "Name/identifier",
    id: "name",
    icon: NameIdentifier,
    isActive: ref<boolean>(false),
  },
  {
    name: "Assets identifier",
    id: "assets",
    icon: AssetsIdentifier,
    isActive: ref<boolean>(false),
  },
  {
    name: "Network identifier",
    id: "network",
    icon: NetworkIdentifier,
    isActive: ref<boolean>(false),
  },
];
</script>

<template>
  <div class="filters">
    <div class="container">
      <div :key="filter.id" v-for="filter in filters" class="filter">
        <FilterButton
          @click="filter.isActive.value = !filter.isActive.value"
          :isActive="filter.isActive?.value"
          :name="filter.name"
        >
          <component :is="filter.icon" />
        </FilterButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filters {
  margin-bottom: 20px;
}
.filters .container {
  display: flex;
  -moz-column-gap: 8px;
  column-gap: 8px;
}

.filter__wrapper {
  display: none;
}
</style>
