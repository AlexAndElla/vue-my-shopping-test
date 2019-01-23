<template>
    <div class="productInfo">
        <img class="productImgUrl" :src="productInfo.productImgUrl" alt="">
        <div class="productContent">
            <p class="productPrice">￥{{productInfo.productPrice}}</p>
            <p class="productIntro">{{productInfo.productIntro}}</p>
            <p class="productTag">
                <span>假一赔十</span>
                <span v-if="productInfo.ifActivicity">活动进行中</span>
                <span v-if="productInfo.ifInventory">库存紧张</span>
            </p>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <router-link :to="{ name: 'Home'}">
                        <i></i>
                        <p>首页</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'SortInfo'}">
                        <i></i>
                        <p>分类</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'BuyCart'}">
                        <i></i>
                        <p>购物车</p>
                    </router-link>
                </li>
                <li>
                    <button type="button">加入购物车</button>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'ProductInfo',
    data() {
        return {
            productInfo: ''
        }
    },
    created() {
        let info = this.$route.query;
        this.productInfo = info;
    },
}
</script>
<style scoped>
.productImgUrl {
    width: 100%;
}
.productContent {
    background-color: #fff;
    padding: .48rem .2rem 0;
    margin-bottom: .2rem;
}
.productPrice {
    color: #ff0000;
    font-size: .38rem;
    font-weight: 600;
}
.productIntro {
    color: #333;
    font-size: .28rem;
    font-weight: 600;
    margin-top: .3rem;
    margin-bottom: .3rem;
}
.productTag {
    margin-top: .1rem;
    font-size: .22rem;
    height: .9rem;
    line-height: .9rem;
    border-top: 1px solid #e1e1e1;
}
.productTag span {
    padding-right: .35rem;
}
.footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #fff;
    }
    .footer ul {
        display: flex;
    }
    .footer ul li {
        flex: 1;
        text-align: center;
        font-size: 11px;
    }
    .footer ul li i {
        display: block;
        margin: 5px auto 2px;
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom;
    }
    .footer ul li:nth-child(1) i {
        background-image: url('../../static/img/home/iconIndex.png');
    }
    .footer ul li:nth-child(2) i {
        background-image: url('../../static/img/home/iconSort.png');
    }
    .footer ul li:nth-child(3) i {
        background-image: url('../../static/img/home/iconCart.png');
    }
    .footer ul li p {
        font-size: 11px;
        color: #F95478;
    }
    .footer ul li:nth-child(4) {
        flex: 1.5
    }
    .footer ul li:nth-child(4) button {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #fff;
        background-color: #fe4d73;
        border: none;
        outline: none;
    }
</style>
