import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { "name": "Joao Silva Cortes", "email": "joaoscortes@gmail.com", "password": "qwert" },
      { "name": "Ze Carlos", "email": "zecarlos@gmail.com", "password": "qwerty" },
      { "name": "Ze Manel", "email": "zemanel@gmail.com", "password": "qwerty" }
    ],
    user: {
      authenticated: false
    },
    auth: false
  },
  mutations: {
    setAuthentication(state, status) {
      state.user.authenticated = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
