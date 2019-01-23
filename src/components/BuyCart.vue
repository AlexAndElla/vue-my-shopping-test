<template>
    <div class="buyCart">
        <div class="header">
            <img src="../../static/img/car/operateCartImg.png" alt="">
            <span v-if="!isDelete" @click="isDeleteHandle">管理</span>
            <span v-if="isDelete" @click="isDeleteHandle">取消</span>
        </div>
        <div class="shoppingCartList">
            <ul>
                <li v-for="item in buyProductInfo" :key="item.productId">
                    <div class="shoppingCartBox">
                        <div class="shoppingCart">
                            <span class="checked" :class="{'active': item.buyCkecked}" @click="checkedThis(item)"></span>
                            <div class="shoppingImg"><img :src="item.productImgUrl" alt=""></div>
                            <div class="shoppingContent">
                                <p class="shoppingName">{{item.productName}}</p>
                                <div class="shoppingPriceAndNum">
                                    <h6>￥{{item.productPrice}}</h6>
                                    <div class="shoppingNum">
                                        <span class="reduceBtn" @click="reduceNum(item)">-</span>
                                        <span class="num">{{item.buyNum}}</span>
                                        <span class="addBtn" @click="addNum(item)">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="confirmOrDelete">
            <span @click="checkAll">
                <span class="checkedAll" :class="{'active': checkedAll}"></span>
                <span>全选</span>
            </span>
            <span v-if="!isDelete">合计：￥{{totalPrice}}</span>
            <button type="button" v-if="isDelete" @click="deleteProduct">确认删除</button>
            <button type="button" :disabled="totalSum==0" :class="{'disabled': totalSum==0}" v-if="!isDelete">结算({{totalSum}})</button>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import store from '../vuex/store.js';
import Footer from '@/components/Footer'
import { Toast } from 'mint-ui';
export default {
    name: 'BuyCart',
    store,
    components: {
        Footer
    },
    data() {
        return {
            isDelete: false,
            buyProductInfo:'',
            checkedArr: [],
            checkedAll: false
        }
    },
    created(){
        if(this.$store.state.productData.length >　0) {
            this.buyProductInfo = this.$store.state.productData
        } else {
            this.getProductList();
        }
        
    },
    computed:{
        totalPrice() {
            let price = 0;　　
            this.$store.state.productData.forEach(item => {
                if(item.buyCkecked) {
                    price += Number(item.productPrice) * Number(item.buyNum)
                }
            })
            return price
        },
        totalSum() {
            let total_sum = 0;
            this.$store.state.productData.forEach(item => {
                if(item.buyCkecked) {
                    total_sum += Number(item.buyNum);
                }
            })
            return total_sum
        }
    },
    watch: {
            'checkAll': {
                handler: function(val, oldVal) {
                    let num = 0;
                    for (let i = 0; i < val.length; i++) {
                        if(val[i].buyCkecked){
                            num++
                        }
                    }
                    if (val.length === num) {
                        this.checkedAll = true
                    } else {
                        this.checkedAll = false;
                    }
                },
                deep: true
            }
        },
    methods: {
        getProductList(){
            this.$http.get('static/json/product.json').then(res=>{
                this.buyProductInfo = res.data.productList;
                this.$store.commit('getProductData',res.data.productList);
            })
        },
        isDeleteHandle() {
            this.isDelete = !this.isDelete
        },
        addNum(item) {
            item.buyNum ++;
            if(item.buyNum > 10) {
                item.buyNum = 10;
                Toast({
                    message: '宝贝不能再多了!',
                    duration: 1000
                })
            } 
        },
        reduceNum(item) {
            item.buyNum --;
            if(item.buyNum < 1) {
                item.buyNum = 1;
                Toast({
                    message: '宝贝不能再少了!',
                    duration: 1000
                })
            }
        },
        checkAll() {
            this.checkedAll = !this.checkedAll 
            if (this.checkedAll) {
                this.buyProductInfo.forEach(function (item) {
                    item.buyCkecked = true
                })
            } else {
                this.buyProductInfo.forEach(function (item) {
                    item.buyCkecked = false
                })
            }
        },
        checkedThis(item) {
            if(item.buyCkecked) {
                item.buyCkecked = false
                this.checkedArr.pop()
            } else {
                item.buyCkecked = true
                this.checkedArr.push(item)
            }
            if(this.checkedArr.length == this.buyProductInfo.length) {
                this.checkedAll = true
            } else {
                this.checkedAll = false
            }
        },
        deleteProduct(){
            if(this.checkedArr.length > 0) {
                Toast({
                    message: '删除成功',
                    iconClass: 'mintui mintui-success',
                    duration: 1000
                });
            } else {
                Toast({
                    message: '请选择删除的宝贝!',
                    duration: 1000
                })
            }
        },
    },
}
</script>
<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 .26rem;
    height: .9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.header img {
    width: 1.62rem;
}
.header span {
    font-size: .28rem;
    font-weight: 600;
}
.shoppingCartList {
    margin-top: 1.1rem;
    background-color: #fff;
    padding-bottom: 110px;
}
.shoppingCartList li {
    padding: .37rem .2rem .34rem .26rem;
}
.shoppingCartList li .shoppingCartBox {
    padding: .35rem .25rem;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background-color: #f5f5f5;
}
.shoppingCartList li .shoppingCart .checked {
    border-radius: 50%;
    width: .3rem;
    height: .3rem;
    display: inline-block;
    background: url(../../static/img/car/check.png) no-repeat center;
    background-size: 100%;
    background-color: #C6C6C6;
    vertical-align: middle;
}
.shoppingCartList li .shoppingCart span.active {
    background-color: #000000;
}
.shoppingCartList li .shoppingCart .shoppingImg {
    margin-left: .27rem;
    margin-right: .48rem;
    width: 1.4rem;
    height: 1.4rem;
    display: inline-block;
}
.shoppingCartList li .shoppingCart .shoppingImg img{
    width: 100%;
}
.shoppingCartList li .shoppingCart .shoppingContent {
    display: inline-block;
    width: 50%;
    
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingName {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #2f2f2f;
    font-size: .24rem;
    word-break: break-all;
    padding: .2rem 0 .3rem;
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum {
    display: flex;
    justify-content: space-between;
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum h6 {
    font-weight: bold;
    font-size: .28rem;
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum .shoppingNum {
    line-height: 1;
    width: 1.5rem;
    height: 0.44rem;
    border: solid 1px #D0D0D0;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -ms-border-radius: 2px;
    -moz-border-radius: 2px;
    font-size: 0;
    white-space: nowrap;
    box-sizing: border-box;
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum .shoppingNum .reduceBtn,
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum .shoppingNum .addBtn {
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    text-align: center;
    line-height: 0.4rem;
    color: #828282;
    font-size: .3rem;
}
.shoppingCartList li .shoppingCart .shoppingContent .shoppingPriceAndNum .shoppingNum .num {
    width: 0.66rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: .28rem;
    color: #2f2f2f;
    display: inline-block;
    text-align: center;
}
.confirmOrDelete {
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
    bottom: 50px;
    padding: 0 .28rem;
    background-color: #fff;
    border-bottom: 1px solid #cccccc;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.confirmOrDelete span {
    font-size: .28rem;
}
.confirmOrDelete .checkedAll {
    border-radius: 50%;
    width: .3rem;
    height: .3rem;
    display: inline-block;
    background: url(../../static/img/car/check.png) no-repeat center;
    background-size: 100%;
    background-color: #C6C6C6;
    vertical-align: middle;
}
.confirmOrDelete span.active {
    background-color: #000000;
}
.confirmOrDelete button {
    background-color: #FE0000;
    color: #fff;
    border: none;
    padding: 8px 6px;
    font-size: 13px;
    letter-spacing: 1px;
    border-radius: 5px;
}
.confirmOrDelete .disabled {
    background-color: #777777;
}
</style>
