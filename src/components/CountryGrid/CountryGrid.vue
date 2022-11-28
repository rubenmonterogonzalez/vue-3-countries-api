<template>
  <div
    class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
  >
    <div v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect} from "@vue/runtime-core";
import { useStore } from "vuex";
import Card from "../Card/Card.vue";

const store = useStore();
const paises = computed(() => {
  return store.getters.topPaisesPerPob;
});

watchEffect(async () => {
  await store.dispatch("getPaises");
  store.dispatch("filtrarRegion", "All");
});
</script>

