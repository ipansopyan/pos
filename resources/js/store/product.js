import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import globalAxios from 'axios'
import router from '../router'

Vue.use(Vuex)

const product = {
    state: {
        product: {},
    },
    mutations: {
        getProduct(state, data) {
            state.product = data.product
        }
    },
    actions: {
        productIm({ state, dispatch }, formData) {
            axios.post("/api/imports", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => {
                    dispatch('allproduct')
                })
                .catch(function () {
                    console.log("FAILURE!!");
                });
        },

        productEx() {
            let url = '/api/products/export'
            axios({
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then((res) => {
                router.go('/api/products/export')
            }).catch(error => {
                console.log('error');
            })
        },
        allproduct({ state, commit }, product) {
            let url = '/api/products';
            axios({
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then((res) => {
                commit('getProduct', {
                    product: res.data
                })
            }).catch(error => {
                console.log('error');
            })
        },
        addProduct({ state, commit, dispatch }, productData) {

            axios.post('/api/product/create', {
                name: productData.name,
                kode: productData.kode,
                jml: productData.jml,
                count: productData.count,
                user_id: 1
            }).then(res => {
                dispatch('allproduct')
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
        }
    },
    getters: {
        getProduct(state) {
            return state.product
        }
    }
}

export default product