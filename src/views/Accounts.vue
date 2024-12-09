<script setup lang="ts">
import Wallets from "@/components/ui/Wallets.vue";
import { Statuses } from "@/composables/common/useStatuses";
import { usePagination, type PaginatedData } from "@/composables/usePagination";
import { useWallets } from "@/composables/useWallets";
import { useWalletsStore } from "@/stores/wallets.store";
import type { Wallets as WalletsType } from "@/types/wallet-entities-type";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const { fetchWallets, statuses } = useWallets();
const { wallets } = storeToRefs(useWalletsStore());

const {paginate, goToPage, currentPage, pageSize} = usePagination()



onMounted(async () => {
  await fetchWallets();
});



//@ts-ignore

const paginatedData = computed<PaginatedData<WalletsType>>(() => paginate(wallets.value, currentPage.value, pageSize));
</script>

<template>
  <h3 class="text-center" v-if="statuses === Statuses.LOADING">Loading...</h3>
  <Wallets v-else :wallets="paginatedData.items" />

  <div class="container">
    <div class="pagination flex items-center gap-2 pb-3">
      <div>
        <p>View</p>
      </div>

      <div>
        <select
          @change="(e: Event) => goToPage(+(e.target as HTMLSelectElement).value, paginatedData)"
          v-model="currentPage"
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
  </div>
</template>


<style scoped>

  p {
    color: var(--fourth-color);
  }

  select {
    border: 1px solid var(--third-color);
    padding: 5px 10px;
    width: 53px;
    outline: none;
    border-radius: 5px;
    color: var(--fourth-color);
  }
</style>