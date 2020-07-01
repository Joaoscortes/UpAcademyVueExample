<template>
  <div class="container">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Filter</span>
      </div>
      <input type="text" class="form-control" v-model="filter.value" />
      <select v-model="filter.key" class="form-control">
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="password">Password</option>
      </select>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MyFilter",
  props: {
    filter: Object
  }
});
</script>

<style>
</style>