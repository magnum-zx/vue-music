import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/locale';
import '@/assets/icons';
// import '@/utils/filters';
// import './registerServiceWorker';
// import { dailyTask } from '@/utils/common';
import '@/assets/css/global.scss';
import NProgress from 'nprogress';
import '@/assets/css/nprogress.css';
Vue.config.productionTip = false;

Vue.use({
  router,
});
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
