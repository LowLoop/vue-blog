import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import profileIndex from '../components/profileIndex'
import indexContent from '../components/content'
import readNofel from '../components/readNovel'

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
          path: 'index',
          name: 'indexContent',
          component: indexContent
        },
        {
          path: 'user/profile',
          name: 'profile',
          component: profileIndex
        },
        {
          path: 'readNovel',
          name: 'readNovel',
          component: readNofel
        }
      ]
    }
  ]
})
