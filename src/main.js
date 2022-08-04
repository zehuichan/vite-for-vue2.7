import Vue from 'vue'
import App from './App.vue'

// global css
import './styles/index.less'

import { setupVant } from './plugins/vant'
import { store } from './store'
import { router } from './router'
import { setupGuard } from './router/guard'
import i18n, { setupI18n } from './lang'
import { registerComponents } from './components'

setupVant(Vue)
registerComponents(Vue)
setupGuard(router)
setupI18n()

Vue.config.productionTip = false
console.log(__APP_INFO__)

new Vue({
  router,
  pinia: store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
