import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Wallets } from '@/types/wallet-entities-type'

/**
 * Pinia store for wallets
 *
 * @remarks
 * This store is used to manage wallets data. It contains a single state property `wallets` which is an array of `Wallets` type.
 * The store also exposes a single action `setWallets` which is used to set the `wallets` state.
 * The store uses the `defineStore` function from `pinia` to define the store and the `ref` function from `vue` to create a reactive reference to the `wallets` state.
 *
 * @packageDocumentation
 */

export const useWalletsStore = defineStore('wallets', () => {
  const wallets = ref<Wallets>([])


  const setWallets = (data: Wallets) => {
    wallets.value = data
  }

  return { wallets, setWallets }
})
