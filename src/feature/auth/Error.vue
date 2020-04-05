<template>
	<div class="Error">
		<h1>Someone made a boo-boo</h1>
		<h2>{{ decodeURIComponent($route.query.status) }}</h2>
		<p>{{ decodeURIComponent($route.query.message) }}</p>
	</div>
</template>

<script>
export default {
	name: 'Error'
}
</script>
