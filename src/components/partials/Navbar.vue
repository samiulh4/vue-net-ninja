<template>
  <nav>
    <div class="nav-logo">
      <img alt="..." src="../../assets/img/logo.png" />
    </div>
    <div class="nav-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/">Contract</router-link></li>
        <li><router-link to="/users">User</router-link></li>
        <li><router-link to="/blogs">Blogs</router-link></li>
        <li><router-link to="/signup" v-if="!isLoggedIn">SignUp</router-link></li>
        <li><router-link to="/signin" v-if="!isLoggedIn">SignIn</router-link></li>
      </ul>
    </div>
    <div class="nav-user">
      <div class="user-menu">
        <div class="user-menu-header">
          <img
            class="user-menu-image"
            src="https://i.pinimg.com/474x/f1/da/a7/f1daa70c9e3343cebd66ac2342d5be3f.jpg"
            alt="..."
          />
          <button class="user-menu-btn" @click="toggleUserMenu">{{ auth_email }}</button>
        </div>
        <div class="user-menu-content" v-if="showUserMenu">
          <a href="#">Login</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>

    <!--./nav-user-->
  </nav>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    handleMenuClick() {
      // Close the user menu if the user clicks outside of it
      this.showUserMenu = false;
    },
  },
  computed: {
    ...mapState(['auth_email', 'isLoggedIn']),
  },
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-logo img {
  height: 40px;
}

.nav-menu {
  flex-grow: 1;
  /* Allow the menu to grow and take available space */
}

.nav-menu ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

.nav-menu ul li {
  margin-right: 15px;
}

.nav-menu ul li:last-child {
  margin-right: 0;
}

.nav-menu ul li a {
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  /* Adjust padding for menu items */
  font-family: "Alfa Slab One", cursive;
}

.nav-menu ul li a:hover {
  background-color: #42b983;
  font-weight: bold;
}

.nav-user {
  margin-left: auto;
  /* Push the rightmost element to the right */
}

.nav-user {
  margin-left: auto;
}

.user-menu {
  display: inline-block;
  position: relative;
}

.user-menu-header {
  display: flex;
  align-items: center;
}

.user-menu-btn {
  background-color: #42b983;
  color: #2c3e50;
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Alfa Slab One";
  border: 2px solid #2c3e50;
  border-radius: 10px;
}

.user-menu-content {
  position: absolute;
  background-color: #f9f9f9;
  width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
}

.user-menu-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.user-menu-content a:hover {
  background-color: #f1f1f1;
}

.user-menu-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px; /* Adjust margin as needed for spacing between image and button */
}
</style>