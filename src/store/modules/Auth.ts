import axios from "axios";

import { Module } from "vuex";

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
        axios
          .get(`https://upacademytinder.herokuapp.com/api/users?filter={"where":{"username":"${username}"}}`)
          .then(response => {
            if (response.data.length == 0) {
              reject("Invalid Username")
            }
            commit('loggedIn', response.data[0]);
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