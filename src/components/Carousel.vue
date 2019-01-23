<template>
    <div class="carousel">
        <swiper :options="swiperOption">
            <swiper-slide><img src="../../static/img/carousel/swiper1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../../static/img/carousel/swiper2.png" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
export default {
  name: 'Carousel',
  components: {
    swiper,swiperSlide
  },
  data () {
    return {
     swiperOption: {
        autoplay: true,
        speed:　800,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination'
        }
    }
    }
  }
}
</script>
<style scope>
    swiper-slide {
        border-radius: 5px;
    }
    img {
        width: 75%;
        border-radius: 5px;
    }
</style>
