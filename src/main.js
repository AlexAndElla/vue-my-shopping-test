// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css' 
Vue.use(Mint);

import VueResource from 'vue-resource'
Vue.use(VueResource)

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    const username = localStorage.getItem('username');
    if(username){
        next()
        if(to.meta.permission) {
            username === "admin" ? next('/Personal'):next('/E403');
        }
    } else {
        if(to.path == '/Login'){
            next();
        } else {
            next('/Login');
        }
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
