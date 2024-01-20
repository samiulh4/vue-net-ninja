<template>
  <div class="button-wrapper">
    <div class="button-grid">
      <button class="button-link" @click="redirect">Redirect</button>
      <button class="button-link" @click="back">Go Back</button>
      <button class="button-link" @click="forward">Go Forward</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>
<style scoped>
.button-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
}
.button-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
  justify-content: center;
}
.button-link{
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    padding: 5px 5px;
    width: 100px;
}
</style>