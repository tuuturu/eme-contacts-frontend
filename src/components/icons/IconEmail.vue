<template>
	<svg
		class="IconEmail"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<rect
			x="1"
			y="5"
			width="22"
			height="14"
			stroke="currentColor"
			stroke-width="2"
		/>
		<line
			x1="0.503871"
			y1="5.13622"
			x2="12.5039"
			y2="12.1362"
			stroke="currentColor"
			stroke-width="2"
		/>
		<line
			y1="-1"
			x2="13.8924"
			y2="-1"
			transform="matrix(-0.863779 0.503871 0.503871 0.863779 24 6)"
			stroke="currentColor"
			stroke-width="2"
		/>
	</svg>
</template>

<script>
export default {
	name: 'IconEmail',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped></style>
