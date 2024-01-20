<template>
  <Navbar />
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar.vue'
export default {
  components: { Navbar },
  methods:{
    redirect(){
      this.$router.push({ name: 'home' });
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }  
}
</script>


