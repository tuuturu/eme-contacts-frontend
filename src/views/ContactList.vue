<template>
	<div class="ContactList">
		<ContactSearch
			v-model="query"
			:show-action="filtered_contacts.length < 5"
			@actionClick="addContact"
		/>

		<ol>
			<li v-for="contact in filtered_contacts" :key="contact.id">
				<ContactCard
					:contact="contact"
					@click="$router.push(`/contacts/${contact.id}`)"
				/>
			</li>
		</ol>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ContactCard from '@/components/ContactCard'
import ContactSearch from '@/components/ContactSearch'

function byFirstName(c1, c2) {
	return c1.first_name - c2.first_name
}

export default {
	name: 'ContactList',
	components: { ContactSearch, ContactCard },
	computed: {
		...mapGetters('user', ['isAuthenticated']),
		...mapState('contacts', ['contacts']),
		sorted_contacts() {
			return [...this.contacts].sort(this.sort_type)
		},
		filtered_contacts() {
			return this.sorted_contacts.filter(contact => {
				let haystack = ''

				if (contact.first_name) haystack += contact.first_name
				if (contact.last_name) haystack += contact.last_name
				if (contact.email) haystack += contact.email
				if (contact.phone) haystack += contact.phone

				return haystack.includes(this.query)
			})
		}
	},
	data: () => ({
		sort_type: byFirstName,
		query: ''
	}),
	created() {
		this.$store.dispatch('contacts/refresh')
	},
	methods: {
		addContact() {
			const params = {}

			if (isNaN(this.query)) {
				if (this.query.indexOf('@') !== -1) params.prefillEmail = this.query
				else params.prefillName = this.query
			} else params.prefillPhone = this.query

			this.$router.push({ name: 'CreateContact', params })
		}
	}
}
</script>

<style lang="scss" scoped>
.ContactList {
	padding: 0.5em;
}

ol {
	list-style: none;
	padding: 0;

	text-align: left;
}

.ContactCard {
	width: 100%;
}

.ContactSearch {
	width: 100%;
}
</style>
