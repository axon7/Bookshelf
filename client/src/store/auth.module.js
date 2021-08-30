import axios from "axios";
import router from "../router/index";
export const auth = {
  state: {
    user: {},
    authenticated: false,
    status: "",
  },
  actions: {
    async login({ commit }, user) {
      commit("login_req");

      try {
        let res = await axios.post("/api/auth/login", {
          email: user.email,
          password: user.password,
        });

        console.log(res);

        if (res.data.success) {
          const token = res.data.token;
          const user = res.data.user;
          console.log(user);
          commit("login_success", {
            token,
            user,
          });

          // Store the token into the localstorage
          localStorage.setItem("token", token);
          // Set the axios defaults
          axios.defaults.headers.common["Authorization"] = token;

          router.push("/");
        }
      } catch (err) {
        console.log("error");
        commit("login_error", err);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      commit("logout");
    },
  },
  mutations: {
    login_req(state) {
      state.error = null;
      state.status = "loading";
    },
    login_success(state, payload) {
      console.log(payload);
      state.error = null;
      state.status = "success";
      state.authenticated = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    login_error(state, err) {
      state.error = err;
    },
    logout(state) {
      state.authenticated = false;
      state.user = "";
      state.token = "";
      state.status = "";
    },
  },
};
