<script setup lang="ts">
import type { PaginatedData } from "@/composables/usePagination";
import type { Wallets } from "@/types/wallet-entities-type";
import { ref } from "vue";

const props = defineProps<{
  paginatedData: PaginatedData<Wallets>;
  currentPage: number;
}>();


defineEmits<{
  (e: "goToPage", page: number, paginatedData: any): void;
}>();

const __curentPage = ref<number>(props.currentPage);
</script>

<template>

  
  <div class="container">
    <div class="flex justify-between items-center  pb-3">
      <div class="pagination flex items-center  gap-2">
        <div>
          <p>View</p>
        </div>
  
        <div>
          <select
            @change="(e: Event) => $emit('goToPage', __curentPage, paginatedData)"
            v-model="__curentPage"
          >
            <option v-for="page in paginatedData.totalPages" :key="page" :value="page">
              {{ page }}
            </option>
          </select>
        </div>
  
        <div>
          <p>per page</p>
        </div>
      </div>

      <p>Showing {{ paginatedData.items.length }} of {{ paginatedData.totalPages }}</p>
    </div>
  </div>
</template>

<style scoped>
p {
  color: var(--fourth-color);
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
