<template>
  <div class="px-[4%] container m-auto flex flex-col" v-if="error">
    {{ error }}
  </div>
  <div
    class="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
    v-else-if="paises.length > 0"
  >
    <div v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>

  <div class="" v-else>
    <Spinner />
    <h1 class="flex justify-center text-lg font-bold">Loading...</h1>
  </div>
</template>

<script setup>
import { computed, watchEffect } from "@vue/runtime-core";
import { usePaisesStore } from "../../stores/paises";
import Spinner from "../Spinner/Spinner.vue";
import Card from "../Card/Card.vue";
import { storeToRefs } from "pinia";

const store = usePaisesStore();
const paises = computed(() => store.topPaisesPerPob());

const { error } = storeToRefs(store);

watchEffect(async () => {
  await store.getPaises();
  store.filtrarRegion("All");
});
</script>
