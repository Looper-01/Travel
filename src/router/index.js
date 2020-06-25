import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/home/Home")
    },
    {
      path: "/city",
      name: "Come",
      component: () => import("@/pages/city/City")
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: () => import("@/pages/detail/Detail")
    }
  ],

  scrollBehavior(to, from, savePosition) {
    return { x: 0, y: 0 };
  }
});
