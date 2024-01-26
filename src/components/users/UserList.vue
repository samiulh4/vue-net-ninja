<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Ref</th>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="users.length">
        <tr v-for="user in users" :key="user.id">
          <td class="table-ref">{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>Type</td>
          <td>Action</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["users"],
};
</script>