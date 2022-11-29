<template>
  <RouterLink :to="`/country/${pais.name.common}`">
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
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["pais"]);
</script>
