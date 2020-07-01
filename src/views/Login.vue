<template>
  <div
    class="container"
    style="
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
"
  >
    <form>
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input
          v-model="input.username"
          type="text"
          class="form-control"
          id="inputUsername"
          aria-describedby="emailHelp"
          placeholder="Enter Usernane"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          v-model="input.password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Enter Password"
        />
      </div>
      <button @click="login()" type="submit" class="btn btn-primary">Log In</button>
    </form>
    <div id="formFooter">
      <router-link to="/">Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "admin") {
        this.$store.commit("setAuthentication", true);
        this.$router.push("/");
      } else {
        console.log("The username and / or password is incorrect");
      }
    }
  }
};
</script>

<style>
</style>