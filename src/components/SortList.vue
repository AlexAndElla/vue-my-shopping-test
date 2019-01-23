<template>
    <div v-if="this.$store.state.accessData[1]" class="sortList">
        <div @click="goToSortInfo(0)">
            <img src="../../static/img/home/sort.png" alt="">
        </div>
        <ul class="clearFix">
            <li v-for="item in sortList" :key="item.id" @click="goToSortInfo(item.id)">
                <img :src="item.src">
            </li>
        </ul>
    </div>    
</template>
<script>
import store from '../vuex/store.js'
export default {
    name: 'SortList',
    store,
    data() {
      return {
        sortList: [
            {
                id: 0,
                src: require('../../static/img/home/sortView.jpg')
            },
            {
                id: 1,
                src: require('../../static/img/home/sortProduct.jpg')
            }
        ]
      }
    },
    methods: {
        goToSortInfo(index) {
            this.$router.push({
                path: '/SortInfo',
                query: {
                    ind: index,
                }
            })
        }
    }
}
</script>
<style scoped>
.sortList {
    display: flex;
    background-color: #fff;
    padding: .1rem .2rem;
}
.sortList div {
    flex: 1;
}
.sortList div img {
    width: 100%;
}
.sortList ul {
    flex: 3;
}
.sortList ul li {
    width: 1.2rem;
    margin-left: .2rem;
    float: left;
}
.sortList ul li img {
    width: 100%;
}
</style>

