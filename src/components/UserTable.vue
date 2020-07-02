<template>
  <div class="table">
    <MyFilter :filter="filter" />
    <div class="table-responsive container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user) in filterUsers" :key="user.id">
            <td>{{user.username}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.password}}</td>
            <td>
              <button
                @click="onDeleteUserById(user.id)"
                class="btn btn-danger"
                v-if="user.role != 'admin'"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MyFilter from "@/components/Filter.vue";
export default {
  components: {
    MyFilter
  },
  props: {
    users: Array
  },
  data() {
    return {
      filter: {
        value: "",
        key: "username"
      }
    };
  },
  methods: {
    onDeleteUserById: function(id) {
      this.$emit("delete-user-by-id", id);
    }
  },
  computed: {
    filterUsers: function() {
      if (this.filter.value != "") {
        return this.users.filter(item =>
          item[this.filter.key]
            .toLowerCase()
            .includes(this.filter.value.toLowerCase())
        );
      } else {
        return this.users;
      }
    }
  }
};
</script>

<style>
</style>