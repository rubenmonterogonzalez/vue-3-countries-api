import { defineStore } from "pinia";

export const usePaisesStore = defineStore("paises", {
  state: () => {
    return {
      paises: [],
    };
  },
  actions: {
    async getPaises() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        this.paises = data;
      } catch (error) {
        console.log(error);
      }
    },

    filtrarRegion(region) {
      const filtro = this.paises.filter((pais) => {
        if (pais.region == region) {
          return pais.region.includes(region);
        } else if (region == "All") {
          return pais;
        }
      });
      this.paises = filtro;
    },

    filtrarNombre(texto) {
      const textoCliente = texto.toLowerCase();
      const filtro = this.paises.filter((pais) => {
        const textoApi = pais.name.common.toLowerCase();
        if (textoApi.includes(textoCliente)) {
          return pais;
        }
      });
      this.paises = filtro;
    },

    topPaisesPerPob() {
      return this.paises.sort((a, b) => {
        return a.population < b.population ? 1 : -1;
      });
    },
  },
});
