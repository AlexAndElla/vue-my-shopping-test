<template>
    <div class="sortInfo">
        <ul class="left">
            <li v-for="(item,index) in leftList" :key="item.id" :class="{'active': index == ind}" @click="getProductType(index)">
                {{item.name}}
            </li>
        </ul>
        <ul class="right">
            <li v-show="item.productType==ind" v-for="item in sortList" :key="item.productId" @click="goToProductInfo(item)">
                <div><img :src="item.productImgUrl"></div>
                <div>
                    <p>{{item.productName}}</p>
                    <p>￥{{item.productPrice}}</p>
                </div>
            </li>
        </ul>
        <Footer></Footer>
    </div>    
</template>
<script>
import store from '../vuex/store.js';
import Footer from '@/components/Footer';
export default {
    name: 'SortInfo',
    components: {
        Footer
    },
    store,
    data() {
        return {
            sortList: '',
            leftList: [
                {id: 1,name: '风景'},
                {id: 2,name: '商品'}
            ],
            ind: 0
        }
    },
    created() {
        if(this.$store.state.productData.length >　0) {
            this.sortList = this.$store.state.productData
        } else {
            this.getProductList();
        }
        let ind = this.$route.query.ind;
        if(ind) {
            this.ind = ind;
        }
    },
    methods: {
        getProductList(){
            this.$http.get('static/json/product.json').then(res=>{
                this.sortList = res.data.productList
                this.$store.commit('getProductData',res.data.productList);
            })
        },
        getProductType(index){
            this.ind = index;
        },
        goToProductInfo(item) {
            this.$router.push({
                path: '/ProductInfo',
                query: {
                    productId: item.productId,
                    productName: item.productName,
                    productPrice: item.productPrice,
                    productIntro: item.productIntro,
                    productImgUrl: item.productImgUrl,
                    productType: item.productType,
                    buyNum: item.buyNum,
                    buyCkecked: item.buyCkecked,
                    ifActivicity: item.ifActivicity,
                    ifInventory: item.ifInventory
                }
            })
        },
    }
}
</script>
<style scoped>
.sortInfo {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    background-color: #fff;
    display: flex;
}
.left {
    flex: 1;
    height: 100%;
    border-right: 1px solid #cccccc;
    background-color: #f5f5f5;
}
.left li {
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-top: .28rem;
    text-align: center;
    font-size: .2rem;
    color: #A5A5A5;
}
.left li.active {
    background-color: #fff;
}
.right {
    flex: 3;
    padding: 0 .15rem;
}
.right li {
    height: 1.68rem;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
}
.right li div:nth-child(1) {
    flex: 1;
    height: 1.5rem;
}
.right li div:nth-child(1) img {
    width: 100%;
}
.right li div:nth-child(2) {
    flex: 3;
    height: 1.5rem;
    margin-left: .2rem;
}
.right li div:nth-child(2) p:first-child {
    font-size: .24rem;
    margin-top: .13rem;
}
.right li div:nth-child(2) p:last-child {
    font-size: .26rem;
    line-height: 1;
    margin-top: .43rem;
    color: #ff0000;
}
</style>
