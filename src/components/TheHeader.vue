<template>
  <div class="the-header">
    <h1 class="the-header__title">Wizards characters</h1>
    <router-link class="the-header__link" to="/">Home</router-link>
    <router-link class="the-header__link" to="/universe">Universe</router-link>
    <router-link class="the-header__link" to="/about">About</router-link>
    <router-link class="the-header__link" to="/favourite-wizards">Favourite Wizards</router-link>
    <button
      class="the-header__button"
      v-if="userIsAuthenticated"
      @click="logout">
        Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      userIsAuthenticated: false
    }
  },
  mounted() {
    this.isAuthenticated()
  },
  updated() {
    this.isAuthenticated()
  },
  methods: {
    isAuthenticated() {
      this.userIsAuthenticated = !!JSON.parse(localStorage.getItem('user'));
    },
    logout() {
      localStorage.removeItem('user')
      this.userIsAuthenticated = false
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped>
.the-header {
  background-color: #000000;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
}
.the-header__title {
  margin: 0 0 8px;
}
.the-header__button,
.the-header__link {
  border-bottom: 1px solid transparent;
  color: #ffffff;
  font-size: 16px;
  margin: 0 5px;
  padding: 5px;
}
.the-header__button {
  appearance: none;
  background-color: transparent;
  border: 0;
}
.router-link-exact-active {
  border-bottom: 1px solid #ffffff;
}
</style>