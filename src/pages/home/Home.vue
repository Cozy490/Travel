<!--  -->
<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
  
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'
export default {
  name:'Home',
  data () {
    return {
        iconList:[],
        recommendList:[],
        swiperList:[],
        weekendList:[],
    };
  },

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  created(){
      axios({
          url:'/api/index.json',
          method:'get',
      })
      .then(res=>{
          console.log(res.data)
            this.iconList = res.data.data.iconList;
            this.recommendList = res.data.data.recommendList;
            this.swiperList = res.data.data.swiperList;
            this.weekendList = res.data.data.weekendList;
            console.log(res.data.data.iconList)
      })
      .catch(error=>{

      })
  },
  methods: {
    
  }
}

</script>
<style  scoped >

</style>