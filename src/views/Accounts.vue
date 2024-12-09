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

const {paginate, currentPage, pageSize} = usePagination()



onMounted(async () => {
  await fetchWallets();
});



//@ts-ignore

const paginatedData = computed<PaginatedData<WalletsType>>(() => paginate(wallets.value, currentPage.value, pageSize));

const  goToPage = (page: number) => {
    if (page < 1 || page > paginatedData.value.totalPages) return;
    currentPage.value = page;
}
</script>

<template>
  <h3 class="text-center" v-if="statuses === Statuses.LOADING">Loading...</h3>
  <Wallets v-else :wallets="paginatedData.items" />

  <div class="pagination">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ paginatedData.totalPages }}</span>
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === paginatedData.totalPages"
    >
      Next
    </button>
  </div>
</template>
