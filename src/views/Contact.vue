<template>
	<div class="Contact">
		<IconUser />

		<h1>
			{{ contact.first_name }} {{ contact.last_name }}
			<span class="age" v-if="contact.age">({{ contact.age }})</span>
		</h1>

		<div class="contact-property" v-if="contact.phone">
			<IconCall class="icon" />
			<p>{{ contact.phone }}</p>
		</div>
		<div class="contact-property" v-if="contact.email">
			<IconEmail class="icon" />
			<p>{{ contact.email }}</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import IconUser from '@/components/icons/IconUser'
import IconEmail from '@/components/icons/IconEmail'
import IconCall from '@/components/icons/IconCall'

export default {
	name: 'Contact',
	components: { IconCall, IconEmail, IconUser },
	computed: {
		...mapState('contacts', ['contacts']),
		contact() {
			return this.contacts.find(
				(contact) => contact.id === this.$route.params.id
			)
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

.age {
	color: grey;
}

.icon {
	height: 36px;
	width: 36px;

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
