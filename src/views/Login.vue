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
      <button @click.prevent="login()" type="submit" class="btn btn-primary">Log In</button>
    </form>
    <div id="formFooter">
      <router-link to="/home">Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: ""
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.input.username)
        .then(() => this.$router.push("/"))
        .catch(err => console.error(err));
    }
  },
  created() {
    if (!!this.$store.getters.getToken) {
      this.input.username = this.$store.getters.getToken;
      this.login();
    }
  }
};
</script>

<style>
</style>