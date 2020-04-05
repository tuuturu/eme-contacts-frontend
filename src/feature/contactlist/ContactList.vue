<template>
	<div class="ContactList">
		<SearchBox @input="query = $event.target.value" />
		<ul class="contact-list">
			<li
				v-for="contact in visibleContacts"
				:key="contact.id"
				@mousedown="onMouseDownListener(contact.id)"
				@mouseup="onMouseUpListener"
			>
				<ContactCard
					:selected="selectMode && selectedIds.indexOf(contact.id) !== -1"
					:contact="contact"
				/>
			</li>
		</ul>
		<div class="main-action-container">
			<BaseButton
				v-if="!selectMode"
				@click="$router.push({ path: '/contacts/edit' })"
			>
				New
			</BaseButton>
			<BaseButton v-else class="select-mode" @click="deleteSelected">
				Delete
			</BaseButton>
		</div>
	</div>
</template>

<script>
import ContactManager from '@/feature/contactlist/service/contact_manager'
import ContactCard from '@/feature/contactlist/components/ContactCard'
import SearchBox from '@/feature/contactlist/components/SearchBox'
import BaseButton from '@/components/BaseButton'

const LONG_CLICK_THRESHOLD = 1000

function firstNameSort(contactA, contactB) {
	if (contactA.first_name > contactB.first_name) return 1
	if (contactA.first_name < contactB.first_name) return -1

	return 0
}

export default {
	name: 'ContactList',
	components: { ContactCard, SearchBox, BaseButton },
	computed: {
		visibleContacts() {
			const contacts = this.contacts.filter(this.searchFilter)

			return contacts.sort(this.sortFunction)
		}
	},
	data() {
		return {
			contacts: [],
			longClickTimeout: null,
			selectedIds: [],
			selectMode: false,
			query: '',
			sortFunction: firstNameSort
		}
	},
	methods: {
		onMouseDownListener(id) {
			if (this.selectMode) {
				const index = this.selectedIds.indexOf(id)

				if (index === -1) this.selectedIds.push(id)
				else this.selectedIds.splice(index, 1)

				return
			}

			this.selectedIds.push(id)

			this.longClickTimeout = setTimeout(() => {
				this.selectMode = true
			}, LONG_CLICK_THRESHOLD)
		},
		onMouseUpListener() {
			if (this.selectMode) {
				if (this.selectedIds.length === 0) this.selectMode = false

				return
			}

			if (this.longClickTimeout) {
				this.longClickTimeout = clearTimeout(this.longClickTimeout)

				this.$router.push({
					name: 'EditSpecificContact',
					params: { id: this.selectedIds.pop() }
				})
			}
		},
		deleteSelected() {
			this.contacts = this.contacts.filter((contact) => {
				if (this.selectedIds.indexOf(contact.id) !== -1) {
					ContactManager.delete(contact.id)

					return false
				}

				return true
			})

			this.selectedIds.splice(0, this.selectedIds.length - 1)
			this.selectMode = false
		},
		searchFilter(contact) {
			const haystack = [
				contact.first_name,
				contact.last_name,
				contact.phone_number
			]
				.join('')
				.toLowerCase()

			return haystack.indexOf(this.query.toLowerCase()) >= 0
		}
	},
	async created() {
		this.contacts = await ContactManager.getContacts()
	}
}
</script>

<style lang="scss" scoped>
.ContactList {
	padding: 0.5em;
}

ul.contact-list {
	list-style-type: none;
	padding: 0;

	margin-bottom: 6em;

	li:not(:first-child) {
		margin-top: 0.5em;
	}
}

div.main-action-container {
	position: fixed;
	bottom: 0;
	left: 0;

	padding-bottom: 1em;

	width: 100%;
	background-color: white;
}

.BaseButton.select-mode {
	border: 2px solid red;
}
</style>
