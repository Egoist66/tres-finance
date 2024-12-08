import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Wallets } from '@/types/wallet-entities-type'

export const useWalletsStore = defineStore('wallets', () => {
  const wallets = ref<Wallets>([])


  const setWallets = (data: Wallets) => {
    wallets.value = data
  }

  return { wallets, setWallets }
})
