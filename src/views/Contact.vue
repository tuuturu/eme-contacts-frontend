<template>
	<div class="Contact">
		<div class="menu">
			<IconEdit @click="$router.push(`/edit/${contact.id}`)" />
		</div>

		<IconUser />

		<h1>
			{{ contact.first_name }} {{ contact.last_name }}
			<span class="age" v-if="contact.age">({{ contact.age }})</span>
		</h1>

		<div
			class="contact-property"
			v-for="number in ensureList(contact.phone)"
			:key="number"
			@click="call(number)"
		>
			<IconCall class="icon" />
			<p>{{ sanitizePhone(number) }}</p>
		</div>

		<div
			class="contact-property"
			v-for="email in ensureList(contact.email)"
			:key="email"
		>
			<IconEmail class="icon" />
			<p>{{ email }}</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import IconUser from '@/components/icons/IconUser'
import IconEmail from '@/components/icons/IconEmail'
import IconCall from '@/components/icons/IconCall'
import IconEdit from '@/components/icons/IconEdit'

function ensureList(item) {
	const items = []

	if (!item) return items

	if (item.indexOf(';') > -1) items.push(...item.split(';'))
	else items.push(item)

	return items
}

function sanitizePhone(number) {
	let result = ''
	number = number.replace(' ', '')

	if (number.indexOf('+') > -1) {
		result += number.substr(0, 3) + ' '
		number = number.substr(3)
	}

	return (
		result +
		number.slice(0, 3) +
		' ' +
		number.slice(3, 6) +
		' ' +
		number.slice(6)
	)
}

export default {
	name: 'Contact',
	components: { IconEdit, IconCall, IconEmail, IconUser },
	computed: {
		...mapState('contacts', ['contacts']),
		contact() {
			return this.contacts.find(
				(contact) => contact.id === this.$route.params.id
			)
		}
	},
	data: () => ({
		ensureList,
		sanitizePhone
	}),
	methods: {
		call(number) {
			const saneNumber = number.replace(' ', '')

			window.open(`tel:${saneNumber}`)
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
	width: 100%;
	text-align: left;

	display: flex;
	justify-content: flex-end;

	svg {
		margin: 0.5em;
		cursor: pointer;
	}
}

.age {
	color: grey;
}

.icon {
	height: 28px;
	width: 28px;

	margin-right: 1em;
}

.contact-property {
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	cursor: pointer;
}
</style>
