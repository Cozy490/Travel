<!--  -->
<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div item-img-wrapper>
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
                
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {
    props:['weekendList'],
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
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.08%
    .item-img
        width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
       
</style>