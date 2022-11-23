<template>
  <div class="p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-12">
    <div class="" v-for="country in countries" :key="country.name">
      <Card :country="country" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import Card from "../Card/Card.vue";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const countries = computed(() => {
      return store.getters.topCountriesPerPob;
    });
    onMounted(async () => {
      await store.dispatch("getCountries");
      store.dispatch("filtrarRegion", "Americas");
    });
    return { countries };
  },
};
</script>

