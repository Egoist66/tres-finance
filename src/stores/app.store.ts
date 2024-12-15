import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {

    const isExpandedAll = ref<boolean>(false)

    const toggleExpandedAll = () => isExpandedAll.value = !isExpandedAll.value

    return {
        isExpandedAll,
        toggleExpandedAll
    }
})