<template>
  <div class="user-list">
    <UserList :users="users"/>
  </div>
</template>
<script>
import UserList from "../components/users/UserList.vue";
export default {
  name: "UserView",
  components: { UserList },
  data(){
    return{
        users:[]
    }
  },
  mounted() {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(data => this.users = data)
      .catch(error => console.log(error.message));
  },
};
</script>