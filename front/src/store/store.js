import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    hasEnteredLegend: localStorage.getItem('enteredLegend') || ''
  },
  mutations: {
    auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, user){
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    saveLegend({commit}, legend){
        return new Promise((resolve, reject) => {
          commit('save_legend_request')
          axios({url: 'http://localhost:3000/saveLegend', data: legend, method: 'POST' })
          .then(resp=>{
            const token = resp.data.token
            localStorage.setItem('enteredLegend', true)
            commit('save_legend_success', token, legend)
            resolve(resp)
          })
          .catch(err=>{
            commit('save_legend_error')
            localStorage.removeItem('enteredLegend')
            reject(err)
          })
        })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    enteredLegend: state => state.hasEnteredLegend
  }
})
export default store