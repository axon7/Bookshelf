import { createStore } from "vuex";
import { auth } from "./auth.module";
import { book } from "./book.module";

const store = createStore({
  modules: {
    auth,
    book,
  },
});

export default store;
