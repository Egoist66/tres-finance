<script setup lang="ts">
import type { Wallets } from '@/types/wallet-entities-type';
import Wallet from './Wallet.vue';



  defineProps<{wallets: Wallets}>()


</script>



<template>
  <div class="wallets">
    <div class="container">
        <template :key="wallet.id" v-for="wallet in wallets">
            <Wallet 
              :wallet-identifier="wallet.identifier" 
              :wallet-total-usd-value="wallet.totalUsdValue" 
              :wallet-name="wallet.name" 
              :assets="wallet.assets"
              :wallet-data="wallet.createdAt"
            />
        </template>
    </div>

  </div>

</template>


<style scoped lang="scss">

    
.wallet {
    border: 1px solid rgb(222, 234, 255);
    border-radius: 4px;
  }
  .wallet__head {
    padding: 16px;
    border-bottom: rgb(222, 234, 255);
  }
  .wallet__head-info {
    padding-bottom: 16px;
    border-bottom: 1px solid red;
    display: flex;
    align-items: center;
    -moz-column-gap: 16px;
    column-gap: 16px;
  }
  .wallet__price {
    margin-left: auto;
  } /*# sourceMappingURL=style.css.map */
  

</style>
