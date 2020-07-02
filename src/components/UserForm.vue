<template>
  <div class="container">
    <hr />
    <button class="col-12 btn btn-secondary" @click="toggle">Add User</button>
    <form @submit.prevent="onAddUser" v-if="showForm" class="mt-3">
      <div class="form-group row">
        <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
          <input
            v-model="formUser.username"
            type="name"
            class="form-control"
            id="inputUsername"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input v-model="formUser.name" type="name" class="form-control" id="inputName" required />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            v-model="formUser.email"
            type="email"
            class="form-control"
            id="inputEmail"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input
            v-model="formUser.password"
            type=" password"
            class="form-control"
            id="inputPassword"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Role</label>
        <div class="col-sm-10">
          <select v-model="formUser.role" class="form-control">
            <option selected value="user">Normal</option>
            <option value="super">Extra</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
      <div class="text-center">
        <input type="submit" value="Enviar" class="btn btn-success col-4" />
      </div>
    </form>
    <hr />
  </div>
</template>

<script>
import User from "../models/User.ts";
export default {
  props: {
    disableColapse: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      showForm: this.disableColapse ? true : false,
      formUser: new User()
    };
  },
  methods: {
    onAddUser: function(event) {
      this.$emit("new-user", this.formUser);
      this.formUser = new User();
    },
    toggle: function() {
      if (!this.disableColapse) {
        this.showForm = !this.showForm;
      }
    }
  },
  created() {
    this.formUser.role = "user";
  }
};
</script>

<style>
</style>