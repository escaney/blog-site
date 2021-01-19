import { ref } from "vue"

const getPosts = (uri) => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // simulated delay for loader
      // await new Promise(res => {
      //   setTimeout(res, 2000)
      // })

      let data = await fetch(uri)
      if (!data.ok) {
        throw Error('No data available')
      }
      posts.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts
