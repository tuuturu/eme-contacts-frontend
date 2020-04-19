<template>
	<svg
		class="IconEdit"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="4" />
		<rect x="10" width="4" height="3" fill="currentColor" />
		<rect
			y="14"
			width="4"
			height="3"
			transform="rotate(-90 0 14)"
			fill="currentColor"
		/>
		<rect
			x="21"
			y="14"
			width="4"
			height="3"
			transform="rotate(-90 21 14)"
			fill="currentColor"
		/>
		<rect
			x="2"
			y="4.82837"
			width="4"
			height="3"
			transform="rotate(-45 2 4.82837)"
			fill="currentColor"
		/>
		<rect
			x="17"
			y="19.8284"
			width="4"
			height="3"
			transform="rotate(-45 17 19.8284)"
			fill="currentColor"
		/>
		<rect
			x="19.8284"
			y="6.94971"
			width="4"
			height="3"
			transform="rotate(-135 19.8284 6.94971)"
			fill="currentColor"
		/>
		<rect
			x="4.82843"
			y="21.9497"
			width="4"
			height="3"
			transform="rotate(-135 4.82843 21.9497)"
			fill="currentColor"
		/>
		<rect x="10" y="21" width="4" height="3" fill="currentColor" />
		<circle cx="12" cy="12" r="4" fill="currentColor" />
	</svg>
</template>

<script>
export default {
	name: 'IconEdit',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped></style>
