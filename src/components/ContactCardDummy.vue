<template>
	<div class="ContactCardDummy" v-on="$listeners">
		<div class="icon">
			<slot />
		</div>

		<div>{{ text }}</div>
	</div>
</template>

<script>
export default {
	name: 'ContactCard',
	props: {
		text: String
	}
}
</script>

<style lang="scss" scoped>
.ContactCardDummy {
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

	svg {
		height: 36px;
		width: 36px;
	}
}
</style>
