<script setup lang="ts">
import {RouterView } from "vue-router";
import Layout from "./components/layout/Layout.vue";
import Header from "./components/layout/layout-partials/Header.vue";
import Footer from "./components/layout/layout-partials/Footer.vue";

</script>

<template>
  
  <Layout>

    <template #header>
      <Header />
    </template>

    <template #content>
      <Suspense :timeout="1000">
        <template #fallback> Loading... </template>
        <RouterView #default="{ Component }">
          <component :is="Component" />
        </RouterView>
      </Suspense>
    </template>

    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>

<style scoped></style>
