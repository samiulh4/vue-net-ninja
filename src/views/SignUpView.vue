<template>
  <div class="signup">
    <h2 class="text-center">Signup Form</h2>
    <form @submit.prevent="storeUser">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>E-mail</label>
        <input type="text" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" v-model="password" />
      </div>
      <div class="button-submit">
        <button type="submit" class="button-green">Sign Up</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUpView",
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    checkIfUserExists(email) {
      return axios
        .get(`http://localhost:3000/users?email=${email}`)
        .then((response) => response.data.length > 0)
        .catch((error) => {
          //console.error("Error checking user existence:", error);
          throw error; // Rethrow the error to propagate it further
        });
    },
    storeUser() {
      if (!this.name || !this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }
      this.checkIfUserExists(this.email)
        .then((userExists) => {
          if (userExists) {
            alert(
              "User with this email already exists. Please use a different email."
            );
          } else {
            const userId =
              Date.now().toString() +
              Math.random().toString(36).substring(2, 10);
            const newUser = {
              id: userId,
              name: this.name,
              email: this.email,
              password: this.password,
            };
            axios
              .post("http://localhost:3000/users", newUser)
              .then((response) => {
                this.name = null;
                this.email = null;
                this.password = null;
                alert("User sign up successfully.");
              })
              .catch((error) => {
                console.error("Error saving item:", error);
                alert("Error saving user !");
              });
          }
        })
        .catch((error) => {
          console.error("Error checking user existence:", error);
          alert("Error checking user existence!");
        });
    },
  },
};
</script>
<style scoped>
.signup {
  border: 1px solid #2c3e50;
  padding: 15px;
  border-radius: 10px;
  justify-items: center;
  justify-content: center;
}
.signup form {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
}

.signup input {
  width: 500px;
}
.form-group {
  padding: 10px 0 10px 0;
}
h2 {
  color: #42b983;
  font-family: "Alfa Slab One";
}
</style>