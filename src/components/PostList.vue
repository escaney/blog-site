<template>
  <div class="post-list">
    <h3>Posts</h3>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";

export default {
  props: [ 'posts' ],
  components: { SinglePost }
}
</script>

<style>
  h3 {
    text-align: left;
  }
</style>