import axios from "axios";

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
        let res = await axios.post("/api/auth/login", user);
        commit("login_success", res.data.user);
      } catch (err) {
        commit("login_error", err);
      }
    },
  },
  mutations: {
    login_req(state) {
      state.error = null;
      state.status = "loading";
    },
    login_success(state, user) {
      state.error = null;
      state.status = "success";
      state.user = user;
    },
    login_error(state, err) {
      state.error = err;
    },
  },
};
