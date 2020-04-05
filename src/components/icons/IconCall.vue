<template>
	<svg
		class="IconCall"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<line x1="7" x2="7" y2="24" stroke="currentColor" stroke-width="4" />
		<line y1="7" x2="24" y2="7" stroke="currentColor" stroke-width="4" />
		<line y1="17" x2="24" y2="17" stroke="currentColor" stroke-width="4" />
		<line x1="17" x2="17" y2="24" stroke="currentColor" stroke-width="4" />
	</svg>
</template>

<script>
export default {
	name: 'IconCall',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped></style>
