<!--  -->
<template>
<div>
    <div class="banner" @click="handleBannerClick">
      <img  class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
      </div>
  </div>
  <fade-animation>
      <common-gallary @close = 'handleGallaryColse' :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
  </fade-animation>
  
</div>
  
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name:'DetailBanner',
    props:["sightName","bannerImg","gallaryImgs"],
    data () {
        return {
            // imgs:[
            //     {imgUrl:"http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_600x330_5abf0855.jpg"},
            //     {imgUrl:"http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_600x330_d5e0d52e.jpg"},
            // ],
            showGallary:false
        };
    },

    components: {CommonGallary,FadeAnimation},

    methods: {
        handleBannerClick(){
           this.showGallary = true 
        },
        handleGallaryColse(){
            this.showGallary = false 
        }
    }
}

</script>
<style scoped lang="stylus">
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem

</style>