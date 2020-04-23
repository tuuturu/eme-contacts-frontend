import Vue from 'vue'
import VueRouter from 'vue-router'

import ContactList from '@/views/ContactList'
import Contact from '@/views/Contact'
import EditContact from '@/views/EditContact'

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
		path: '/new',
		name: 'CreateContact',
		component: EditContact
	},
	{
		path: '/edit/:id',
		name: 'EditContact',
		component: EditContact
	},
	{
		path: '/',
		redirect: '/contacts'
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
