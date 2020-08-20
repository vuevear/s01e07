import Vue from 'vue'
import App from './App.vue'

import fps from 'fps-indicator'

fps({
  position: 'top-right',
  style: `
    font-size: 24px;
  `,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
