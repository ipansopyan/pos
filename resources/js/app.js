import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'
import VueCurrencyFilter from 'vue-currency-filter'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCurrencyFilter,
    {
        symbol: '',
        thousandsSeparator: '.',
        fractionCount: 0,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true
    })

new Vue({
    el: '#app',
    router,
    store,
    axios,
    render: h => h(App)
});
