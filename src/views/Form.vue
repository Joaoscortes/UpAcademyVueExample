<template>
  <div class="userform">
    <UserForm v-on:new-user="addUser"></UserForm>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
export default {
  components: {
    UserForm
  },
  data() {
    return {
      users: this.$store.state.users
    };
  },
  methods: {
    addUser: function(newUser) {
      this.users.push(newUser);
    }
  }
};
</script>

<style>
</style>
