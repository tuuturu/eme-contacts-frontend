<template>
	<div class="ContactCard" :class="{ selected }">
		<IconProfilePicture />
		<span>{{ contact.first_name }} {{ contact.last_name }}</span>
	</div>
</template>

<script>
import IconProfilePicture from '@/feature/contactlist/components/IconProfilePicture'

export default {
	name: 'ContactCard',
	components: { IconProfilePicture },
	props: {
		contact: Object,
		selected: Boolean
	}
}
</script>

<style type="scss" scoped>
.IconProfilePicture {
	height: 48px;
	width: 48px;

	margin-right: 1em;
}

div.ContactCard {
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	transition: 0.1s;
	border-radius: 1px;

	padding: 8px;

	display: flex;
	align-items: center;
}
div.ContactCard:hover {
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}
div.ContactCard.selected {
	outline: 2px solid black;
}
div.ContactCard.selected:hover {
	//box-shadow: none;
}
</style>
