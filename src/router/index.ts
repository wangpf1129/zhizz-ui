import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import NoMatch from '../components/NoMatch.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
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
          component:SwitchDemo
        },
        {
          path:'button',
          component:ButtonDemo
        },
        {
          path:'dialog',
          component:DialogDemo
        },
        {
          path:'tabs',
          component:TabsDemo
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
