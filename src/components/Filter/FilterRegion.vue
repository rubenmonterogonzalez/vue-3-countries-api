<template>
  <select class="w-28 shadow-md h-10 mb-14 bg-white rounded-sm pl-2" v-model="selected">
    <option class="" value="All" disabled>All</option>
    <option class="" value="Americas">America</option>
    <option class="" value="Europe">Europe</option>
    <option class="" value="Africa">Africa</option>
    <option class="" value="Asia">Asia</option>
    <option class="" value="Oceania">Oceania</option>
  </select>
  <p>
    Selected region : {{ selected }}
  </p>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const selected = ref("All");
    const filtro = () => {
      return store.dispatch("filtrarRegion", selected.value);
    };

    console.log(selected.value)

    return { filtro, selected };
  },
};
</script>



