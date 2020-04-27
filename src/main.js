import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import KonamiCode from 'vue-konami-code'

Vue.use(KonamiCode, {
  callback: function () {
    window.location = '/#/konami?password=kokonami'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
