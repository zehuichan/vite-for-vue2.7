import Vue from 'vue'
import App from './App.vue'

import { setupVant } from './plugins/vant'
import { store } from './store'
import { router } from './router'
import { setupGuard } from './router/guard'
import i18n, { setupI18n } from './lang'
import { registerComponents } from './components'

setupVant()
registerComponents()
setupGuard(router)
setupI18n()

new Vue({
	router,
	pinia: store,
	i18n,
	render: h => h(App)
}).$mount('#app')
