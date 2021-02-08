import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  bus
} from '../main';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/works:id',
    name: 'Works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Works.vue')
  }
]

function scrolltodiv(hash) {
  let element = document.querySelector(hash)
  element.scrollIntoView({
    behavior: "smooth",
    block: "end"
  });
}

const router = new VueRouter({
  linkExactActiveClass: "nav--active",
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash !== "") {
      setTimeout(() => scrolltodiv(to.hash), 1000)
      return {
        x: 0,
        y: 0
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  bus.$emit('CloseNav');
  if (from.name === null) {
    next();
  } else {
    bus.$emit('changepage');
    setTimeout(() => next(true), 1000);
  }
})

export default router
