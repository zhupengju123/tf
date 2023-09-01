import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../views/Index.vue"),
    }, {
      path: '/twocar',
      component: () => import("../views/Two.vue")
    }, {
      path: '/newcar',
      component: () => import("../views/NewCar.vue")
    }, {
      path: '/sellcar',
      component: () => import("../views/SellCar.vue")
    },
    {
      path: '/finance',
      component: () => import("../views/Finance.vue")
    },
    {
      path: '/serve',
      component: () => import("../views/Serve.vue")
    }, {
      path: '/datails',
      component: () => import("../views/Datails.vue")
    }, {
      path: '/news',
      component: () => import("../views/News.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    return {
      el: "#x66"
    }
  }
})

export default router
