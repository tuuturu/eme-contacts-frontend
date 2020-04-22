import Axios from 'axios'
import config from '@/app.config'

const axios = Axios.create({
	baseURL: config.VUE_APP_UPSTREAM_URL,
	withCredentials: true
})

const state = () => ({
	contacts: []
})

const mutations = {
	contacts(state, contacts) {
		state.contacts = contacts
	},
	contact(state, contact) {
		let index = state.contacts.findIndex((el) => el.id === contact.id)
		let removes = 0

		if (index >= -1) removes = 1
		else index = 0

		console.log(state.contacts)
		state.contacts.splice(index, removes, contact)
		console.log(state.contacts)
	}
}

const getters = () => ({})

const actions = {
	async refresh({ commit }) {
		const { data } = await axios.get('/contacts')

		commit('contacts', data)
	},
	async saveContact({ dispatch }, contact) {
		let method = 'post'
		let url = '/contacts'

		if (contact.id) {
			method = 'patch'
			url += `/${contact.id}`
		}

		const { data } = await axios.request({
			url,
			method,
			data: contact
		})

		return data
	},
	async deleteContact({ dispatch }, { id }) {
		await axios.delete(`/contacts/${id}`)

		await dispatch('refresh')
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
