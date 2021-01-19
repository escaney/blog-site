<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <TagCloud :posts="posts" />
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

import getPosts from "@/composables/getPosts";

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },

  setup() {
    const { posts, error, load } = getPosts('http://localhost:3000/posts')

    load()
    
    return { posts, error }
  }
}
</script>

<style>
  body {
    background: #f2f2f2;
    width: 700px;
    margin: 40px;
  }
  .clicked {
    color: red;
  }

  button {
    border: 0;
    background-color: green;
    color: white;
    width: 100px;
    padding: 10px 5px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
