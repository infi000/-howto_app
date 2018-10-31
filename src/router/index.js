import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/page/main';
import home from '@/components/part/home';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'main',
      component: main,
      children:[{
        path:'home',
        name:'home',
        component:home
      }]
    }
  ]
})
