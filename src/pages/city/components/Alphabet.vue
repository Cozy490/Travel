<!--  -->
<template>
  <ul class="list">
      <li class="item" v-for="item in letters" :key="item" ref="item"
      @click="handleLetterClick" 
      @touchstart.prevent="hanleLetterTouchStart" 
      @touchmove="hanleLetterTouchMove" 
      @touchend="hanleLetterTouchEnd"
      >{{item}}</li>
  </ul>
</template>

<script>
export default {
    props:['cities'],
    name:'CityAlphabet',
  data () {
    return {
        touchStatus:false,
        startY:0,
        timer:null //做一个函数节流
    };
  },
    computed:{
        letters(){
            const letters = [];
            for (const i in this.cities) {
               letters.push(i)
            }
            return letters
        }
    },
  components: {},
    // 当页面数据更新的时候，同事页面完成渲染之后这个钩子才会执行
  updated(){
        const startY= this.$refs['item'][0].offsetTop
  },
  methods: {
      handleLetterClick(e){
        console.log(e.target.innerText)
        this.$emit('change',e.target.innerText)
      },
      hanleLetterTouchStart(){
          this.touchStatus = true
      },
      hanleLetterTouchMove(e){
          if (this.touchStatus) {
              if(this.timer){
                  clearTimeout(this.timer)
              }
              this.timer = setInterval(()=>{
                   const touchY  = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY)/20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
              },16)
          }
      },
      hanleLetterTouchEnd(){
          this.touchStatus = false
      }
  }
}

</script>
<style  scoped lang="stylus">
    @import '~styles/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>