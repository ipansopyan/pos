import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import globalAxios from 'axios'
import router from '../router'



Vue.use(Vuex)

const auth = {
    state: {
        token: null,
        role: null,
        name: null,
        id: null,
        error: null

    },
    mutations: {
        authUser(state, userData) {
            state.token = userData.token
            state.role = userData.role
            state.name = userData.name
            state.id = userData.id
        },
    },
    actions: {
        signin({ state, commit, dispatch }, authData) {
            axios.post('/api/auth/login', {
                email: authData.email,
                password: authData.password,
            }).then(res => {
                    commit('authUser', {
                        token: res.data.token,
                        role: res.data.role,
                        name: res.data.name,
                        id: res.data.id,
                    })

                    const now = new Date()
                    const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000)
                    localStorage.setItem('token', res.data.access_token)
                    localStorage.setItem('userId', res.data.role)
                    localStorage.setItem('localId', res.data.id)
                    localStorage.setItem('name', res.data.name)
                    localStorage.setItem('expirationDate', expirationDate)

                    router.push('admin')


                })
                .catch(error =>
                    commit('error', {
                        error: error.response.data.error
                    }),
                )
        }
    },
    getters: {

    },
}

export default auth