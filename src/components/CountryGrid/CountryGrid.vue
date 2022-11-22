<template>
  <div class="row">
    <div class="col-12" v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import Card from "../Card/Card.vue";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const paises = computed(() => {
      return store.getters.topPaisesPerPob;
    });
    onMounted(async () => {
      await store.dispatch("getPaises");
      store.dispatch("filtrarRegion", "Americas");
    });
    return { paises };
  },
};
</script>
