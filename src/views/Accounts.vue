<script setup lang="ts">
import Wallets from "@/components/ui/Wallets.vue";
import WalletsPagination from "@/components/ui/WalletsPagination.vue";
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

const paginatedData = computed<PaginatedData<WalletsType>>(() => paginate(wallets.value, currentPage.value, pageSize.value));
</script>

<template>
  <h3 class="text-center" v-if="statuses === Statuses.LOADING">Loading...</h3>
  <Wallets v-else :wallets="paginatedData.items" />
  <WalletsPagination
    :paginated-data="paginatedData"
    :current-page="currentPage"
    @goToPage="goToPage"
  />
</template>

<style scoped>

</style>
