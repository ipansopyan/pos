import Vue from 'vue'
import Vuerouter from 'vue-router'

// import store from './store'

import WelcomePage from './components/welcome/welcome'
import Dashboard from './components/dashboard/admin'

Vue.use(Vuerouter)

const routes = [
 {
  path : '/',
  name : '/',
  component: WelcomePage
  },
  {
  path : '/admin',
  name : 'admin',
  component: Dashboard
  },
]

export default new Vuerouter({mode: 'history', routes})