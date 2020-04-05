import Vue from 'vue'
import VueRouter from 'vue-router'

import ContactList from '@/feature/contactlist/ContactList'
import EditContact from '@/feature/contactlist/EditContact'
import WelcomePage from '@/feature/welcomepage/WelcomePage'
import Error from '@/feature/auth/Error'

Vue.use(VueRouter)

const routes = [
	{
		path: '/contacts',
		name: 'contacts',
		component: ContactList
	},
	{
		path: '/contacts/edit',
		name: 'EditContact',
		component: EditContact
	},
	{
		path: '/contacts/:id/edit',
		name: 'EditSpecificContact',
		component: EditContact
	},
	{
		path: '/',
		name: 'WelcomePage',
		component: WelcomePage
	},
	{
		path: '/error',
		name: 'ErrorPage',
		component: Error
	}
]

const router = new VueRouter({
	routes
})

export default router
