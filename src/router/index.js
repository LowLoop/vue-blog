import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/iview/iviewIndex'
import novelList from '@/components/iview/ivnovelList'
import readNovel from '@/components/readNovel'

Vue.use(Router)

export default new Router({
  mode:'hash', //history
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'novelList',
          name: 'novelList',
          component: novelList
        },
        {
          path: 'readNovel',
          name: 'readNovel',
          component: readNovel
        }
      ]
    }
  ]
})
