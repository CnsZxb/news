import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import "../src/css/index.css"
Vue.prototype.$moment = moment
Vue.prototype.axios = axios
Vue.config.productionTip = false
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import 'font-awesome/css/font-awesome.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
