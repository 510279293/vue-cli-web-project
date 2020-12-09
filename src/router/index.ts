import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { BlankLayout } from '@/components';

Vue.use(VueRouter);

// vue 路由配置
const staticRouter: Array<RouteConfig | Record<string, any>> = [
  {
    path: '/',
    name: 'index',
    redirect: '/quan/index',
  },
  {
    path: '/404',
    component: () => import('@/views/404/404.vue'),
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];
const asyncRouter: Array<RouteConfig | Record<string, any>> = [
  {
    path: '/quan',
    name: 'quan',
    component: BlankLayout,
    redirect: '/quan/index',
    children: [
      {
        path: '/quan/index',
        name: 'yhq',
        component: () => import('@/views/quan/index.vue'),
        meta: {
          title: '新人推广',
        },
      },
    ],
  },
];

export {
  staticRouter,
  asyncRouter,
};

const router = new VueRouter({
  mode: 'history',
  base: '/',
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  routes: [...asyncRouter, ...staticRouter],
});

// router.beforeEach((to, from, next) => {
//     to.meta &&
//     (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
//     next()
// });

export default router;
