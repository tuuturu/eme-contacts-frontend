<template>
	<div class="EditContact">
		<form class="contact-form">
			<IconProfilePicture />
			<label for="txtFirstName">First name</label>
			<input
				id="txtFirstName"
				type="text"
				v-model="payload.first_name"
				placeholder="Jane"
				@input="submit"
			/>
			<label for="txtLastName">Last name</label>
			<input
				id="txtLastName"
				type="text"
				v-model="payload.last_name"
				placeholder="Doe"
				@input="submit"
			/>
			<label for="txtPhoneNumber">Phone</label>
			<input
				id="txtPhoneNumber"
				type="text"
				v-model="payload.phone"
				placeholder="815 49 300"
				@input="submit"
			/>
			<label for="txtEmail">Email</label>
			<input
				id="txtEmail"
				type="text"
				v-model="payload.email"
				placeholder="jane@ctemplar.com"
				@input="submit"
			/>
		</form>
	</div>
</template>

<script>
import ContactManager from '@/feature/contactlist/service/contact_manager'
import IconProfilePicture from '@/feature/contactlist/components/IconProfilePicture'

export default {
	name: 'EditContact',
	components: { IconProfilePicture },
	data() {
		return {
			saveTimer: null,
			payload: { first_name: null, last_name: null, phone_number: null }
		}
	},
	methods: {
		submit() {
			if (this.saveTimer) clearTimeout(this.saveTimer)

			this.saveTimer = setTimeout(() => {
				ContactManager.save(this.payload).then((id) => {
					this.payload.id = id
				})
			}, 1000)
		}
	},
	mounted() {
		if (!this.$route.params.id) document.getElementById('txtFirstName').focus()
	},
	async created() {
		if (!this.$route.params.id) return

		const contact = await ContactManager.get(this.$route.params.id)

		this.payload = Object.assign(this.payload, contact)
	}
}
</script>

<style lang="scss" scoped>
div.option-bar {
	width: 100%;
	height: 2em;

	text-align: right;
	vertical-align: center;

	display: flex;
	justify-content: right;

	.IconMenu {
		margin-right: 1em;

		width: 3em;

		color: lightgrey;
	}
}
form.contact-form {
	display: flex;
	flex-direction: column;

	padding: 1em;
	text-align: left;

	.IconProfilePicture {
		width: 140px;
		height: 140px;
	}

	label {
		&:not(:first-child) {
			margin-top: 1em;
			margin-bottom: 0.2em;
		}
	}
	input[type='text'] {
		padding: 1em;

		border-bottom: 1px solid black;
		border-right: 1px solid black;
	}
}
</style>
