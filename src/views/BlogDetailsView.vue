<template>
  <div class="blog-wapper">
    <div class="blog-details" v-if="blog">
      <div class="title">
        <h1>{{ blog.title }}</h1>
      </div>
      <div class="image">
        <img :src="blogImage" alt="..." />
      </div>
      <div class="description">
        <p>{{ blog.description }}</p>
      </div>
    </div>
    <div class="loading-message alert-info text-center" v-else>Loading...</div>
  </div>
</template>
<script>
import defaultBlogImage from "../assets/img/default-blog.png";
export default {
  name: "blog_details",
  props: ["id"],
  data() {
    return {
      blogImage: defaultBlogImage,
      blog: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/blogs/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.blog = data;
        //console.log(this.id, this.blog.title); // Move the console.log inside the .then block
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>
.blog-details .title{
    padding: 15px 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 15px 0;
}
.blog-details h1 {
  font-family: "Dancing Script", "Siyamrupali", "Lateef";
  font-size: 24px;
  color: #42b983;
}
.blog-details .image{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.blog-details img{
    width: 100%;
    height: 300px;
}
.blog-details .description{
    padding: 15px 10px;
    margin: 15px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.blog-details p {
  font-family: "Roboto", "Siyamrupali", "Lateef";
  font-size: 20px;
  color: #2c3e50;
}
</style>