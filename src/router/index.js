import Vue from 'vue';
import VueRouter from 'vue-router';
// import { isLooseLoggedIn, isAccountLoggedIn } from '@/utils/auth';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      keepAlive: true,
      savePosition: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// 	return originalPush.call(this, location).catch((err) => err)
// }

// router.beforeEach((to, from, next) => {
// 	// 需要登录的逻辑
// 	if (to.meta.requireAccountLogin) {
// 		if (isAccountLoggedIn()) {
// 			next()
// 		} else {
// 			next({ path: '/login/account' })
// 		}
// 	}
// 	if (to.meta.requireLogin) {
// 		if (isLooseLoggedIn()) {
// 			next()
// 		} else {
// 			if (process.env.IS_ELECTRON === true) {
// 				next({ path: '/login/account' })
// 			} else {
// 				next({ path: '/login' })
// 			}
// 		}
// 	} else {
// 		next()
// 	}
// })

export default router;
