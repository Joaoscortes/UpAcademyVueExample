<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <a class="navbar-brand">Vue Example</a>
      <ul class="navbar-nav mr-auto mt-2 mt-sm-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/app/users">Users</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/app/table">Table</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/app/form">Form</router-link>
        </li>
      </ul>
      <span class="my-2 my-sm-0">
        <router-link class="nav-link" v-if="!$store.state.user.authenticated" to="/login">Login</router-link>
        <button
          class="nav-link btn btn-danger"
          @click="logout"
          v-if="$store.state.user.authenticated"
        >Logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.router-link-active {
  background-color: #6c757d;
  color: white !important;
}
</style>