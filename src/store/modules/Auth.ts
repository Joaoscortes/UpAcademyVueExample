import { Module } from "vuex";

import userApi from '@/api/User'

const auth: Module<any, any> = {
  state: {
    authenticated: false,
    token: localStorage.getItem('token') || '',
    info: {}
  },

  getters: {
    getToken: (state) => {
      return state.token;
    },
    getAuthenticated: (state) => {
      return state.authenticated;
    }
  },

  mutations: {
    loggedIn(state, user) {
      state.authenticated = true;
      state.info = user;
      state.token = user.username;
      localStorage.setItem('token', user.username)
    },

    loggedOut(state) {
      state.authenticated = false;
      state.info = {};
      state.token = "";
      localStorage.removeItem('token');
    }
  },

  actions: {
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        userApi.login(username)
          .then(response => {
            commit('loggedIn', response);
            this.dispatch('getAllUsers');
            resolve();
          })
          .catch(error => {
            localStorage.removeItem('token')
            reject(error)
          });

      })
    },
    logout({ commit }) {
      commit('loggedOut');
    }
  }
};

export default auth;