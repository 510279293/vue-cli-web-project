import {BlankLayout } from '@/layouts'
// vue 路由配置
const staticRouter = [
  {
    path: '/',
    name: 'index',
    redirect: '/quan/index'
  },
  {
    path: '/404',
    component: () => import('@/views/404/404')
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
const asyncRouter = [
  {
    path: '/quan',
    name: 'quan',
    component: BlankLayout,
    redirect: '/quan/index',
    children: [
      {
        path: '/quan/index',
        name: 'yhq',
        component: () => import('@/views/quan/index'),
        meta: {
          title: '新人推广',
        },
      }
    ]
  }
]

export {
  staticRouter,
  asyncRouter
}