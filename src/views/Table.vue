<template>
  <div class="table">
    <MyTable :users="users" v-on:delete-user-by-id="deleteUserById"></MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/UserTable.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MyTable
  },
  methods: {
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