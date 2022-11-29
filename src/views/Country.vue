<template>
  <div class="px-[4%] container m-auto flex flex-col" v-if="error">
    {{ error }}
  </div>

  <div v-else-if="pais">
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
      <p class="">
        <strong>Capital: </strong>{{ pais.capital?.[0] || pais.name.common }}
      </p>
      <p class=""><strong>Region: </strong>{{ pais.region }}</p>
    </div>
  </div>
  <div class="" v-else>
    <Spinner />
    <h1 class="flex justify-center text-lg font-bold">Loading...</h1>
  </div>
</template>

<script setup>
import Spinner from "../components/Spinner/Spinner.vue";
import { watchEffect} from "@vue/runtime-core";
import { usePaisStore } from "../stores/pais";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = usePaisStore();

const { pais } = storeToRefs(store);
const { error } = storeToRefs(store);

watchEffect(async () => {
  await store.getPais(route.params.id);
});
</script>
