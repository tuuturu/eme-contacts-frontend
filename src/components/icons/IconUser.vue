<template>
	<svg
		class="IconUser"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{{ alt }}</title>
		<circle cx="7" cy="8" r="2" fill="currentColor" />
		<circle cx="17" cy="8" r="2" fill="currentColor" />
		<circle cx="12" cy="12" r="11.5" stroke="currentColor" />
	</svg>
</template>

<script>
export default {
	name: 'IconUser',
	props: {
		alt: {
			type: String,
			default: ''
		}
	}
}
</script>
