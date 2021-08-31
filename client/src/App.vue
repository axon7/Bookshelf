<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reading-list">Reading list</router-link> |
      <router-link to="/finished-books">Finished books</router-link>
      <div>
        <template v-if="isAuthenticated">
          You are logged in
          <router-link to="/login" @click="logout">Logout</router-link>
        </template>
        <template v-else>
          <router-link to="/login">Login</router-link> |
          <router-link to="/register">Register</router-link>
        </template>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.authenticated;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
