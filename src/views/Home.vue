<script setup>
import SearchBar from "../components/SearchBar/SearchBar.vue";
import CountryGrid from "../components/CountryGrid/CountryGrid.vue";
import FilterRegion from "../components/Filter/FilterRegion.vue";

</script>

<template>
  <main class="mx-auto my-10 container">
    <section class="">
      <div class="flex p-4 justify-between">
        <SearchBar />
        <FilterRegion />
      </div>
    </section>
    <section>
      <CountryGrid />
    </section>
  </main>
</template>
