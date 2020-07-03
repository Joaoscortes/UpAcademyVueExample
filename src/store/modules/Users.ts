import axios from "axios";

import { Module } from "vuex";

const users: Module<any, any> = {
  state: {
    data: new Array()
  },

  getters: {
    getUsers: (state) => {
      return state.data
    },
    userIndex: (state, getters) => (id: any) => {
      return getters.getUsers.findIndex((user: any) => user.id === id)
    },
  },

  mutations: {
    setUsers(state, users) {
      state.data = users;
    },
    addUser(state, user: any) {
      state.data.push(user);
    },
    deleteUserByIndex(state, index) {
      state.data.splice(index, 1);
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
    }
  }
};

export default users;