import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Computed_2.vue'
import { useUserStore } from "@/store/user";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: { newsletterPopup: false }
  },
  {
    path: '/about/:id',
    name: 'About.Show',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutShow.vue'),
    props: { default: true, sidebar: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useUserStore()
})

export default router
