import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import NoMatch from '../components/NoMatch.vue';
import Switch from '../components/Switch.vue';
import Button from '../components/Button.vue';
import Dialog from '../components/Dialog.vue';
import Tabs from '../components/Tabs.vue';
import Start from '../components/Start.vue';

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
      component: Doc,
      children:[
        {
          path:'',
          component:Start
        },
        {
          path:'switch',
          component:Switch
        },
        {
          path:'button',
          component:Button
        },
        {
          path:'dialog',
          component:Dialog
        },
        {
          path:'tabs',
          component:Tabs
        }
      ]
    },
    {
      path:'/:w+',
      component:NoMatch
    }
  ]
});


export  {router}
