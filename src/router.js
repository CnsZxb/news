import Vue from 'vue'
import Router from 'vue-router'
import ping from './views/pages/ping.vue'
import an from './views/pages/an.vue'
import qiang from './views/pages/qiang.vue'
import he from './views/pages/he.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:resolve=>require(['../src/views/Home.vue'],resolve)
    },
    {
      path: '/buyActive',
      name: 'buyActive',
      component:resolve=>require(["../src/views/buyActive.vue"],resolve)
    },
    {
      path: '/goodstore',
      name: 'goodstore',
      component:resolve=>require(["../src/views/goodstore.vue"],resolve)
    },
    {
      path:"/login",
      name:"login",
      component:resolve=>require(["../src/views/login.vue"],resolve)
    },
    {
      path:"/myorder",
      name:"myorder",
      component:resolve=>require(["../src/views/pages/huodong/myorder.vue"],resolve)
    },
    {
      path:"/goodsItem",
      name:"goodsItem",
      component:resolve=>require(["../src/views/pages/Goods/index.vue"],resolve)
    },
    {
      path:"/Mycenter",
      name:"myCenter",
      component:resolve=>require(["../src/views/Mycenter.vue"],resolve)
    },
    {
      path:"/myset",
      name:"myset",
      component:resolve=>require(["../src/views/pages/My/myset.vue"],resolve)
    },
    {
      path:"/zhuce",
      name:"/zhuce",
      component:resolve=>require(["../src/views/pages/My/zhuce.vue"],resolve)
    },
    {
      path:"/myorders",
      name:"/myorders",
      component:resolve=>require(["../src/views/pages/My/myorders.vue"],resolve)
    },
    {
      path: '/ping',
      name: 'ping',
      component: ping
    },
    {
      path: '/an',
      name: 'an',
      component: an
    },
    {
      path: '/qiang',
      name: 'qiang',
      component: qiang
    },
    {
      path: '/he',
      name: 'he',
      component: he
    },
  ]
})
