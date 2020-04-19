import Axios from 'axios'

const axios = Axios.create({
	baseURL: process.env.VUE_APP_GATEKEEPER_URL,
	withCredentials: true
})

const state = () => ({
	user: null
})

const mutations = {
	user(state, user_info) {
		state.user = user_info
	}
}

const getters = {
	isAuthenticated(state) {
		return !!state.user
	}
}

const actions = {
	async refresh({ commit }) {
		let user = null

		try {
			const { data } = await axios.get('/userinfo')

			user = data
		} catch (error) {} // expected when not logged in

		commit('user', user)
	},
	async logout({ commit }) {
		await axios.post('/logout')

		commit('user', null)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
