<template>
  <div class="layout">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Layout",
  components: {
    Navbar
  }
};
</script>

<style>
</style>
