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
import pay from '@/components/page/pay';
import payment from '@/components/page/payment';
import searchresult from '@/components/page/searchResult';
import about from '@/components/page/about';
import about_yszc from '@/components/page/about_yszc';
import loopplay from '@/components/page/loopplay';
import payment_suc from '@/components/page/payment_suc';
import payment_err from '@/components/page/payment_err';
import dev from '@/components/page/dev';

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
  }, {
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
  }, {
    path: '/pay',
    name: 'pay',
    component: pay
  }, {
    path: '/payment',
    name: 'payment',
    component: payment
  }, {
    path: '/searchresult',
    name: 'searchresult',
    component: searchresult
  }, {
    path: '/about',
    name: 'about',
    component: about
  }, {
    path: '/about_yszc',
    name: 'about_yszc',
    component: about_yszc
  }, {
    path: '/loopplay',
    name: 'loopplay',
    component: loopplay
  }, {
    path: '/payment_suc',
    name: 'payment_suc',
    component: payment_suc
  }, {
    path: '/payment_err',
    name: 'payment_err',
    component: payment_err
  }, {
    path: '/dev',
    name: 'dev',
    component: dev
  }, ]
})
