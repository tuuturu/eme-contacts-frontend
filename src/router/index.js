import Vue from 'vue'
import VueRouter from 'vue-router'

import ContactList from '@/views/ContactList'
import Contact from '@/views/Contact'

Vue.use(VueRouter)

const routes = [
	{
		path: '/contacts',
		name: 'ListContacts',
		component: ContactList
	},
	{
		path: '/contacts/:id',
		name: 'ContactView',
		component: Contact
	},
	{
		path: '/',
		redirect: '/contacts'
	}
]

const router = new VueRouter({
	routes
})

export default router
