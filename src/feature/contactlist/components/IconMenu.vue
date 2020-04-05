<template>
	<svg
		class="IconMenu"
		width="100px"
		height="26px"
		viewBox="0 0 100 26"
		preserveAspectRatio="xMaxYMax meet"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Generator: Sketch 61 (89581) - https://sketch.com -->
		<title>{{ alt }}</title>
		<g
			id="Page-1"
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g
				id="Group"
				fill="currentColor"
				stroke="#979797"
				stroke-width="0.757575758"
			>
				<circle id="Oval" cx="12.6136364" cy="12.6136364" r="12.2348485" />
				<circle id="Oval" cx="49.7348485" cy="12.6136364" r="12.2348485" />
				<circle id="Oval" cx="86.8560606" cy="12.6136364" r="12.2348485" />
			</g>
		</g>
	</svg>
</template>

<script>
export default {
	name: 'IconMenu',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>
