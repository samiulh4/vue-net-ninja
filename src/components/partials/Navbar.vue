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
        <li><router-link to="/blogs">Blogs</router-link></li>
      </ul>
    </div>
    <div class="nav-user">User Menu Section</div>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  /* Set background color */
  padding: 10px 20px;
  /* Adjust padding */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* Optional: Add a box shadow */
}

.nav-logo img {
  height: 40px;
  /* Adjust logo height */
}

.nav-menu {
  flex-grow: 1;
  /* Allow the menu to grow and take available space */
}

.nav-menu ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  /* Center the menu items horizontally */
}

.nav-menu ul li {
  margin-right: 15px;
  /* Adjust spacing between menu items */
}

.nav-menu ul li:last-child {
  margin-right: 0;
  /* Remove right margin from the last item */
}

.nav-menu ul li a {
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  /* Adjust padding for menu items */
  font-family: 'Alfa Slab One', cursive;
}

.nav-menu ul li a:hover {
  background-color: #42b983;
  font-weight: bold;
}

.nav-user {
  margin-left: auto;
  /* Push the rightmost element to the right */
}
</style>