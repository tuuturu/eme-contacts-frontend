import Axios from 'axios'

if (
	!('VUE_APP_UPSTREAM_URL' in process.env && process.env.VUE_APP_UPSTREAM_URL)
) {
	throw new Error('No upstream URL found')
}

const axios = Axios.create({
	baseURL: process.env.VUE_APP_UPSTREAM_URL,
	headers: { Accept: 'application/json' },
	withCredentials: true
})

export default {
	async getContacts() {
		const { data } = await axios.request({
			url: 'contacts',
			method: 'get'
		})

		return data
	},
	async get(id) {
		const { data } = await axios.request({
			url: 'contacts/' + id,
			method: 'get'
		})

		return data
	},

	async save(payload) {
		let url = 'contacts'
		let method = 'post'

		if ('id' in payload) {
			url += `/${payload.id}`
			method = 'patch'
		}

		const { data } = await axios.request({
			url,
			headers: {
				'Content-Type': 'application/json'
			},
			method,
			data: JSON.stringify(payload)
		})

		return data.id
	},

	async saveBatch(contacts) {
		const { data } = await axios.request({
			url: 'contacts/batch',
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(contacts)
		})

		return data
	},

	async delete(id) {
		await axios.request({
			url: 'contacts/' + id,
			method: 'DELETE'
		})

		return id
	}
}
