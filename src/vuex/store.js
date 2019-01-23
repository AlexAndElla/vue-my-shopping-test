import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
    productData: [],
    accessData: [true,true,true],
}
let mutations = {
    getProductData(state,data){
        state.productData = data
    },
    getAccessData(state,data){
        state.accessData = data
    },
}

const store = new Vuex.Store({
    state,
    mutations,
})
export default store;