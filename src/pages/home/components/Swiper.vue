<!--  -->
<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id"><img class="swpier-img" :src="item.imgUrl" alt=""></swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name:'HomeSwiper',
    props:['list'],
  data () {
    return {
        swiperOption:{
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:'1000'
        },
    };
  },
    // watch:{
    //     list:function(e){
    //         this.swiperList = list
    //         console.log(list)
    //     }
    // },
  components: {},
    computed:{
        showSwiper(){
            return this.list.length
        }
    },
  methods: {}
}

</script>
<style  scoped lang="stylus">
     /* .wrapper >>> .swiper-pagination-bullet-active 让他穿透不收scoped影响*/
    .wrapper >>> .swiper-pagination-bullet-active
        background-color :#fff
    .wrapper
        overflow: hidden
        width :100%
        height :0
        padding-bottom :31.25%
        background :#ccc
        
        .swpier-img
            width :100%
</style>