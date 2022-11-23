import { createStore } from "vuex";

export default createStore({
  state: {
    countries: [],
    countriesFiltrados: [],
  },

  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setCountriesFiltrados(state, payload) {
      state.countriesFiltrados = payload;
    },
  },

  actions: {
    async getCountries({ commit }) {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        commit("setCountries", data);
      } catch (error) {
        console.log(error);
      }
    },

    filtrarRegion({ commit, state }, region) {
      const filtro = state.countries.filter((country) => {
        if (country.region == region) {
          return (newcountry) => {
            country[newcountry].toString().toLowerCase();
          };
        } else if (region == "All") {
          return (newcountry) => {
            country[newcountry].toString().toLowerCase();
          };
        }
      });

      commit("setCountriesFiltrados", filtro);
    },

    filtrarNombre({ commit, state }, search) {
      const textoCliente = search.toLowerCase();
      const filtro = state.countries.filter((country) => {
        const textoApi = country.name.common.toLowerCase();
        if (textoApi.includes(textoCliente)) {
          console.log(textoApi);
          return country;
        }
      });
      commit("setCountriesFiltrados", filtro);
    },
  },

  getters: {
    topCountriesPerPob(state) {
      return state.countriesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1;
      });
    },
  },

  modules: {},
});

