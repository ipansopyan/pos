import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import globalAxios from 'axios'
import router from '../router'

Vue.use(Vuex)

const cart = {
    state: {
        cart: [],
        cartCount: 0,
    },
    mutations: {
        addToCart(state, item) {
            let itemInCart = state.cart.filter(product => product.id == item.id);
            let isItemInCart = itemInCart.length > 0;
            // state.cart.push(Vue.util.extend({}, item));
            if (isItemInCart === false) {
                state.cart.push(Vue.util.extend({}, item));
            } else {
                itemInCart[0].qty += item.qty;
            }
            item.qty = 1;
            
        }

    },
    actions: {
        addToCart(item) {
            this.$store.commit('addtoCart', item)
        }
    },
    getters: {
        getCartItem(state) {
            return state.cart
        }
    }
}

export default cart;