import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Authentication from '@/plugin/authentication'

Vue.config.productionTip = false

Vue.use(Authentication)

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
