export type Wallets = Wallet[]

export interface Wallet {
  id: string
  identifier: string
  name: string
  createdAt: string
  totalUsdValue: number
  assets: Array<Asset>
}

export interface Asset {
  id: string
  name: string
  asset: Asset2
  assetUsdValue?: AssetUsdValue
  assetAmount: number
}

export interface Asset2 {
  identifier: string
  network: string
  symbol: string
}

export interface AssetUsdValue {
  value: number
}
