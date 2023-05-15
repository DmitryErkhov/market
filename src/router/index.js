import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import BasketVue from '../views/BasketVue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketVue,
  },
]

const router = new VueRouter({
  routes
})

export default router
