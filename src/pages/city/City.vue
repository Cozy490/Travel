<!--  -->
<template>
  <div>
     <city-header></city-header> 
     <city-search :cities="cities"></city-search>
     <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
     <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    data () {
      return {
          hotCities:[],
          cities:[],
          letter:''
      };
    },

    components: {CityHeader,CitySearch,CityList,CityAlphabet},
    methods: {
        getCityInfo(){
            axios({
                url:'/api/city.json',
                method:'get',
            })
            .then(res=>{
              console.log(res.data.data.hotCities)
                this.hotCities = res.data.data.hotCities
                this.cities = res.data.data.cities
               
            })
            .catch(error=>{

            })
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted(){
        this.getCityInfo()
        
    }
}

</script>
<style  scoped lang="stylus">

</style>