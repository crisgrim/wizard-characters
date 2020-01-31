<template>
  <div id="app">
    <the-header/>
    <div class="main-app">
      <router-view/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.main-app {
  margin-bottom: 20px;
}
.app__link {
  color: #000000;
  margin: 0 5px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
