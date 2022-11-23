<script>
import Header from "../components/Navbar/Header.vue";
import SearchBar from "../components/SearchBar/SearchBar.vue";
import CountryGrid from "../components/CountryGrid/CountryGrid.vue";
import FilterRegion from "../components/Filter/FilterRegion.vue";
export default {
  name: "Home",
  components: {
    FilterRegion,
    SearchBar,
    CountryGrid,
    Header,
  },
};
</script>

<template>
  <Header />
  <main class="mx-auto my-10 container">
    <section>
      <div class="flex p-12 justify-between">
        <SearchBar />
        <FilterRegion />
      </div>
    </section>
    <section>
      <CountryGrid />
    </section>
  </main>
</template>
