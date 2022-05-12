import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
