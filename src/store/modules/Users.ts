import { Module } from "vuex";

import userApi from '@/api/User'

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
      userApi.get()
        .then(response => {
          commit('setUsers', response)
        })
        .catch(error => console.error(error));
    },
    addUser({ commit }, user) {
      userApi.add(user)
        .then((response) => {
          commit('addUser', response)
        })
        .catch(error => console.error(error));
    },
    deleteUserById({ commit }, id) {
      userApi.remove(id)
        .then((count) => {
          if (count == 1) {
            commit('deleteUserByIndex', this.getters.userIndex(id))
          }
        })
        .catch(error => console.error(error));
    }
  }
};

export default users;