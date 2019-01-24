import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Personal from '@/components/Personal'
import ProductInfo from '@/components/ProductInfo'
import SortInfo from '@/components/SortInfo'
import BuyCart from '@/components/BuyCart'
import Search from '@/components/Search'
import E403 from '@/components/E403'
import Login from '@/components/Login'

Vue.use(Router)

const route = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Login,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
      meta: {permission: true}
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
    {
      path: '/E403',
      name: 'E403',
      component: E403,
    },
  ]
})
export default route;
