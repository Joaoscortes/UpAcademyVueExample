<template>
  <div class="container">
    <hr />
    <button class="col-12 btn btn-primary" @click="showForm = !showForm">Add User</button>
    <form @submit="onAddUser" v-if="showForm" class="mt-3">
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
      <div class="text-center">
        <input type="submit" value="Enviar" class="btn btn-primary col-4" />
      </div>
    </form>
    <hr />
  </div>
</template>

<script>
import User from "../models/User.ts";
export default {
  data() {
    return {
      showForm: false,
      formUser: new User()
    };
  },
  methods: {
    onAddUser: function(event) {
      event.preventDefault();
      this.$emit("new-user", this.formUser);
      this.formUser = new User();
    }
  }
};
</script>

<style>
</style>