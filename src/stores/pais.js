import { defineStore } from "pinia";

export const usePaisStore = defineStore("pais", {
  state: () => {
    return {
      pais: [],
    }
  },
  actions: {
    async getPais(name) {
      try {
        const res = await fetch("https://restcountries.com/v3.1/name/" + name)

        const data = await res.json();
        this.pais = data[0];
      } catch (error) {
        console.log(error)
      }
    },
  },
  getters: {
    singlePais: (state) => {
      return state.pais
    },
  },
})



