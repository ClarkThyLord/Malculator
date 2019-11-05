import Vue from 'vue';
import App from './App.vue';

import UIkit from 'uikit';
import UIkitIcons from 'uikit/dist/js/uikit-icons';
UIkit.use(UIkitIcons);
window.UIkit = UIkit;

import * as mathjs from 'mathjs';
window.mathjs = mathjs;

import Chart from 'chart.js';
window.Chart = Chart

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')