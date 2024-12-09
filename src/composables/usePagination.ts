import type { Wallets } from "@/types/wallet-entities-type";
import { ref, computed } from "vue";

// types.ts
export interface PaginatedData<T> {
    items: T;
    currentPage: number;
    totalPages: number;
    pageSize: number;
}



export const usePagination = () => {

    const pageSize = 3; // Количество элементов на странице
    const currentPage = ref(1);

    const items = ref<any>([]);

    const paginate = <T>(data: T[], currentPage: number, pageSize: number):PaginatedData<T> => {
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / pageSize);
    
        // Ограничиваем текущую страницу
        const page = Math.max(1, Math.min(currentPage, totalPages));
        
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        
        items.value = data.slice(start, end) as T[];
    
        return {
            items: items.value,
            currentPage: page,
            totalPages,
            pageSize
        }
       

    }

    const  goToPage = (page: number, paginatedData: any) => {
        if (page < 1 || page > paginatedData.value.totalPages) return;
        currentPage.value = page;
    }

    return {
        items,
        currentPage,
        pageSize,
        goToPage,
        paginate
    }
}