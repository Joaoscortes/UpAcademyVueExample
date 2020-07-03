import axios from "axios";
import User from '@/models/User';

export default {
  login(username: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://upacademytinder.herokuapp.com/api/users?filter={"where":{"username":"${username}"}}`)
        .then(response => {
          if (response.data.length == 0) {
            reject("Invalid Username")
          }
          resolve(response.data[0]);
        })
        .catch(error => {
          reject(error)
        });
    })
  },
  get() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://upacademytinder.herokuapp.com/api/users")
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error));
    })
  },

  add(user: User) {
    return new Promise((resolve, reject) => {
      axios
        .post(`https://upacademytinder.herokuapp.com/api/users/`, user)
        .then((response) => {
          resolve(response.data)
        })
        .catch(error => reject(error));
    })
  },
  remove(id: string) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://upacademytinder.herokuapp.com/api/users/${id}`)
        .then((response) => {
          resolve(response.data.count)
        })
        .catch(error => reject(error));
    })
  }
}