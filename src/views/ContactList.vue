<template>
	<div class="ContactList">
		<ContactSearch v-model="query" />

		<ol>
			<li>
				<ContactCardDummy text="Add new contact" @click="$router.push('/new')">
					<IconAdd />
				</ContactCardDummy>
			</li>
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
import IconAdd from '@/components/icons/IconAdd'
import ContactCardDummy from '@/components/ContactCardDummy'

function byFirstName(c1, c2) {
	return c1.first_name - c2.first_name
}

export default {
	name: 'ContactList',
	components: { ContactSearch, ContactCard, ContactCardDummy, IconAdd },
	computed: {
		...mapGetters('user', ['isAuthenticated']),
		...mapState('contacts', ['contacts']),
		sorted_contacts() {
			return [...this.contacts].sort(this.sort_type)
		},
		filtered_contacts() {
			return this.sorted_contacts.filter((contact) => {
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
