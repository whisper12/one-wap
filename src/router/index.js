import Vue from 'vue'
import Router from 'vue-router'
import photo from '@/components/photo'
import msg from '@/components/msg'
import music from '@/components/music'
import mov from '@/components/mov'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'photo',
      component: photo
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/mov',
      name: 'mov',
      component: mov
    }
  ]
})
