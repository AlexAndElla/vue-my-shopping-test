import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Personal from '@/components/Personal'
import ProductInfo from '@/components/ProductInfo'
import SortInfo from '@/components/SortInfo'
import BuyCart from '@/components/BuyCart'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Home,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/ProductInfo',
      name: 'ProductInfo',
      component: ProductInfo
    },
    {
      path: '/SortInfo',
      name: 'SortInfo',
      component: SortInfo
    },
    {
      path: '/BuyCart',
      name: 'BuyCart',
      component: BuyCart,
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    },
  ]
})
