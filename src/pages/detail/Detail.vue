<!--  -->
<template>
  <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"> </detail-banner>
      <detail-header> </detail-header>
      <div class="content">
          <detail-list :list="list"> </detail-list>
      </div>
      <div class="aa"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios';
export default {
    name:'Detail',
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:'',
            list:[]
        };
    },

    components: {DetailBanner,DetailHeader,DetailList},
    created(){
        axios({
            url:'/api/detail.json?id=' + this.$route.params.id,
            method:'get'
        })
        .then(res=>{
            this.sightName=res.data.data.sightName
            this.bannerImg=res.data.data.bannerImg
            this.gallaryImgs=res.data.data.gallaryImgs
            this.list=res.data.data.categoryList
            console.log(res.data.data.categoryList)
        })
        .catch(error=>{

        })
        
    },
    methods: {
       
    }
    }

</script>
<style  scoped lang="stylus">
.aa{
    height 1000px
}
</style>