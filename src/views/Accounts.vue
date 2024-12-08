<script setup lang="ts">
import Wallets from '@/components/ui/Wallets.vue';
import { Statuses } from '@/composables/common/useStatuses';
import { useWallets } from '@/composables/useWallets';
import { useWalletsStore } from '@/stores/wallets.store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';



const {fetchWallets, statuses} = useWallets()
const {wallets} = storeToRefs(useWalletsStore())


onMounted( async () => {
  await fetchWallets()
})


</script>

<template>
  
    <h3 class="text-center" v-if="statuses === Statuses.LOADING">Loading...</h3>
    <Wallets v-else :wallets="wallets" />

</template>
