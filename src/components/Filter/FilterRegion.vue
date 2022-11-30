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
import { usePaisesStore } from "../../stores/paises";
import { ref } from "vue";
import { watchEffect} from "vue";

const store = usePaisesStore();
const { filtrarRegion } = store;
const selected = ref("All");

watchEffect(() => {
  return store.filtrarRegion(selected.value);
});

</script>
