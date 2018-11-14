/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import app_invoke from '@/invoke/invoke.js';

Vue.use(Vuex);
var invoke_yjw = app_invoke.invoke_yjw;
var invoke_upload = app_invoke.invoke_upload;
var invoke_jys = app_invoke.invoke_jys;




const state = {
  userinfo: USERINFO || {},
  payInfo: {},
  loginstatus: false,
  access_token: '',
  openid: '',

};

const getters = {

};


const mutations = {
  loginstatus(state, opt) {
    //获取上传所需参数
    var params = opt.params || {};
    params.client = 'android';
    params.v = 'test';
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.loginstatus;
    invoke_jys(params, sucf, errf);
  },
  upload(state, opt) {
    //1 上传表单
    //2 访问progress接口获取进度 设置循环每1秒访问一次
    //3 progress接口需要===》req.setRequestHeader("X-Progress-ID", uuid);
    //4 progress接口返回received:3258306 size:3267246 state:"uploading"
    //5 state=='done'时 结束循环
    var formData = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    var config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    invoke_upload(formData, sucf, errf, config);
  },
  addPlayStatistics(state, opt) {
    var params = opt.params || {};
    var path = PARAMS.addPlayStatistics;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  addVideo(state, opt) {
    var formData = opt.params || {};
    var path = PARAMS.addVideo;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    var config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    invoke_yjw(path, formData, sucf, errf, config);
  },
  addOrder(state, opt) {
    //添加订单
    var params = opt.params || {};
    var useroepnid = getCookie('USEROPENID');
    // var useroepnid = 'oPYvv08p2ZJ1Un7uAOPjIXLLUAZc%7Cad283aa400af464c76d%7C1537429867%7C7a62a700fa18dc6634172786b8e285c1d8614e62';
    useroepnid = decodeURIComponent(useroepnid);
    var xopenid = useroepnid.split("|")[0] || "";
    var talk_id = useroepnid.split("|")[1] || "";
    params.xopenid = xopenid;
    params.talk_id = talk_id;
    // params.xopenid = 'oE6Dk0w36fkr4eSFAQUVCtwWebZo';
    // params.talk_id = 'ad283aa400af464c76d';
    // 如果是安卓fromid==10003
    // 微信公众号fromid==10000
    params.fromid = 10003;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.addOrder;
    invoke_jys(params, sucf, errf);
  },
  getVideo(state, opt) {
    //获取视频，搜索
    var params = opt.params || {};
    var path = PARAMS.getVideo;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getVideoFromId(state, opt) {
    //获取视频
    var params = opt.params || {};
    var path = PARAMS.getVideoFromId;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getCategory(state, opt) {
    //获取分类
    var params = opt.params || {};
    var path = PARAMS.getCategory;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getOwnSource(state, opt) {
    //获取用户的资源
    var params = opt.params || {};
    var path = PARAMS.getOwnSource;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getPlayedSource(state, opt) {
    //获取用户播放资源
    var params = opt.params || {};
    var path = PARAMS.getPlayedSource;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getBoughtSource(state, opt) {
    //获取用户购买资源
    var params = opt.params || {};
    var path = PARAMS.getBoughtSource;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getPlayStatistics(state, opt) {
    //获取用户购买资源
    var params = opt.params || {};
    var path = PARAMS.getPlayStatistics;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getVideoAuth(state, opt) {
    //播放权限
    var params = opt.params || {};
    var path = PARAMS.getVideoAuth;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getPayStatistics(state, opt) {
    //收入统计
    var params = opt.params || {};
    var path = PARAMS.getPayStatistics;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getAccount(state, opt) {
    //账户金额
    var params = opt.params || {};
    var path = PARAMS.getAccount;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getCash(state, opt) {
    //红包提现
    var params = opt.params || {};
    var useroepnid = getCookie('USEROPENID');
    // || 'oPYvv08p2ZJ1Un7uAOPjIXLLUAZc%7Cad283aa400af464c76d%7C1537429867%7C7a62a700fa18dc6634172786b8e285c1d8614e62';
    useroepnid = decodeURIComponent(useroepnid);
    var xopenid = useroepnid.split("|")[0] || "";
    params.xopenid = xopenid;
    params.fromid = 10000;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getCash;
    invoke_jys(params, sucf, errf);
  },
  getCashStatistics(state, opt) {
    //提现统计
    var params = opt.params || {};
    var path = PARAMS.getCashStatistics;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getGroup(state, opt) {
    //查询专栏
    var params = opt.params || {};
    var path = PARAMS.getGroup;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getSourceGroup(state, opt) {
    //查询专栏下资源
    var params = opt.params || {};
    var path = PARAMS.getSourceGroup;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getSourceShow(state, opt) {
    //查询专栏下资源
    var params = opt.params || {};
    var path = PARAMS.getSourceShow;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    invoke_yjw(path, params, sucf, errf);
  },
  getUploadParams(state, opt) {

    //获取上传所需参数
    var params = opt.params || {};
    var oid = getCookie('USEROPENID');
    oid = decodeURIComponent(oid);
    oid = oid.split("|")[0] || "";
    // ||'oPYvv08p2ZJ1Un7uAOPjIXLLUAZc';
    params.oid = oid;
    params.type = "100";
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getUploadParams;
    invoke_jys(params, sucf, errf);
  },
  getUploadProgress(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || function(d) {};
    var done = opt.done || function(d) {};
    var uuid = params.uuid;
    var req = new XMLHttpRequest();
    req.open("GET", URL_DEV.upload + "/progress", 1);
    req.setRequestHeader("X-Progress-ID", uuid);
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status == 200) {
          /* poor-man JSON parser */
          var upload = eval(req.responseText);
          /* change the width if the inner progress-bar */
          if (upload.state == 'uploading') {
            //一直加载进度
            sucf(upload)
          } else {
            //停止循环
            done(upload)
          }
        } else {
          Toast({
            message: "获取进度失败",
            position: 'top',
            duration: 3000
          });
        }
      }
    };
    req.send(null);
  },
};


export default new Vuex.Store({
  state,
  getters,
  mutations,
});
