<template>
  <div>
      <img
        :src="pais.flags.svg"
        :alt="`bandera-${pais.name.common}`"
        class="w-50 rounded-t-md shadow-md object-cover w-full h-64 md:h-48"
      />
      <div class="shadow-md rounded-b-md p-3 h-40">
        <p class="text-2xl h-16">
          <strong>{{ pais.name.common }}</strong>
        </p>
        <p>
          <strong>Population: </strong
          >{{ pais.population.toLocaleString("de-DE") }}
        </p>
        <p class=""><strong>Capital: </strong>{{ pais.capital?.[0] || pais.name.common}}</p>
        <p class=""><strong>Region: </strong>{{ pais.region }}</p>
      </div>
  </div>

</template>

<script setup>
import { watchEffect, computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const pais = computed(() => {
  return store.getters.singlePais;
});


watchEffect(async () => {
  await store.dispatch("getPais", route.params.id);
});

</script>
