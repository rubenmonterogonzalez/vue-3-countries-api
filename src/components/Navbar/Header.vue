<script>
import { RouterLink } from "vue-router";
import  MoonIcon  from "@heroicons/vue/24/solid/MoonIcon";

export default {
  name: "Header",
  components: {
    MoonIcon,
  }, 
};
</script>

<template>
  <header>
    <nav
      class="flex justify-between bg-white h-20 py-0 px-6 shadow-md relative"
    >
      <RouterLink
        to="/"
        class="flex items-center no-underline text-[#242424] text-2xl sm:text-3xl font-semibold"
        >Where in the world?</RouterLink
      >
      <div class="h-20 w-20 flex cursor-pointer">
        <MoonIcon class="h-5 text-red-400 m-auto" />
      </div>
    </nav>
  </header>
</template>


