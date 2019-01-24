<template>
    <div class="search">
        <div class="searchInput">
            <input type="text" v-model="keywords" placeholder="请输入关键字">
            <button type="button" @click="searchProduct">搜索</button>
        </div>
        <div class="productList">
            <ProductList :keyword="keywords" ref="getProductList"></ProductList>
        </div>
    </div>
</template>
<script>
import ProductList from '@/components/ProductList'
import { Toast } from 'mint-ui'
export default {
    name: 'Search',
    components: {
        ProductList
    },
    data() {
        return {
            keywords: '',
        }
    },
    methods: {
        searchProduct() {
            if(!this.keywords) {
                Toast({
                    message: '请输入关键字!',
                    duration: 1000
                })
                this.$refs.getProductList.showFilterProductList = false
            } else {
                this.$refs.getProductList.showFilterProductList = true
            }
        }
    }
}
</script>
<style scoped>
.searchInput {
    background-color: #fff;
    height: .8rem;
    margin-bottom: .2rem;
    font-size: 0;
    padding-top: .2rem;
}
.searchInput input {
    width: 77%;
    margin-left: 5%;
    border-radius: .6rem;
    outline: none;
    padding-left: .2rem;
    font-size: .28rem;
    height: .6rem;
}
.searchInput button {
    font-size: .28rem;
    background-color: transparent;
    color: #333333;
    margin-left: .17rem;
    border: none;
    outline: none;
    background-color: transparent;
}
</style>

