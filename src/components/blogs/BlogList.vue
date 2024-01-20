<template>
  <div class="blog-list-wrapper">
    <div class="blog-search-create">
      <div class="blog-search">Search</div>
      <div class="blog-add-new">
        <button
          class="button-green btn-add-new"
          @click="addNewBlog">
          Add New
        </button>
      </div>
    </div>
    <div class="table-responsive" v-if="blogs.length">
      <table class="table">
        <thead>
          <tr>
            <th>Ref</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
            <td class="table-ref">{{ blog.id }}</td>
            <td>{{ truncatedTitle(blog.title) }}</td>
            <td>
              <button class="button-green" @click="editBlogData(blog)">
                Edit
              </button>
              |
              <button class="button-red" @click="deleteBlog(blog.id)">
                Delete
              </button>
              |
              <router-link :to="'/blogs/details/' + blog.id">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="blog-list-message alert-error text-center">
      No record found for Blog !
    </div>
  </div>
  <teleport to="#modal" v-if="showModal">
    <Modal @close-modal="toggleModal">
      <template v-slot:header>
        <h1 class="text-center color-vue-1">Blog Modal</h1>
      </template>

      <template v-if="modalContent === 'message'">
        <Message />
      </template>
      <template v-else>
        <BlogForm
          :blogData="blogData"
          @close-modal="toggleModal"
          @update-blog-content="updateBlogContent"
        />
      </template>

      <template v-slot:footer>
        <button class="button-red" @click="toggleModal">Close</button>
      </template>
    </Modal>
  </teleport>
</template>
<script>
import Modal from "../partials/Modal.vue";
import Message from "../partials/Message.vue";
import BlogForm from "./BlogForm.vue";

import axios from "axios";

export default {
  components: { Modal, Message, BlogForm },
  data() {
    return {
      showModal: false,
      modalContent: "message",
      blogs: [],
      blogData: {
        id: null,
        title: null,
        description: null,
      },
    };
  },
  mounted() {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => (this.blogs = data))
      .catch((error) => console.log(error.message));
  },
  methods: {
    deleteBlog(id) {
      const blogId = id;
      if (confirm("Are you sure for delete ?")) {
        axios
          .delete(`http://localhost:3000/blogs/${blogId}`)
          .then(() => {
            console.log("Blog deleted successfully");
            const index = this.blogs.findIndex((blog) => blog.id === blogId);
            if (index !== -1) {
              this.blogs.splice(index, 1);
            }
          })
          .catch((error) => {
            console.error("Error deleting blog:", error);
          });
      } else {
        return false;
      }
    },
    editBlogData(blog) {
    
      this.blogData.id = blog.id;
      this.blogData.title = blog.title;
      this.blogData.description = blog.description;
 
      this.modalContent = "form";
      this.toggleModal();
    },
    addNewBlog()
    {
      this.blogData.id = null;
      this.blogData.title = null;
      this.blogData.description = null;

      this.modalContent = "form";
      this.toggleModal();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    truncatedTitle(title) {
      const maxLength = 50;
      return title.length > maxLength
        ? title.slice(0, maxLength) + "..."
        : title;
    },
    updateBlogContent(updatedBlog) {
      const index = this.blogs.findIndex((blog) => blog.id === updatedBlog.id);
      if (index !== -1) {
        this.blogs[index] = updatedBlog;
      }else{
        this.blogs.unshift(updatedBlog);
      }
    },
  },
};
</script>
<style scoped>
.blog-add-search{
  width: 100%;
}
.blog-add-new{
  width: 100%;
}
.blog-add-new .btn-add-new {
float: right !important;
}
.blog-list-message {
  margin-top: 8px;
}
.table-ref {
  font-family: "Rubik Iso", cursive;
  color: #42b983;
}
</style>
