<template>
  <div>
    <h3>Login page</h3>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="email" name="email" class="" />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" v-model="password" name="password" />
      </div>
      <div>
        <button class="btn">
          Login
        </button>
        <router-link to="/register" class=" btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    handleLogin() {
      console.log(this.password);
      console.log(this.email);
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", user);

      // dispatch action to store
    },
  },
};
</script>

<style scoped lang="scss">
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
}

input {
  border-radius: 3px;
  border: 1px solid rgb(241, 241, 244);
  background: rgb(241, 242, 247);
  padding: 8px 12px;
  width: 100%;
}

.btn {
  padding: 10px 15px;
  border: 0px;
  line-height: 1;
  border-radius: 3px;
  background: rgb(63, 81, 181);
  color: white;
  margin-right: 20px;
}
</style>
