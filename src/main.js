// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store';
import Vuex from 'vuex';
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css'
import { Toast, InfiniteScroll, Lazyload, Header, Spinner, Progress ,Radio} from 'mint-ui';
import searchResultAudio from '@/components/page/searchResultAudio'


Vue.component(Spinner.name, Spinner);
Vue.component(Header.name, Header);
Vue.component(Progress.name, Progress);
Vue.component(Header.name, Header);
Vue.component(Radio.name, Radio);
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
// Vue.use(Toast);

// Vue.use(Toast)
// Vue.use(InfiniteScroll)
// Vue.use(Lazyload)
// Vue.use(Header)
// Vue.use(Spinner)

// Vue.use(MintUI)

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.myApp = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


window.login_app = function(str) {
  var url = URL_DEV.jys + 'm=2104&state=2bf8314253ab641d&talk_id=ad283aa400af464c76d&' + str;
  var req = new XMLHttpRequest();
  req.open("GET", url, 1);
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        var data = JSON.parse(req.responseText);
        if (data.status == 1) {
          //登陆成功，获取COOKIE
          window.USERINFO = (function() {
            var str = getCookie('USERINFO') || "{}";
            var o = decodeURIComponent(str);
            var res = o.split("|") || [];
            return res;
          })();
          //
          // alert("登陆成功");
          store.state.loginstatus = true;
          store.state.userinfo = USERINFO || {};
          //传给APP
          // {"data":{"accesstoken":"15_v86WXuqdo1rit9YOex3w1bVp88zlN4-gcnzEb_s29IcJ9DMNPUU4gEzfYCz3dy7URG1gGRJZjmnKCPuucYhTIfC2KAW_OcBz0F9Oph3j9Cw","openid":"oE6Dk0wp7KtKtVSk10ZFLw6XZjJs"},"msg":"ok","status":1}
          var accesstoken = data.data.accesstoken;
          var openid = data.data.openid;
          store.state.access_token = accesstoken;
          store.state.openid = openid;
          window.login.loginResult(accesstoken + ',' + openid);
          return
        } else {}
      } else {}
    }
  };
  req.send(null);
};


//支付完成调用的方法
window.payment_app = function(s) {
  if (s == '0') {
    //成功
    router.push({ path: 'payment_suc' });
  } else {
    router.push({ path: 'payment_err' });

  }
};

//录音结束app方面调用我的接口
window.recordStop=function(opt){
      // Toast({
      //   message: opt,
      //   position: 'top',
      //   duration: 5000
      // });
   store.state.recorderInfo=opt;

};
