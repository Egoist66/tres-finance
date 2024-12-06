<script setup lang="ts">
import FilterControls from '@/components/ui/FilterControls.vue';


</script>


<template>
    <header class="header border-b border-b-[#DEEAFF]">
       <div class="container">
            <h1 class="">Accounts</h1>
       </div>

    </header>

    <div class="container">
        <FilterControls />
    </div>
</template>



<style scoped>

.header {
    padding: 16px 0px;
    margin-bottom: 16px;
}

</style>