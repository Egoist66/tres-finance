<script setup lang="ts">
import Vector from '@/components/icons/Vector.vue';
import FilterControls from '@/components/ui/FilterControls.vue';


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
        
            <button class="flex mb-5 gap-2 items-center">
                <Vector />
                Expand all
            </button>
        </div>
    </div>
 
       
</template>



<style scoped>

button {
    color: var(--secondary-color)
}

.header {
    padding: 16px 0px;
    margin-bottom: 16px;
}

</style>