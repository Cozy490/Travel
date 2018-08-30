<!--  -->
<template>
  <div class="icons">
      <swiper :options="swiperOption">
            <swiper-slide v-for="(page , index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icom-desc">{{item.desc}}</p>
                </div>
            </swiper-slide> 
            
            
      </swiper>
  </div>
</template>

<script>
export default {
    neme:'HomeIcons',
    props:["list"],
    data (){
        return{
            swiperOption:{
                autoplay:false
            }
        }
    },
    components: {},
    computed:{
        pages () {
            const pages = []
            this.list.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                        pages[page] = []
                } 
                 pages[page].push(item)
            })
            return pages
        }
    },

    methods: {}
}

</script>
<style lang="stylus"  scoped>
     @import '~styles/varibles.styl';
     @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icom-desc
            position absolute
            left 0
            right 0
            bottom .24rem
            line-height .24rem
            color $darkTextColor
            text-align center
            ellipsis()
</style>