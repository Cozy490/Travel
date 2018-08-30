import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'北京'
    },
    //复杂一点的全的方法
    /* actions:{
        changeCity(ctx,city){
            ctx.commit("changeCity",city)

        },
    },
    mutations:{
        changeCity(state,city){
            state.city = city
        }
    } */
    mutations:{
        changeCity(state,city){
            state.city = city
        }
    }
})