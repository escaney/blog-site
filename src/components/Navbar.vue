<template>
  <header>
    <h1>
      <span class="the">The </span> 
      <span class="big">big </span>
      <span class="blogfast">blogfast</span>
    </h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: #fca700;
    font-weight: 400;
  }

  .the {
    font-size: 40px;
  }

  .big {
    font-size: 60px;
    font-weight: bold;
  }

  .blogfast {
    margin-top: -25px;
    display: block;
  }

  a {
    display: inline-block;
    margin-right: 15px;
    padding: 10px 10px 3px;
    box-sizing: border-box;
    height: 35px;
    transition: background-color .2s ease;
  }

  a:hover {
    border-bottom: 2px solid white;
    background-color: white;
  }

  a.router-link-active {
    border-bottom: 2px solid darkblue;
  }
</style>