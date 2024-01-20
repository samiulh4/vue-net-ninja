<template>
  <Navbar />
  <ButtonLink />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar.vue';
import ButtonLink from './components/partials/ButtonLink.vue';

export default {
  components: { Navbar, ButtonLink }  
}
</script>


