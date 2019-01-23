<template>
    <div v-if="this.$store.state.accessData[0]" class="productList">
        <p class="title" v-if="titleName">{{titleName}}</p>
        <template v-if="titleName">
            <ul class="clearFix">
                <li v-for="item in productList" :key="item.productId" @click="goToProductInfo(item)">
                    <div class="headerArea">
                        <span v-if="item.ifInventory" class="inventoryMark">库存紧张</span>
                        <span v-if="item.ifActivicity" class="activicitying">活动中</span>
                        <img v-lazy="item.productImgUrl" alt="">
                    </div>
                    <h6>{{item.productName}}</h6>
                    <div class="footerArea clearFix">
                        <span class="price">￥{{item.productPrice}}</span>
                        <img src="../../static/img/home/buyCart.png" alt="">
                    </div>
                </li>
            </ul>
        </template>
        <template v-if="keyword">
            <ul class="clearFix" v-if="filterProductList.length > 0">
                <li v-for="item in filterProductList" :key="item.productId" @click="goToProductInfo(item)">
                    <div class="headerArea">
                        <span v-if="item.ifInventory" class="inventoryMark">库存紧张</span>
                        <span v-if="item.ifActivicity" class="activicitying">活动中</span>
                        <img v-lazy="item.productImgUrl" alt="">
                    </div>
                    <h6>{{item.productName}}</h6>
                    <div class="footerArea clearFix">
                        <span class="price">￥{{item.productPrice}}</span>
                        <img src="../../static/img/home/buyCart.png" alt="">
                    </div>
                </li>               
            </ul>
            <p v-else class="noData">无相关数据</p>
        </template>
    </div>
</template>
<script>
import store from '../vuex/store.js'
import { Lazyload } from 'mint-ui'
export default {
    name: 'ProductList',
    store,
    components: {
        Lazyload
    },
    props: ['titleName','keyword'],
    data() {
        return {
            productList: '',
        }
    },
    created() {
        if(this.$store.state.productData.length >　0) {
            this.productList = this.$store.state.productData
        } else {
            this.getProductList();
        }
        window.addEventListener('scroll', this.onScroll)
        
    },
    computed: {
        filterProductList(){
            if(this.keyword){
                return this.$store.state.productData.filter((item) => {
                    return item.productName.toLowerCase().indexOf(this.keyword) != -1
                })
            }
        }
    },
    methods: {
        onScroll() {
            //可滚动容器的高度
            let innerHeight = document.querySelector('#app').clientHeight;
            //屏幕尺寸高度
            let outerHeight = document.documentElement.clientHeight;
            //可滚动容器超出当前窗口显示范围的高度
            let scrollTop = document.documentElement.scrollTop;
            //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight <= (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
            if (innerHeight <= (outerHeight + scrollTop)) {
                //加载更多操作
                console.log("loadmore");
            }
        },
        getProductList(){
            this.$http.get('static/json/product.json').then(res=>{
                this.productList = res.data.productList
                this.$store.commit('getProductData',res.data.productList);
            })
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
.productList {
    background-color: #fff;
}
.title {
    line-height: 1;
    padding: .32rem .18rem 0;
    font-size: .28rem;
    font-weight: bold;
}
.noData {
    background-color: #fff;
    height: .5rem;
    line-height: .5rem;
    font-size: .28rem;
    color: #333333;
    text-align: center;
}
ul {
    padding: .32rem .18rem 0;
}
ul li {
    width: 45%;
    margin-right: 1%;
    border: solid 1px #ECECEC;
    border-radius: 5px;
    margin-bottom: .14rem;
    padding: .12rem;
    float: left;
}
ul li .headerArea {
    position: relative;
    overflow: hidden;
}
ul li .headerArea img {
    width: 100%;
}
ul li .headerArea .inventoryMark {
    position: absolute;
    top: 0;
    right: 0;
    font-size: .16rem;
    border: solid 1px #ff0000;
    color: #ff0000;
    border-radius: 5px;
}
ul li .headerArea .activicitying {
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(#fca2b5,#fc718f);
    color: #fff;
    font-size: .16rem;
    border-radius: 50%;
    width: .81rem;
    height: .81rem;
    line-height: .81rem;
    text-align: center;
}
        
ul li h6 {
    height: .64rem;
    font-size: .26rem;
    line-height: .33rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: .12rem 0 .3rem;
}
ul li .footerArea {
    margin-bottom: .2rem;
}
ul li .footerArea span {
    font-size: .28rem;
    float: left;
    color: #ff0000;
}
ul li .footerArea img {
    width: .5rem;
    height: .35rem;
    float: right;
}
ul li:nth-child(2){
    margin-right: 0;
}
</style>
