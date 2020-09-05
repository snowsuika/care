import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  // 所有的路由都會經過這一段，避免用戶進入錯誤連結
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    // name: 'Index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/',
        // name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/login',
        // name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/searchCares',
        // name: 'FindCare',
        component: () => import('../views/SearchCares.vue')
      },
      {
        path: '/carePage/:id', //冒號後面是可以自定義的
        component: () => import('../views/CarerPage.vue')
      }
    ]
  },
  {
    path: '/attendantAdmin',
    name: '照服員管理頁面',
    component: () => import('../views/backendAttendant/AttendantDashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/memberAdmin',
    name: '一般會員管理頁面',
    component: () => import('../views/backendMember/MemberDashboard.vue'),
    meta: { requiresAuth: true }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
