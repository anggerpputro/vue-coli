import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutDashboard from "@/layout/dashboard"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutDashboard,
    // redirect: "/daftar-pengaduan",
    // beforeEnter: (to, from, next) => {
    //   if (isAuthenticated()) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
    children: [
      {
        path: "akun",
        component: () => import("@/views/akun"),
        meta: { title: "Akun", icon: "dashboard", affix: true },
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
