import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import NoMatch from '../components/NoMatch.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import Markdown from '../components/Markdown.vue';
import {h} from 'vue';

const md = filename => {
  return h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
};
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'intro',
          component: md('intro')
        },
        {
          path: 'install',
          component: md('install')
        },
        {
          path: 'start',
          component: md('start')
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        }
      ]
    },
    {
      path: '/:w+',
      component: NoMatch
    }
  ]
});


export {router};
