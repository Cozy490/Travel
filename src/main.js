// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'

import store from './store'  //引入vuex

import 'babel-polyfill'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

// Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
