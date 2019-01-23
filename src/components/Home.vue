<template>
    <div class="home">
        <div class="search"><input @click="goToSearch" type="text" placeholder="请输入关键字"></div>
        <img class="bg" src="../../static/img/home/newJpyaBg.jpg" />
        <div class="carousel"><Carousel></Carousel></div>
        <div class="sortList"><SortList></SortList></div>
        <div class="productList">
            <ProductList :titleName="'大家都在买'"></ProductList>
        </div>
        <Footer></Footer>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import SortList from '@/components/SortList'
import ProductList from '@/components/ProductList'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  data () {
    return {
     
    }
  },
  components: {
    Carousel,SortList,ProductList,Footer
  },
  methods: {
    goToSearch() {
      this.$router.push({
        path: '/Search'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
        position: relative;
        padding-bottom: 55px;
  }
  .bg {
        width: 100%;
  }
  .search {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0;
    padding-top: .2rem;
  }
  .search input {
    width: 80%;
    margin-left: 10%;
    height: .6rem;
    border-radius: .6rem;
    outline: none;
    padding-left: .2rem;
  }
  .carousel {
      position: absolute;
      top: .6rem;
      left: 0;
      right: 0;
      text-align: center;
    }
</style>
