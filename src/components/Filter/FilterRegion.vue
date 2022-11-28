<template>
  <select
    class="w-28 shadow-md h-10 mb-14 bg-white rounded-sm pl-2"
    v-model="selected"
  >
    <option value="All" disabled>All</option>
    <option value="Americas">America</option>
    <option value="Europe">Europe</option>
    <option value="Africa">Africa</option>
    <option value="Asia">Asia</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { watchEffect } from "vue";

const store = useStore();
const selected = ref("All");

watchEffect(() => {
  return store.dispatch("filtrarRegion", selected.value);
});
</script>



