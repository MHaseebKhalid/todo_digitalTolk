import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/Layout.vue"),
    children: [
      {
        path: "/task",
        name: "task",
        component: () =>
          import(/* webpackChunkName: "Task" */ "../views/Screens/Task.vue"),
      },
      {
        path: "/location",
        name: "location",
        component: () =>
          import(
            /* webpackChunkName: "Lcoation" */ "../views/Screens/Location.vue"
          ),
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/pages/auth/Login.vue"),
  },

  {
    path: "*",
    redirect: "/",
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, _, next) => {
//   console.log(to);
// });

export default router;
