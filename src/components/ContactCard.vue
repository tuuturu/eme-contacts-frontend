<template>
	<div class="ContactCard" v-on="$listeners">
		<div class="icon">
			<IconUser alt="profile picture" />
		</div>

		<div class="content">{{ contact.first_name }} {{ contact.last_name }}</div>
	</div>
</template>

<script>
import IconUser from '@/components/icons/IconUser'
export default {
	name: 'ContactCard',
	components: { IconUser },
	props: {
		contact: Object
	}
}
</script>

<style lang="scss" scoped>
.ContactCard {
	height: 56px;

	cursor: pointer;

	display: flex;
	align-items: center;
}

.icon {
	width: 68px;

	display: flex;
	justify-content: center;
	align-items: center;
}

.IconUser {
	height: 36px;
	width: 36px;
}

.content {
}
</style>
