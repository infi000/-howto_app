import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/page/main';
import home from '@/components/part/home';
import rank from '@/components/part/rank';
import find from '@/components/part/find';
import sort from '@/components/part/sort';
import sortdetail from '@/components/part/sortdetail';
import list from '@/components/part/list';
import play from '@/components/part/play';
import me from '@/components/part/me';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '',
    name: 'main',
    component: main,
    children: [{
      path: 'home',
      name: 'home',
      component: home
    }, {
      path: 'rank',
      name: 'rank',
      component: rank
    }, {
      path: 'find',
      name: 'find',
      component: find
    }, {
      path: 'sort',
      name: 'sort',
      component: sort
    },  {
      path: 'sortdetail',
      name: 'sortdetail',
      component: sortdetail
    }, {
      path: 'list',
      name: 'list',
      component: list
    }, {
      path: 'play',
      name: 'play',
      component: play
    }, {
      path: 'me',
      name: 'me',
      component: me
    }]
  }]
})
