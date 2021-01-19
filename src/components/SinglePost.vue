<template>
  <router-link :to="{ name: 'Details', params: { id: post.id }}">
    <div class="post">
        <h4>{{ post.title }} </h4>
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </router-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: [ 'post' ],

  setup(props){
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })

    return { snippet }
  }
}
</script>

<style>
  .post {
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color .2s ease-in-out;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover .post {
    background: darkblue;
    color: white;
  }

  .post h4 {
    font-size: 26px;
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
  }

</style>