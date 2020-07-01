<template>
  <div class="table">
    <MyTable :users="users" v-on:delete-user-by-index="deleteUserByIndex"></MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/UserTable.vue";
export default {
  components: {
    MyTable
  },
  data() {
    return {
      users: this.$store.state.users
    };
  },
  methods: {
    deleteUserByIndex: function(index) {
      this.users.splice(index, 1);
    },
    getDataFromApiWithAxios: function() {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=Harry")
        .then(response => {
          this.afterDone(response);
        })
        .catch(error => console.log(error));
    },
    postDataToApiWithAxios: function() {
      axios
        .post("https://upacademytinder.herokuapp.com/api/users", {
          username: "qwerwtyuiuytrewqwertyu"
        })
        .then(response => {
          this.afterDone(response);
        })
        .catch(error => console.log(error));
    },
    afterDone: function(params) {
      console.log(params);
    }
  }
};
</script>

<style>
</style>