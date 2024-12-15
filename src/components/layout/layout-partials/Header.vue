<script setup lang="ts">
import Vector from '@/components/icons/Vector.vue';
import FilterControls from '@/components/ui/FilterControls.vue';
import { useAppStore } from '@/stores/app.store';

const appStore = useAppStore()


</script>


<template>
    <header class="header border-b border-b-[#DEEAFF]">
       <div class="container">
            <h1 class="">Accounts</h1>
       </div>

    </header>
    <FilterControls />


    <div class="container">
        <div class="mb-5">
        
            <button @click="appStore.toggleExpandedAll()" class="flex mb-5 gap-2 items-center">
                <Vector :class="[{ isExpandedAll: appStore.isExpandedAll }, 'vector']" />
                Expand all
            </button>
        </div>
    </div>
 
       
</template>



<style scoped>

.vector {
    transition: all 0.3s ease-in-out;
}
.isExpandedAll {
    transform: rotate(90deg);
    transition: all 0.3s ease-in-out;
  }

button {
    color: var(--secondary-color)
}

.header {
    padding: 16px 0px;
    margin-bottom: 16px;
}

</style>