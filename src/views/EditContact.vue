<template>
	<div class="Contact">
		<div class="menu">
			<IconDelete v-if="contact.id" @click="deleteContact" />
			<IconEdit v-if="false" />
		</div>

		<IconUser />

		<h1>
			<input
				:value="full_name"
				@input="setName($event.target.value)"
				aria-label="full name"
				placeholder="Jane Doe"
				type="text"
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

		<div class="status-container">
			<span v-if="saveTimer">Saving</span>
			<span class="success" v-else-if="contact.id">Saved</span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Cleave from 'cleave.js'
import IconUser from '@/components/icons/IconUser'
import IconEmail from '@/components/icons/IconEmail'
import IconCall from '@/components/icons/IconCall'
import IconDelete from '@/components/icons/IconDelete'
import IconEdit from '@/components/icons/IconEdit'
import Contact from '@/models/contact'

const SAVE_TIMEOUT_MS = 500

export default {
	name: 'Contact',
	components: { IconEdit, IconDelete, IconCall, IconEmail, IconUser },
	computed: {
		full_name() {
			return this.contact.fullName()
		}
	},
	data: () => ({
		saveTimer: null,
		contact: new Contact()
	}),
	mounted() {
		new Cleave('.input-phone', { blocks: [3, 2, 3] })

		const id = this.$route.params.id
		if (id) {
			Vue.set(this, 'contact', this.$store.getters['contacts/contact'](id))

			return
		}

		if (this.$route.params.prefillName)
			this.contact.setName(this.$route.params.prefillName)
		if (this.$route.params.prefillPhone)
			this.contact.phone = this.$route.params.prefillPhone
		if (this.$route.params.prefillEmail)
			this.contact.email = this.$route.params.prefillEmail
	},
	methods: {
		setName(name) {
			if (name.charAt(name.length - 1) === ' ') return
			console.log(`Setting name ${name}`)

			this.contact.setName(name)

			this.save()
		},
		save() {
			if (this.saveTimer) clearTimeout(this.saveTimer)

			this.saveTimer = setTimeout(async () => {
				const newContactObject = await this.$store.dispatch(
					'contacts/saveContact',
					this.contact.serialize()
				)

				this.contact.id = newContactObject.id

				this.saveTimer = null
			}, SAVE_TIMEOUT_MS)
		},
		deleteContact() {
			const answer = confirm(`Are you sure you want to delete ${this.full_name}?`)

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
