<template>
  <div>
    <p>Login page</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" name="username" class="" />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" v-model="password" name="password" />
      </div>
      <div class="">
        <button class="">
          Login
        </button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss">
.form-group {
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}

input {
  border-radius: 3px;
  border: 1px solid rgb(241, 241, 244);
  background: rgb(241, 242, 247);
  padding: 8px 12px;
}
</style>
