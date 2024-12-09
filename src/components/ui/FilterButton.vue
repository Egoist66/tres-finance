<script setup lang="ts">
import { ref } from "vue";

const { isActive = false } = defineProps<{
  isActive?: boolean;
  name?: string;
}>();

</script>

<template>
  <button  :class="{ 'filter__button--active': isActive }" class="filter__button">
    <slot name="default"></slot>
  </button>
</template>

<style scoped>
.filter__button {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
  column-gap: 4px;
  padding: 5.5px 8px;
  border: 1px solid rgb(210, 211, 215);
  border-radius: 100px;
  background: transparent;
  color: rgb(31, 31, 31);
  font-size: 14px;
  line-height: 21px;
}



.filter__button--active {
  background-color: #D2D3D7;
}
</style>
