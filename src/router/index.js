import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: () => import('../views/Login.vue')
    },
    {
      path: "/about",
      component: () => import('../views/About.vue')
    },
    {
      path: "/wizard/:id",
      component: () => import('../views/Wizard.vue')
    },
    {
      path: "/favourite-wizards",
      component: () => import('../views/FavouriteWizards.vue')
    },
    {
      path: "/universe",
      component: () => import('../views/Universe.vue'),
      children: [
        {
          path: "films",
          component: () => import('../components/UniverseFilms.vue')
        },
        {
          path: "books",
          component: () => import('../components/UniverseBooks.vue')
        }
      ]
    },
    { path: "*", component: () => import('../views/PageNotFound.vue') }
  ]
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('user'));
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router;