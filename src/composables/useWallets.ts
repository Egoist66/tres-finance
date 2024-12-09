import { delay } from "@/utils/delay"
import { Statuses, useStatuses } from "./common/useStatuses"
import axios from "axios"
import type { Wallets } from "@/types/wallet-entities-type"
import { useWalletsStore } from "@/stores/wallets.store"

export const useWallets = () => {

    const {setLoading, setStatus, setError, setSuccess, statuses} = useStatuses()
    const {setWallets} = useWalletsStore()

    const fetchWallets = async () => {

        setStatus(Statuses.IDLE)
        try {
            setLoading()
            await delay(500)

            const {data} = await axios.get<Wallets>('https://e58d858f90f2c9de.mokky.dev/wallets')
        
            if(data.length){
                setWallets(data)
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