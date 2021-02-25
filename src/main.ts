import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import './index.css';
import App from './App.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/doc',
      component: Doc
    },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
