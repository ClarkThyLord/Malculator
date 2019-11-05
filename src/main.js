import Vue from 'vue'
import App from './App.vue'

import * as mathjs from 'mathjs'
window.mathjs = mathjs

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')