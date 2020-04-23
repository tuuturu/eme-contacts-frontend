<template>
	<div class="ContactSearch">
		<input
			type="text"
			aria-label="label"
			placeholder="Search for contact"
			v-bind="$attrs"
			v-on="{
				...$listeners,
				input: (event) => $emit('input', event.target.value)
			}"
		/>
		<IconAdd v-if="showAction" @click.native="$emit('actionClick')" />
	</div>
</template>

<script>
import IconAdd from '@/components/icons/IconAdd'
export default {
	name: 'ContactSearch',
	components: { IconAdd },
	props: {
		showAction: Boolean,
		onAction: Function
	}
}
</script>

<style lang="scss" scoped>
input {
	width: inherit;
	padding: 0.5em;

	font-size: 16pt;
}

.ContactSearch {
	position: relative;
}

.IconAdd {
	position: absolute;
	right: 0.7em;
	top: 0.7em;
}
</style>
