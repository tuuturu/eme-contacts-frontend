<template>
	<svg
		class="IconProfilePicture"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMaxYMax meet"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<g
			id="Page-1"
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<rect
				id="Rectangle"
				stroke="#979797"
				fill="none"
				x="0.5"
				y="0.5"
				width="99"
				height="99"
			/>
			<circle id="Oval" stroke="#979797" fill="none" cx="30" cy="40" r="12.5" />
			<circle id="Oval" stroke="#979797" fill="none" cx="70" cy="40" r="12.5" />
			<line
				x1="50"
				y1="20"
				x2="10"
				y2="30"
				id="Line"
				stroke="#979797"
				stroke-linecap="square"
			/>
			<line
				x1="90"
				y1="30"
				x2="55"
				y2="25"
				id="Line"
				stroke="#979797"
				stroke-linecap="square"
			/>
		</g>
	</svg>
</template>

<script>
export default {
	name: 'IconProfilePicture',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>
