import {createApp} from 'vue';
import App from './App.vue';
import Wang from './components/Wang.vue';
import Frank from './components/Frank.vue';

import './index.css';
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Wang
    },
    {
      path: '/xxx',
      component: Frank
    },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
