<template>
    <div class="footer">
        <ul>
            <li>
                <router-link :to="{ name: 'Home'}">
                    <i></i>
                    <p>首页</p>
                </router-link>
            </li>
            <li v-if="this.$store.state.accessData[1]">
                <router-link :to="{ name: 'SortInfo'}">
                    <i></i>
                    <p>分类</p>
                </router-link>
            </li>
            <li v-if="this.$store.state.accessData[2]">
                <router-link :to="{ name: 'BuyCart'}">
                    <i></i>
                    <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Personal'}">
                    <i></i>
                    <p>个人中心</p>
                </router-link>
            </li>
        </ul>
    </div>    
</template>

<script>
import store from '../vuex/store.js'
export default {
    name: 'Footer',
    store
}
</script>
<style scope>
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
    }
    .footer ul li i {
        display: block;
        margin: 5px auto 2px;
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top;
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
    .footer ul li:nth-child(4) i {
        background-image: url('../../static/img/home/iconMe.png');
    }
    .footer ul li p {
        font-size: 11px;
        color: #333333;
    }
    .footer ul li .active i {
        background-position: bottom;
    }
    .footer ul li .active p {
        color: #F95478;
    }
</style>
