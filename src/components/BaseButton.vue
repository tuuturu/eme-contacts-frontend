<template>
	<button v-on="$listeners" class="BaseButton">
		<slot />
	</button>
</template>

<script>
export default {
	name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
.BaseButton {
	min-height: 4em;
	min-width: 12em;

	background-color: transparent;
	border: 2px solid black;

	font-size: 16px;
}
</style>
