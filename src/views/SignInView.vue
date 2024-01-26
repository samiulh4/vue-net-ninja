<template>
  <div class="signup">
    <h2 class="text-center">SignIn Form</h2>
    <form @submit.prevent="signInUser">
      <div class="form-group">
        <label>E-mail</label>
        <input type="text" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" v-model="password" />
      </div>
      <div class="button-submit">
        <button type="submit" class="button-green">Sign In</button>
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
    signInUser() {
      if (!this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }
      fetch(`http://localhost:3000/users?email=${this.email}`)
      .then(response => response.json())
      .then(data => {
        if(data[0].password === this.password){
            localStorage.setItem("auth_email", this.email);
            this.$store.dispatch('signInSuccess');
            alert('Successfully Signin');
            this.$router.push({ name: "home" });
        }else{
            alert('Invalid Crediential !');
        }
      })
      .catch((error) => console.log(error.message));

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