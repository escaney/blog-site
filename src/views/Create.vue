<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" required>
      <label for="details">Content</label>
      <textarea id="details" v-model="body" required></textarea>
      <label for="tags">Tags (hit enter)</label>
      <input @keydown.enter.prevent="handleKeydown" type="text" v-model="tag" id="tags">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "@/firebase/config";

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const handleKeydown = () => {
      
      if (!tags.value.includes(tag.value)) {
        // regex removes all whitespace
        tag.value = tag.value.replace(/\s/, '').toLowerCase()
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp()
      }

      const addPost = await projectFirestore.collection('posts').add(post);

      router.push({ name: 'Home' })
    }

    return { title, body, tag, tags, handleKeydown, handleSubmit }
  }
}
</script>

<style>
  form {
    background-color: white;
    padding: 40px 20px;
    margin: 100px 0;
    border-radius: 10px;
  }

  label {
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    text-align: left;
    margin: 10px 0 5px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    z-index: 0;
  }

  label::before {
    content: "";
    display: block;
    width: 25%;
    height: 80%;
    background: darkblue;
    position: absolute;
    top: 10px;
    left: -10px;
    z-index: -1;
    padding-right: 40px;
  }

  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    height: 300px;
  }

  button {
    padding: 10px 20px;
    width: 200px;
    display: block;
    margin: 20px auto;
    background-color: darkblue;
    font-weight: bold;
    text-transform: uppercase
  }

  .pill {
    display: inline-block;
    margin: 10px 5px;
    color: white;
    background-color: darkblue;
    padding: 5px 10px;
    border-radius: 4px;
  }
</style>