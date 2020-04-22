<template>
	<svg
		class="IconAdd"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<rect x="10" width="4" height="24" fill="currentColor" />
		<rect
			y="14"
			width="4"
			height="24"
			transform="rotate(-90 0 14)"
			fill="currentColor"
		/>
	</svg>
</template>

<script>
export default {
	name: 'IconAdd',
	props: {
		alt: String,
		default: () => ''
	}
}
</script>

<style lang="scss" scoped></style>
