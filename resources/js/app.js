import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'
import VueCurrencyFilter from 'vue-currency-filter'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueHtmlToPaper from 'vue-html-to-paper';




import router from './router'
import store from './store'

const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
}

Vue.use(VueHtmlToPaper, options);
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
