<template>
<div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <TagCloud :posts="posts" />
    <PostList :posts="postsWithTags" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";

import PostList from "@/components/PostList";
import TagCloud from "@/components/TagCloud";
import Spinner from "@/components/Spinner";

import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { PostList, Spinner, TagCloud },

  setup() {
    const route = useRoute()

    const { posts, error, load } = getPosts('http://localhost:3000/posts')

    load()

    const postsWithTags = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })

    return { posts, error, postsWithTags }
  }
}
</script>

<style>

</style>