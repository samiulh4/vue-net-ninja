<template>
  <form @submit.prevent="handleBlogSubmit">
    <label>Blog Title :</label>
    <input type="text" class="form-control" v-model="blogTitle" />
    <label>Blog Description :</label>
    <textarea
      rows="4"
      cols="50"
      class="form-control"
      v-model="blogDescription"
    ></textarea>
    <div class="button-submit">
      <button type="submit" class="button-green">Save</button>
    </div>
  </form>
</template>
<script>
import axios from "axios";
export default {
  props: ["blogData"],
  data() {
    return {
      blogId: this.blogData.id,
      blogTitle: this.blogData.title,
      blogDescription: this.blogData.description,
    };
  },
  methods: {
    handleBlogSubmit() {
      if (this.blogId) {
        this.updateBlog();
      } else {
        this.saveBlog();
      }
    },
    updateBlog() {
      const blogId = this.blogId;
      const updatedBlog = {
        title: this.blogTitle,
        description: this.blogDescription,
      };
      axios
        .put(`http://localhost:3000/blogs/${blogId}`, updatedBlog)
        .then((response) => {
          //console.log("Blog updated successfully:", response.data);
          this.blogId = null;
          this.blogTitle = null;
          this.blogDescription = null;

          this.$emit("update-blog-content", response.data);
          alert("Blog updated successfully: " + blogId);
          this.closeModal();
        })
        .catch((error) => {
          console.error("Error updating blog:", error);
        });
    },
    saveBlog() {
      const blogId =
        Date.now().toString() + Math.random().toString(36).substring(2, 10);
      const newBlog = {
        id: blogId,
        title: this.blogTitle,
        description: this.blogDescription,
      };
      axios
        .post("http://localhost:3000/blogs", newBlog)
        .then((response) => {
          //console.log("Blog saved successfully:", response.data);
          this.blogId = null;
          this.blogTitle = null;
          this.blogDescription = null;

          this.$emit("update-blog-content", response.data);
          alert("Blog saved successfully.");
          this.closeModal();
        })
        .catch((error) => {
          console.error("Error saving item:", error);
          alert("Error saving blog !");
        });
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
<style scoped>
.button-submit {
  width: 100%;
  padding: 15px 0;
}
.button-submit button {
  float: right;
}
</style>