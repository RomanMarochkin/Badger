import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Favorite from './views/Favorite.vue'
import Cart from './views/Cart.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/pizza',
    component: Shop,
    props: { 
      pageName: 'pizza' 
    },
  },
  {
    path: '/soup',
    component: Shop,
    props: { 
      pageName: 'soup' 
    },
  },
  {
    path: '/salad',
    component: Shop,
    props: { 
      pageName: 'salad' 
    },
  },
  {
    path: '/sushi',
    component: Shop,
    props: { 
      pageName: 'sushi' 
    },
  },
  {
    path: '/hotdishes',
    component: Shop,
    props: { 
      pageName: 'hotdishes' 
    },
  },
  {
    path: '/dessert',
    component: Shop,
    props: { 
      pageName: 'dessert' 
    },
  },
  {
    path: '/cocktails',
    component: Shop,
    props: { 
      pageName: 'cocktails' 
    },
  },
  {
    path: '/favorite',
    component: Favorite,
  },
  {
    path: '/cart',
    component: Cart,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
