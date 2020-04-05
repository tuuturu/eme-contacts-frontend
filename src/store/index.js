import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/user'
import contacts from '@/store/contacts'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user,
		contacts
	}
})

export default store
