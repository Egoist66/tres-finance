<script setup lang="ts">

import Header from './layout-partials/Header.vue';
import Footer from './layout-partials/Footer.vue';
</script>



<template>
    <div id="app-layout">

        <Header />

            <slot name="content" />

        <Footer />
        

    </div>
</template>



<style scoped>

</style>