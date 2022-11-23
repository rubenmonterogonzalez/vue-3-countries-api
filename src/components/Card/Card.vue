<template>
  <div class="mb-2">
    <div class="">
      <img :src="country.flags.svg" :alt="`flag-${country.name.common}`"
        class="w-50 rounded-t-md shadow-md max-h-32 object-cover w-full" />
    </div>
    <div class="shadow-md rounded-b-md p-3">
      <p class="text-2xl"><strong>{{ country.name.common }}</strong></p>
      <p><strong>Population: </strong>{{ (country.population).toLocaleString("de-DE") }}</p>
      <p class=""><strong>Capital: </strong>{{ country.capital[0] }}</p>
      <p class=""><strong>Region: </strong>{{ country.region }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
};
</script>
