<template>
  <div class="userform">
    <UserForm v-on:new-user="addUser"></UserForm>
    <MyTable :users="users" v-on:delete-user-by-id="deleteUserById"></MyTable>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import MyTable from "@/components/UserTable.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserForm,
    MyTable
  },
  methods: {
    addUser: function(newUser) {
      this.$store.dispatch("addUser", newUser);
    },
    deleteUserById: function(id) {
      this.$store.dispatch("deleteUserById", id);
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
