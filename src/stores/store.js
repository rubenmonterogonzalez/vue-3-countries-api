import { createStore } from 'vuex'

export default createStore({
	state: {
		pais: [],
		paises: [],
		paisesFiltrados: []
	},
	mutations: {
		setPais(state, payload) {
			state.pais = payload
		},
		setPaises(state, payload) {
			state.paises = payload
		},
		setPaisesFiltrados(state, payload) {
			state.paisesFiltrados = payload
		}
	},
	actions: {
		async getPais({ commit }, name) {
			try {
				const res = await fetch("https://restcountries.com/v3.1/name/" + name)
				const data = await res.json()
				commit('setPais', data[0])
			} catch (error) {
				console.log(error)
			}
		},

		async getPaises({ commit }) {
			try {
				const res = await fetch('https://restcountries.com/v3.1/all')
				const data = await res.json()
				commit('setPaises', data)
			} catch (error) {
				console.log(error)
			}
		},

		filtrarRegion({ commit, state }, region) {
			const filtro = state.paises.filter((pais) => {
				if (pais.region == region) {
					return pais.region.includes(region)
				} else if (region == "All") {
					return pais
				}
			});
			commit('setPaisesFiltrados', filtro)
		},

		filtrarNombre({ commit, state }, texto) {
			const textoCliente = texto.toLowerCase()
			const filtro = state.paises.filter(pais => {
				const textoApi = pais.name.common.toLowerCase()
				if (textoApi.includes(textoCliente)) {
					return pais
				}
			})
			commit('setPaisesFiltrados', filtro)
		}
	},
	getters: {
		topPaisesPerPob(state) {
			return state.paisesFiltrados.sort((a, b) => {
				return a.population < b.population ? 1 : -1
			})
		},
		singlePais: state => {
			return state.pais
		},
	},
	modules: {
	}
})

