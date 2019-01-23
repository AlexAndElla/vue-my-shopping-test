<template>
    <div class="personal">
        <p class="title">权限设置</p>
        <div class="switchBox">
            <mt-cell :title="'商品列表'">
                <mt-switch class="switch" v-model="accessArr[0]"></mt-switch>
            </mt-cell>
            <mt-cell :title="'分类'">
                <mt-switch class="switch" v-model="accessArr[1]"></mt-switch>
            </mt-cell>
            <mt-cell :title="'购物车'">
                <mt-switch class="switch" v-model="accessArr[2]"></mt-switch>
            </mt-cell>
            <p>关闭后则不显示该功能</p>
        </div>
        <Footer></Footer>  
    </div>    
</template>

<script>
import Footer from '@/components/Footer'
import store from '../vuex/store.js'
export default {
    name: 'Personal',
    store,
    components: {
        Footer
    },
    data() {
        return {
            accessArr: [true,true,true],
        }
    },
    created() {
        if(this.$store.state.accessData.length > 0) {
            this.accessArr = this.$store.state.accessData
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.title {
    height: .9rem;
    text-align: center;
    font-size: .56rem;
    color: #333333;
    background-color: #fff;
}
.switchBox {
    padding: 0 .5rem .3rem;
    background-color: #fff;
}
.switchBox p {
    font-size: .22rem;
    color: #999999;
}
.switch {
    font-size: .28rem;
    margin-bottom: .3rem;
}
.btn {
    text-align: center;
    margin-top: 1rem;
}
</style>

