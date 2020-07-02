<template>
  <div class="userform">
    <UserForm v-on:new-user="addUser"></UserForm>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserForm
  },
  methods: {
    addUser: function(newUser) {
      this.$store.dispatch("addUser", newUser);
    }
  },
  computed: {
    ...mapGetters({
      users: "getUsers"
    })
  }
};
</script>

<style>
</style>
