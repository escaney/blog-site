<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div class="tag" v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag }}">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "@/composables/useTags";

export default {
  props: [ 'posts' ],

  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  }
}
</script>

<style scoped>
  h3 {
    padding-bottom: 10px;
    margin: 0  0 15px;
    border-bottom: 1px solid #ccc;
  }

  .tag-cloud {
    background: white;
    padding: 20px;
    margin: 15px 0;
    border: 2px solid darkblue;
    width: 40%;
  }
  .tag {
    display: inline-block;
    margin-right: 8px;
  }

  .tag a {
    transition: color .2s ease;
    color: #adadad;
  }

  .tag a:hover,
  a.router-link-active {
    color: #000;
  }
</style>