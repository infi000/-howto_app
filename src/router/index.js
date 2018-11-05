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
import played from '@/components/page/played';
import bought from '@/components/page/bought';
import cash from '@/components/page/cash';
import cashment from '@/components/page/cashment';
import incomestatistics from '@/components/page/incomestatistics';
import own from '@/components/page/own';
import playstatistics from '@/components/page/playstatistics';
import upload from '@/components/page/upload';

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
    }, {
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
  },{
      path: '/played',
      name: 'played',
      component: played
    }, {
      path: '/bought',
      name: 'bought',
      component: bought
    }, {
      path: '/own',
      name: 'own',
      component: own
    }, {
      path: '/playstatistics',
      name: 'playstatistics',
      component: playstatistics
    }, {
      path: '/incomestatistics',
      name: 'incomestatistics',
      component: incomestatistics
    }, {
      path: '/cash',
      name: 'cash',
      component: cash
    }, {
      path: '/cashment',
      name: 'cashment',
      component: cashment
    }, {
      path: '/upload',
      name: 'upload',
      component: upload
    }, ]
})
