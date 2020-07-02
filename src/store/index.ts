import Vue from 'vue'
import Vuex from 'vuex'
// npm i --save axios
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: new Array(),
    user: {
      authenticated: false,
      token: localStorage.getItem('token') || '',
      info: {}
    }
  },
  getters: {
    getUsers: (state) => {
      return state.users
    },
    userIndex: (state, getters) => (id: any) => {
      return getters.getUsers.findIndex((user: any) => user.id === id)
    },
    getToken: (state) => {
      return state.user.token;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setAuthentication(state, status) {
      state.user.authenticated = status;
    },
    setUser(state, user) {
      state.user.info = user;
      state.user.token = user.id;
    },
    setToken(state, token) {
      state.user.token = token;
    },
    addUser(state, user: any) {
      state.users.push(user);
    },
    deleteUserByIndex(state, index) {
      state.users.splice(index, 1);
    }
  },
  actions: {
    getAllUsers({ commit }) {
      axios
        .get("https://upacademytinder.herokuapp.com/api/users")
        .then(response => {
          commit('setUsers', response.data)
        })
        .catch(error => console.error(error));
    },
    addUser({ commit }, user) {
      axios
        .post(`https://upacademytinder.herokuapp.com/api/users/`, user)
        .then((response) => {
          commit('addUser', response.data)
        })
        .catch(error => console.error(error));
    },
    deleteUserById({ commit }, id) {
      axios
        .delete(`https://upacademytinder.herokuapp.com/api/users/${id}`)
        .then(() => {
          commit('deleteUserByIndex', this.getters.userIndex(id))
        })
        .catch(error => console.error(error));
    },
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://upacademytinder.herokuapp.com/api/users?filter={"where":{"username":"${username}"}}`)
          .then(response => {
            if (response.data.length == 0) {
              reject("Invalid Username")
            }
            localStorage.setItem('token', response.data[0].username)
            commit('setUser', response.data[0]);
            commit("setAuthentication", true);
            commit("setToken", response.data[0].username);
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
      commit('setUser', {});
      commit("setAuthentication", false);
      commit("setToken", "");
      localStorage.removeItem('token')
    }
  },
  modules: {
  }
})
