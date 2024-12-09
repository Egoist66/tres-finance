import { delay } from "@/utils/delay"
import { Statuses, useStatuses } from "./common/useStatuses"
import axios from "axios"
import type { Wallets } from "@/types/wallet-entities-type"
import { useWalletsStore } from "@/stores/wallets.store"
import { WalletsAPIService } from "@/service/wallets-api"

/**
 * A hook for fetching wallets.
 *
 * @return {{fetchWallets: () => Promise<void>, statuses: Ref<Statuses>}} An object containing a function to fetch wallets and a ref to the current status.
 */
export const useWallets = () => {

    const {setLoading, setStatus, setError, setSuccess, statuses} = useStatuses()
    const {setWallets} = useWalletsStore()

    const fetchWallets = async () => {

        setStatus(Statuses.IDLE)
        try {
            setLoading()
            await delay(500)

            const wallets = await WalletsAPIService.getWallets()
            if(wallets.length){
                setWallets(wallets)
                setSuccess()
            }
        }
        catch (e) {
            setError(e)
        }
    }

    return {
        fetchWallets,
        statuses
    }
}