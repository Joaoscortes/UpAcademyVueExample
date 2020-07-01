<template>
  <div class="userform">
    <div v-if="!loading">
      <UserForm v-on:new-user="addUser"></UserForm>
      <MyTable :users="users" v-on:delete-user-by-index="deleteUserByIndex"></MyTable>
    </div>
    <h5 v-else>Loading ...</h5>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import MyTable from "@/components/UserTable.vue";
export default {
  components: {
    UserForm,
    MyTable
  },
  data() {
    return {
      users: [],
      loading: true
    };
  },
  methods: {
    addUser: function(newUser) {
      this.users.push(newUser);
    },
    deleteUserByIndex: function(index) {
      this.users.splice(index, 1);
    }
  },
  mounted() {
    console.log("mounted () : it will executed before creating the component.");
    this.users = this.$store.state.users;
    this.loading = false;
  },
  created() {
    console.log(
      "created () : it will executed after creating the component for render."
    );
    // this.users = this.$store.state.users;
  }
};
</script>

<style>
</style>
