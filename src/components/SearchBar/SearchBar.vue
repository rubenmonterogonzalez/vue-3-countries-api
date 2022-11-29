<template>
  <input
    type="text"
    class="w-52 md:w-96 shadow-md h-10 mb-14 bg-white rounded-sm pl-2"
    placeholder="Search for a country..."
    v-model="texto"
    @keyup="buscarInput"
  />
</template>

<script setup>
import { ref } from "vue";
import { usePaisesStore } from "../../stores/paises";

const store = usePaisesStore();
const texto = ref("");
const buscarInput = () => {
  return store.filtrarNombre(texto.value);
};
</script>
