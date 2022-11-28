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
import { useStore } from "vuex";

const store = useStore();
const texto = ref("");
const buscarInput = () => {
  return store.dispatch("filtrarNombre", texto.value);
};
</script>
