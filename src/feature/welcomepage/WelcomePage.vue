<template>
	<div class="WelcomePage">
		<h1>Welcome!</h1>
		<p>
			This thing is very much under construction. Will at some point (hopefully)
			be a contact app. "Wow" - yeah, I know right?
		</p>
		<a :href="`${login_url}?redirect=${redirect_uri}`">
			Login
		</a>
		<a @click="logout" href="javascript:void(0)">Logout</a>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'WelcomePage',
	data: () => ({
		login_url: process.env.VUE_APP_LOGIN_URL,
		redirect_uri: encodeURIComponent(
			`${process.env.VUE_APP_BASE_URL}/#/contacts`
		)
	}),
	methods: {
		async logout() {
			await axios.request({
				url: `${process.env.VUE_APP_LOGOUT_URL}`,
				method: 'POST',
				withCredentials: true
			})
		}
	}
}
</script>

<style lang="scss" scoped />
