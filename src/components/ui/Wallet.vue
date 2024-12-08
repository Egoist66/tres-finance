<script setup lang="ts">
import type { Asset } from "@/types/wallet-entities-type";
import WalletHeadInfo from "../icons/WalletHeadInfo.vue";

defineProps<{
  walletName: string;
  walletIdentifier: string;
  walletTotalUsdValue: number;
  walletData: string;
  assets: Asset[];
}>();

function formatCurrency(curr: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    curr
  );
}
</script>

<template>
  <div class="wallet p-3">
    <div class="wallet__head">
      <div class="wallet__head-info">
        <WalletHeadInfo />

        <div class="flex justify-between items-center">
          <div class="wallet__head-wrapper-text">
            <h4 class="wallet__title">{{ walletName }}</h4>
            <p class="wallet__hash">{{ walletIdentifier }}</p>
          </div>

          <div>
            <h4>{{ formatCurrency(walletTotalUsdValue) }}</h4>
          </div>
        </div>
      </div>
      <div class="wallet__head-data flex gap-3 items-center">
        <p class="wallet__data">Added: {{ new Date(walletData).toLocaleString() }}</p>
        <p class="wallet__assets">{{ assets.length }} Assets</p>
      </div>
    </div>

    <div class="wallet__body open">
      <table class="wallet__table w-full border-collapse border border-gray-400">
        <tr>
          <th class="text-left p-4">Asset</th>
          <th class="text-left p-4">Network</th>
          <th class="text-left p-4">
            Current balance
            <button
              class="wallet__table-icon ml-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0 -20Zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0 -14Zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0 -6Zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0 -3Zm0 3a1 1 0 1 0 0 2 1 1 0 0 0 0 -2Zm0 2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Zm0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0 -1Z"
                ></path>
              </svg>
            </button>
          </th>
        </tr>

        <tr :key="asset.id" v-for="asset in assets">
          <td class="p-4 border-b border-gray-400">
            <!-- <div class="wallet__table-wrapper-icon">
              <svg></svg>
            </div> -->
            {{ asset.name }}
          </td>
          <td class="p-4  border-b border-gray-400">
            <!-- <div class="wallet__table-wrapper-icon">
              <svg></svg>
            </div> -->
            {{ asset.asset.network }}
          </td>
          <td class="p-4 border-b border-gray-400">
            <p>{{ formatCurrency(+asset.assetUsdValue?.value!) }}</p>
            <p>
              <button
                class="wallet__table-icon ml-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              ></button>
              {{ formatCurrency(+asset.assetAmount) }}
            </p>
          </td>
        </tr>
        <tr class="wallet__table-info">
          <td class="p-4">
            {{ assets.length }} assets
            <button
              class="wallet__table-icon ml-2 summary text-gray-500 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
            >
              Summary
            </button>
          </td>
          <td class="p-4">
            <!-- <div class="wallet__table-wrapper-icon">
              <svg></svg>
            </div> -->
          </td>
          <td class="p-4">
            <h3>
              <button
                class="wallet__table-icon ml-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              ></button>
              {{ formatCurrency(walletTotalUsdValue) }}
            </h3>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.wallet__assets {
  background-color: #f0f1f5;
  padding: 3px;
}

.summary {
  background-color: #f0f1f5;
  padding: 5px;
  border-radius: 4px;
}
</style>
