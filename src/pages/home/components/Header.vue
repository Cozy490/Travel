<!--  -->
<template>
  <div class="header">
      <div class="header_left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header_input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
          </div>
      <router-link to="/city" tag="div">
            <div class="header_right">
                {{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
      </router-link>
      
  </div>
</template>

<script>
export default {
  name:'Header',
  data () {
    return {
    };
  },

  components: {},

  methods: {}
}

</script>
<style  scoped lang="stylus">
   /* @import '../../../assets/styles/varibles.styl';
      @import '~@/assets/styles/varibles.styl'; */
      @import '~styles/varibles.styl';
    .header
        height : .86rem;
        font-size :14px
        display :flex
        background-color :$bgColor
        color:#ffffff
        line-height .86rem
        .header_left
            width : .64rem
            float : left
            .back-icon
                text-align :center
                font-size :.4rem
            
        .header_input
            flex : 1
            background-color :#fff
            height :.64rem
            line-height :.64rem
            color :#ccc
            margin-top :.12rem
            margin-left :.2rem
            border-radius :.1rem
            padding-left :.1rem
        .header_right
            width : 1.24rem
            text-align:center
            .arrow-icon
                margin-left -.04rem
                font-size :.24rem

    
</style>