<template>
  <div class="modal-wapper">
    <div class="modal">
      <div class="modal-header"><slot name="header"></slot></div>
      <div class="modal-body">
        <slot>Default content (if no slot passed in)</slot>
      </div>
      <div class="modal-footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      //this.$emit("close-modal");
    },
  },
};
</script>
<style scoped>
.modal-wapper {
  top: 0;
  position: fixed;

    right: 0;
    bottom: 0;
    left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 500px;
  margin: 200px auto;
  background: white;
  border-radius: 5px;
}
.modal-header {
  border-bottom: 1px solid #e9ecef;
  padding: 1rem;
  font-family: 'Alfa Slab One', cursive;
}
.modal-body {
  padding: 1rem;
}
.modal-footer {
  border-top: 1px solid #e9ecef;
  padding: 1rem;
}
</style>