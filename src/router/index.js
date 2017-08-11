import Vue from 'vue'
import Router from 'vue-router'
/*import index from '@/components/iview/iviewIndex'
import novelList from '@/components/iview/ivnovelList'
import readNovel from '@/components/readNovel'
import self from '@/components/iview/self'
import addNovel from '@/components/iview/addNovel'*/

Vue.use(Router)

//routes用这种 require的方式 异步加载
//是 切换到特定路由时才加载代码
//节省开销

export default new Router({
  mode:'hash', //history
  routes: [
    {
      path: '/',
      name: 'index',
      component: function (resolve) {
        require(['../components/iview/iviewIndex'], resolve)
      },
      children: [
        {
          path: 'novelList',
          name: 'novelList',
          component: resolve => require(['../components/iview/ivnovelList'], resolve)
        },
        {
          path: 'readNovel',
          name: 'readNovel',
          component: resolve => require(['../components/readNovel'], resolve)
        },
        {
          path: 'self',
          name: 'self',
          component: resolve => require(['../components/iview/self'], resolve)
        },
        {
          path: 'addNovel',
          name: 'addNovel',
          component: resolve => require(['../components/iview/addNovel'], resolve)
        }
      ]
    }
  ]
})
