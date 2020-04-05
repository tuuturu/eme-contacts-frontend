<template>
	<input
		class="ContactSearch"
		type="text"
		aria-label="label"
		placeholder="Search for contact"
		v-bind="$attrs"
		v-on="{
			...$listeners,
			input: (event) => $emit('input', event.target.value)
		}"
	/>
</template>

<script>
export default {
	name: 'ContactSearch'
}
</script>

<style lang="scss" scoped>
.ContactSearch {
	font-size: 16pt;

	padding: 0.5em;
}
</style>
