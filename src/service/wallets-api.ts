import axios from 'axios';
import {type Wallets } from '../types/wallet-entities-type';


/**
 * A service for handling API requests related to wallets.
 */
export class WalletsAPIService {
    static async getWallets(): Promise<Wallets> {
        const {data} = await axios.get<Wallets>('https://e58d858f90f2c9de.mokky.dev/wallets')
        return data

    }
}