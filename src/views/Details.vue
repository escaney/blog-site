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
    <button class="delete-button" @click="handleDelete">Delete</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
  <button class="back-btn" @click="router.go(-1)">&larr; Back</button>
</template>

<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  props: [ 'id' ],
  components: { Spinner, TagCloud },

  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const handleDelete = async () => {
      await projectFirestore.collection('posts')
        .doc(props.id)
        .delete()

      router.push({ name: 'Home'})
    }

    const { post, error, load } = getPost(route.params.id)

    load()

    return { post, error, router, handleDelete }
  }
}
</script>

<style>
  .delete-button {
    margin: 25px 0;
    width: auto;
    background-color: red;
  }

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
    width: 75%;
    color: white;
  }

  .single-post h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    background: darkblue;
    z-index: -1;
    margin-left: -20px;
  }
</style>