import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1-1',
      name: '/1-1',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/1-1'
    }
  ]
})
