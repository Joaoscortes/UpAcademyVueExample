<template>
  <div class="table">
    <MyFilter :filter="filter" />
    <div class="table-responsive container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filterUsers" :key="index">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.password}}</td>
            <td>
              <button @click="onDeleteUserByIndex(index)" class="btn btn-danger">Delete</button>
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
        key: "name"
      }
    };
  },
  methods: {
    onDeleteUserByIndex: function(index) {
      this.$emit("delete-user-by-index", index);
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