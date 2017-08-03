// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';//iview ui库
import 'iview/dist/styles/iview.css';    // 使用 CSS
import store from './vuex/store.js'
/*import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.use(IScrollView, IScroll)*/
import VueSimplemde from 'vue-simplemde'//md富文本

Vue.use(VueSimplemde)
Vue.use(iView);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
