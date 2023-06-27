// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from "reset-css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import $ from "jquery";
import 'swiper/dist/css/swiper.css'
import "./assets/css/iconfont.css";//引入字体库样式
Vue.config.productionTip = false
Vue.use(reset);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log("我是master分支的 最新修改 2023-6-27");
