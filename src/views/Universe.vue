<template>
  <div>
    <h2>Universe</h2>
    <router-link class="app__link" to="/universe/films">Films</router-link>
    <router-link class="app__link" to="/universe/books">Books</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Universe"
};
</script>

<style scoped>
</style>