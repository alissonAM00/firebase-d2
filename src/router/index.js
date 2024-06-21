import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
  },
  {
    path: "/priv",
    name: "priv",
    component: () => import("../views/PrivView.vue"),
    meta: {
      login: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  let authRequired = to.meta.login;
  let user = store.state.user;

  if (authRequired) {
    if (user) {
      next();
    } else {
      alert("Para acceder a este componente debes estar autenticado");
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
