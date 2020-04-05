<template>
	<div class="SearchBox">
		<label>
			<input
				id="txtQuery"
				type="text"
				@input="$emit('input', $event)"
				placeholder="Search for a contact"
			/>
		</label>
	</div>
</template>

<script>
export default {
	name: 'SearchBox'
}
</script>

<style type="scss" scoped>
input {
	width: 100%;

	padding: 1em;
}
</style>
