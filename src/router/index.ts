import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/book/:id",
    name: "BookView",
    component: () =>
      import(/* webpackChunkName: "bookView" */ "../views/BookView.vue"),
  },
  {
    path: "/reading-list",
    name: "ReadingList",
    component: () =>
      import(/* webpackChunkName: "readingList" */ "../views/ReadingList.vue"),
  },
  {
    path: "/finished-books",
    name: "FinishedBooks",
    component: () =>
      import(
        /* webpackChunkName: "finishedBooks" */ "../views/FinishedBooks.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
