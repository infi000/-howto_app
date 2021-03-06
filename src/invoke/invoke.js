import axios from 'axios';
import store from '../vuex/store';
import { Toast } from 'mint-ui';


var invoke_url={
  yjw:URL_DEV.yjw,
  upload:URL_DEV.upload,
  jys:URL_DEV.jys
};
// var invoke_url={
//   yjw:'/howapi/index.php?',
//   upload:URL_DEV.upload,
//   jys:'/wapi/i.php?'
// };
var qs = require('qs');
var invoke_yjw = function(path, params, sucf, errf, config) {
  //通信接口
  //添加TOKEN验证
  params.access_token = store.state.access_token;
  var _sucf = sucf || function(d) {
      console.log("success", d);
    },
    _errf = errf || function(d) {
      console.log("error", d);
      //这里应该有弹出 以后做
      Toast({
        message: d,
        position: 'top',
        duration: 3000
      });
    },
    _params = params ? qs.stringify(params) : "",
    _config = config || {},
    _url = invoke_url.yjw + path;
  if (_config.headers) {
    //form上传时 parmas为formdata
    _params = params;
    _params.append("access_token", store.state.access_token);
  }
  // _config.withCredentials = true;
  axios.post(_url, _params, _config).then(function(result) {
    var data = result.data;
    if (data.res == 'succ') {
      _sucf(data.data);
    } else {
      _errf(data.errdata);
    }
  }).catch(function(err) {
    Toast({
      message: '通信错误，请重试',
      position: 'top',
      duration: 3000
    });
  });
};
var invoke_upload = function(params, sucf, errf, config) {
  //通信接口
  var _params = params,
    _sucf = sucf || function(d) {
      console.log("success", d);
    },
    _errf = errf || function(d) {
      console.log("error", d);
      Toast({
        message: d,
        position: 'top',
        duration: 3000
      });
    },
    _config = config || "",
    _url = invoke_url.upload + '/upload?X-Progress-ID=' + _params.get('uuid');
  axios.post(_url, _params, _config).then(function(result) {
    var data = result.data;
    if (data.status == 1) {
      _sucf(data);
    } else {
      _errf(data.msg);
    }
  }).catch(function(err) {
    Toast({
      message: '通信错误，请重试',
      position: 'top',
      duration: 3000
    });
  });

};

var invoke_jys = function(params, sucf, errf, config) {
  //通信接口
  var _params,
    _sucf = sucf || function(d) {
      console.log("success", d);
    },
    _errf = errf || function(d) {
      console.log("error", d);
      Toast({
        message: d,
        position: 'top',
        duration: 3000
      });
    },
    _config = config || "",
    _url = invoke_url.jys;
  if (params) {

    _params = qs.stringify(params);
  }
  if (_config) {
    _params = params;
  }
  axios.post(_url, _params, _config).then(function(result) {
    var data = result.data;
    if (data.status == 1) {
      _sucf(data.data);
    } else {
      _errf(data.msg);
    }
  }).catch(function(err) {
    Toast({
      message: '通信错误，请重试',
      position: 'top',
      duration: 3000
    });
  });
};
export default { invoke_yjw: invoke_yjw, invoke_upload: invoke_upload, invoke_jys: invoke_jys };
