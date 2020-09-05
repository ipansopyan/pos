import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

import product from './store/product'
import auth from './store/auth'
import cart from './store/cart'
// import dosen from './store/modules/dosen'
// import matkul from './store/modules/matkul'


Vue.use(Vuex)

export default new Vuex.Store({
 modules : {
  product,
  cart,
  auth,
//   dosen,
//   matkul,
 }
})