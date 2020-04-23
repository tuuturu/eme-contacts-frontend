<template>
	<div class="Contact">
		<div class="menu">
			<IconDelete v-if="contact.id" @click="deleteContact" />
			<IconEdit v-if="false" />
		</div>

		<IconUser />

		<h1>
			<input
				v-model="full_name"
				aria-label="full name"
				placeholder="Jane Doe"
				type="text"
				@input="save"
			/>
		</h1>

		<div class="contact-property">
			<IconCall class="icon" />
			<input
				v-model="contact.phone"
				class="input-phone"
				aria-label="telephone"
				placeholder="815 49 300"
				type="tel"
				@input="save"
			/>
		</div>

		<div class="contact-property">
			<IconEmail class="icon" />
			<input
				v-model="contact.email"
				aria-label="email"
				placeholder="supersecret@email.org"
				type="email"
				@input="save"
			/>
		</div>

		<div class="status-container" v-if="contact.id">
			<span v-if="saveTimer">Saving</span>
			<span class="success" v-else>Saved</span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import IconUser from '@/components/icons/IconUser'
import IconEmail from '@/components/icons/IconEmail'
import IconCall from '@/components/icons/IconCall'
import IconDelete from '@/components/icons/IconDelete'
import IconEdit from '@/components/icons/IconEdit'
import Cleave from 'cleave.js'

function cleanName(name) {
	if (name.indexOf(' ') === -1) return { first_name: name }

	const parts = name.split(' ')

	return {
		first_name: parts[0],
		last_name: parts[1]
	}
}

function sanitizeObject(obj) {
	const result = {}

	for (const key in obj) if (obj[key]) result[key] = obj[key]

	return result
}

export default {
	name: 'Contact',
	components: { IconEdit, IconDelete, IconCall, IconEmail, IconUser },
	data: () => ({
		saveTimer: null,
		full_name: '',
		contact: {
			id: '',
			first_name: '',
			last_name: '',
			email: '',
			phone: ''
		}
	}),
	mounted() {
		new Cleave('.input-phone', { blocks: [3, 2, 3] })

		const id = this.$route.params.id
		if (id) {
			Vue.set(this, 'contact', this.$store.getters['contacts/contact'](id))
			this.full_name = `${this.contact.first_name}`
			if (this.contact.last_name) this.full_name += ` ${this.contact.last_name}`
		} else {
			if (this.$route.params.prefillName)
				this.full_name = this.$route.params.prefillName
			if (this.$route.params.prefillPhone)
				this.contact.phone = this.$route.params.prefillPhone
			if (this.$route.params.prefillEmail)
				this.contact.email = this.$route.params.prefillEmail
		}
	},
	methods: {
		save() {
			if (this.saveTimer) clearTimeout(this.saveTimer)

			this.saveTimer = setTimeout(async () => {
				this.contact = Object.assign(this.contact, cleanName(this.full_name))
				this.contact = sanitizeObject(this.contact)

				const newContactObject = await this.$store.dispatch(
					'contacts/saveContact',
					this.contact
				)

				Vue.set(this, 'contact', newContactObject)

				this.saveTimer = null
			}, 500)
		},
		deleteContact() {
			const answer = confirm(
				`Are you sure you want to delete ${this.full_name}?`
			)

			if (!answer) return

			this.$store.dispatch('contacts/deleteContact', { id: this.contact.id })

			this.$router.push('/contacts')
		}
	}
}
</script>

<style lang="scss" scoped>
.Contact {
	padding: 1em;
}

h1 {
	margin-top: 2em;
	margin-bottom: 2em;
	font-size: 18pt;
	width: 100%;
}

.IconUser {
	height: 196px;
	width: 196px;
}

.menu {
	min-height: 46px;
	width: 100%;
	text-align: left;

	display: flex;
	justify-content: space-between;

	svg {
		margin: 0.5em;
		cursor: pointer;
	}
}

.icon {
	height: 28px;
	width: 28px;

	margin-right: 1em;
}

.contact-property {
	width: 100%;

	margin-top: 1em;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	cursor: pointer;
}

.IconDelete {
	color: red;
}

input {
	height: 48px;
	width: 100%;

	padding: 0.5em;

	font-size: 16pt;

	border: 2px solid black;
	border-radius: 4px;
}
input:focus {
	border: 4px solid black;
}

.status-container {
	position: fixed;
	bottom: 1em;

	margin-left: -1em;

	width: 100%;

	font-size: 12pt;
}

.success {
	color: green;
}
</style>
