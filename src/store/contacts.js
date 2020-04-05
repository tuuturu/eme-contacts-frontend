import Axios from 'axios'

const axios = Axios.create({
	baseURL: process.env.VUE_APP_UPSTREAM_URL,
	withCredentials: true
})

const state = () => ({
	contacts: []
})

const mutations = {
	contacts(state, contacts) {
		state.contacts = contacts
	}
}

const getters = () => ({})

const actions = {
	async refresh({ commit }) {
		const { data } = await axios.get('/contacts')

		commit('contacts', data)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
