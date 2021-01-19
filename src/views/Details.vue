<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="single-post">
    <h2>{{post.title}}</h2>
    <p>{{ post.body }}</p>
    <span
      v-for="tag in post.tags" 
      :key="tag">
      #{{ tag }}
    </span>
  </div>
  <div v-else>
    <Spinner />
  </div>
  <button class="back-btn" @click="router.go(-1)">&larr; Back</button>
</template>

<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  props: [ 'id', 'posts' ],
  components: { Spinner, TagCloud },

  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const { post, error, load } = getPost('http://localhost:3000/posts/' + props.id)

    load()

    return { post, error, router }
  }
}
</script>

<style>
.back-btn {
  margin: 20px 0 0;
  background-color: transparent;
  color: black;
  text-transform: none;
  font-weight: 400;
  text-align: left;
  padding: 5px 10px;
  width: auto;
}
  .single-post {
    margin: 70px auto;
  }

  .single-post h2 {
    font-size: 26px;
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    color: white;
  }

  .single-post h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    display: block;
    background: darkblue;
    z-index: -1;
    margin-left: -20px;
  }
</style>