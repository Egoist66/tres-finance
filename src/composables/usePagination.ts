import type { Wallets } from "@/types/wallet-entities-type";
import { ref, computed } from "vue";

// types.ts
export interface PaginatedData<T> {
    items: T;
    currentPage: number;
    totalPages: number;
    pageSize: number;
}



/**
 * A composable that helps with pagination of an array of data.
 *
 * Usage:
 * const { currentPage, pageSize, goToPage, paginate } = usePagination();
 *
 * const paginatedData = paginate(data, currentPage.value, pageSize.value);
 *
 * @returns an object with the following properties:
 *   - `currentPage`: A ref to the current page number.
 *   - `pageSize`: A ref to the page size.
 *   - `goToPage`: A function that takes a page number and paginated data and changes the current page.
 *   - `paginate`: A function that takes an array of data, current page number, and page size and returns an object with the following properties:
 *     - `items`: The currently displayed items.
 *     - `currentPage`: The current page number.
 *     - `totalPages`: The total number of pages.
 *     - `pageSize`: The page size.
 */
export const usePagination = () => {

    const pageSize = ref<number>(3)
    const currentPage = ref<number>(1);


    const paginate = <T>(data: T[], currentPage: number, pageSize: number):PaginatedData<T> => {
        const totalItems = computed(() => data.length);
        const totalPages = Math.ceil(totalItems.value / pageSize);

        const items = ref<any>([]);

    
  
        const page = Math.max(1, Math.min(currentPage, totalPages));
        
        const start = computed(() => (page - 1) * pageSize)
        const end = start.value + pageSize;
        
        items.value = data.slice(start.value, end) as T[];
    
        return {
            items: items.value,
            currentPage: page,
            totalPages,
            pageSize
        }
       

    }

    const  goToPage = (page: number, paginatedData: any) => {
        if (page < 1 || page > paginatedData.value?.totalPages) return;
        currentPage.value = page;
    }

    return {
       
        currentPage,
        pageSize,
        goToPage,
        paginate
    }
}