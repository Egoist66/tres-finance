<script setup lang="ts">
import type { Asset } from "@/types/wallet-entities-type";
import WalletHeadInfo from "../icons/WalletHeadInfo.vue";
import Solana from "../icons/Solana.vue";
import NetWorks from "../icons/NetWorks.vue";

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
  <div class="wallet bg-white p-4 mb-2 rounded">
    <div class="wallet__head mb-4">
      <div class="wallet__head-info pb-4">
        <div class="flex justify-between flex-wrap pb-4 items-center">
          <div class="wallet__head-wrapper-text">
            <div class="flex gap-2">
              <WalletHeadInfo />
              <h4 class="wallet__title">{{ walletName }}</h4>
            </div>

            <div>
              <p class="wallet__hash">
                <span :style="{ paddingRight: '5px' }">#</span>{{ walletIdentifier }}
              </p>
            </div>
          </div>

          <div>
            <h4>{{ formatCurrency(walletTotalUsdValue) }}</h4>
          </div>
        </div>
      </div>
      <div class="wallet__head-data flex gap-3 items-center">
        <p class="wallet__data">Added: {{ new Date(walletData).toLocaleString() }}</p>
        <div>
          <img src="/stick.svg" alt="stick" />
        </div>
        <p class="wallet__assets">{{ assets.length }} Assets</p>
      </div>
    </div>

    <div class="wallet__body open overflow-x-auto">
      <table class="wallet__table min-w-full border-collapse border">
        <tr class="wallet__table-header">
          <th class="text-left p-4">Asset</th>
          <th
            :style="{ borderLeft: '1px solid #DEEAFF', borderRight: '1px solid #DEEAFF' }"
            class="text-left p-4"
          >
            Network
          </th>
          <th class="text-left p-4">
            <div class="flex items-center">
              Current balance
              <div
                class="wallet__table-icon ml-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              >
                <img
                  :style="{ width: '12px', height: '12px' }"
                  src="/warn.svg"
                  alt="warn"
                />
              </div>
            </div>
          </th>
        </tr>

        <tr class="wallet__table-info" :key="asset.id" v-for="asset in assets">
          <td class="p-4">
            <div class="flex gap-2 items-center">
              <component
                :is="asset.name === 'SOLANA' ? Solana : NetWorks"
              ></component>
             
              <h4>{{ asset.name }}</h4>
            </div>
          </td>
          <td class="p-4">
            <div class="flex gap-2 items-center">
              <component
                :is="asset.asset.network === 'SOLANA' ? Solana : NetWorks"
              ></component>
             
              <h4>{{ asset.asset.network }}</h4>
            </div>
          </td>
          <td class="p-4">
            <p>
              {{ formatCurrency(+asset.assetUsdValue?.value!) }} {{ asset.asset.symbol }}
            </p>
            <p :style="{ letterSpacing: '1px', color: '#8E8F98' }" class="flex gap-1">
              <img src="/usd.svg" alt="usd" />
              {{ formatCurrency(+asset.assetAmount).replace("$", "") }} USD
            </p>
          </td>
        </tr>
        <tr class="wallet__table-info bg-[#EFF4FF]">
          <td class="p-4">
            <div class="flex items-center gap-2">
              <h5>{{ assets.length }} assets</h5>
              <button
                class="wallet__table-icon ml-2 summary bg-[#DEEAFF] transition duration-150 ease-in-out"
              >
                Summary
              </button>
            </div>
          </td>
          <td class="p-4"></td>
          <td class="p-4">
            <div class="flex items-center gap-1">
              <img src="/black-usd.svg" alt="black-usd" />
              <h3>
                {{ formatCurrency(walletTotalUsdValue) }}
              </h3>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.wallet__head-info > div {
  border-bottom: 1px solid var(--third-color);
}
.wallet__assets {
  background-color: #f0f1f5;
  padding: 4px 8px;
  border-radius: 5px;
}

p {
  word-break: break-all;
}

.wallet__table-info {
  border-bottom: 1px solid var(--third-color);
}

th {
  text-transform: uppercase;
  color: var(--fourth-color);
  font-weight: 400;
  font-size: 12px;
}

h3 {
  font-weight: 700;
}

td {
  border-right: 1px solid var(--third-color);
}

.wallet__table-header {
  border-bottom: 1px solid var(--third-color);
}
.wallet__hash {
  color: var(--fourth-color);
}
button {
  margin: 0px;
}
button.summary {
  padding: 5px;
  border-radius: 4px;
  font-weight: 400;
}

table {
  border-color: var(--third-color);
}
</style>
