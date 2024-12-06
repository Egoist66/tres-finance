<script setup lang="ts"></script>



<template>
    <div id="app-layout">

        <slot v-if="$slots.header" name="header" />

        <main>
            <slot name="content" />
        </main>

        <slot v-if="$slots.footer" name="footer" />
        

    </div>
</template>



<style scoped>

</style>