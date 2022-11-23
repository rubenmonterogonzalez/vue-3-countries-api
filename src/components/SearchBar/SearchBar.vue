<template>
  <input type="text" class="w-52 md:w-96 shadow-md h-10 mb-14 bg-white rounded-sm pl-2" placeholder="Search for a country..."
    v-model="search" @keyup="searchInput" />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const search = ref("");
    const searchInput = () => {
      return store.dispatch("filtrarNombre", search.value);
    };
    return { search, searchInput };
  },
};
</script>
