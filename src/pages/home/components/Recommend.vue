<!--  -->
<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link :to="'/detail/' + item.id"  tag="li" class="item" v-for="item in recommendList" :key="item.id">
                    <div item-img-wrapper>
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>

            </router-link>
            
        </ul>
    </div>
  
</template>

<script>
export default {
    props:["recommendList"],
  data () {
    return {
       
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped lang="stylus">
     @import '~styles/mixins.styl';
    .recommend-title
        line-height .8rem
        background-color #eeeeee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        border-bottom  1px solid #dddddd
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #cccccc
                ellipsis()
            .item-button
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                margin-top .16rem
                color #ffffff
                line-height .44rem
                outline none
                border none
</style>