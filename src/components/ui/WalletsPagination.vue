<script setup lang="ts">
import type { PaginatedData } from "@/composables/usePagination";
import type { Wallets } from "@/types/wallet-entities-type";
import { ref } from "vue";

const props = defineProps<{
  paginatedData: PaginatedData<Wallets>;
  currentPage: number;
  pageSize: number[];
}>();

const emit = defineEmits<{
  (e: "chengePageSize", number: number): void;
  (e: "goToPage", number: number): void;
}>();

const __pageSizes = ref<number[]>(props.pageSize);
const selectedPageSize = ref<number>(props.pageSize[0]);

function onChangePageSize(e: Event) {
  selectedPageSize.value = +(e.target as HTMLSelectElement).value;
  emit("chengePageSize", selectedPageSize.value);
}

defineExpose({
  selectedPageSize,
});
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center pb-3">
      <div class="pagination flex items-center gap-2">
        <p>View</p>
        <select @change="onChangePageSize($event)">
          <option v-for="page in __pageSizes" :key="page" :value="page">
            {{ page }}
          </option>
        </select>

        <p>per page</p>
      </div>

      <p>Showing {{ paginatedData.items.length }} of {{ paginatedData.totalPages }}</p>

      <div v-if="paginatedData.totalPages" class="pagination flex items-baseline gap-2">
        <button
          @click="$emit('goToPage', props.currentPage - 1)"
          :disabled="props.currentPage === 1"
          class="pagination__button"
        >
          <img src="/paginator.svg" alt="">
        </button>
        <template v-for="page in props.paginatedData.totalPages" :key="page">
          <button
            @click="$emit('goToPage', page)"
            :class="{ 'pagination__button--active': page === props.currentPage }"
            class="pagination__button"
          >
            {{ page }}
          </button>
        </template>
        <button
          v-if="props.paginatedData.totalPages > 5"
          @click="$emit('goToPage', props.currentPage + 1)"
          :disabled="props.currentPage === props.paginatedData.totalPages"
          class="pagination__button"
        >
          <img src="/paginator-right.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  color: var(--fourth-color);
}

button {
  color: var(--fourth-color);
}

.pagination__button--active {
  color: var(--color-primary);
}
select {
  border: 1px solid var(--third-color);
  padding: 5px 10px;
  width: 65px;
  outline: none;
  border-radius: 5px;
  color: var(--fourth-color);
}
</style>
