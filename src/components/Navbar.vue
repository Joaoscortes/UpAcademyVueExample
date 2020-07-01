<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav mr-auto mt-2 mt-sm-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/table">Table</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user.authenticated">
          <router-link class="nav-link" to="/form">Form</router-link>
        </li>
      </ul>
      <span class="my-2 my-sm-0">
        <router-link class="nav-link" v-if="!$store.state.user.authenticated" to="/login">Login</router-link>
      </span>
    </div>
  </nav>
</template>