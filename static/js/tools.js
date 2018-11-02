// 正式
var URL_DEV = {
  yjw: 'http://www.howdu.cn/howapi/index.php?',
  // yjw: 'http://192.168.58.21/howto/index.php?',
  jys: 'http://www.howdu.cn/wapi/i.php?',
  upload: 'http://upload.howdu.cn', //视频服务器
  video: 'http://video.howdu.cn', //视频服务器
  img: 'http://www.howdu.cn/howapi', //图片服务器
};

// // 测试2 微信端用
// var URL_DEV = {
//   yjw: 'http://www.howdu.cn/howapi_test/index.php?',
//   jys: 'http://www.howdu.cn/wapi/i.php?',
//   upload: 'http://upload.howdu.cn', //视频服务器
//   video: 'http://video.howdu.cn', //视频服务器
//   img: 'http://www.howdu.cn/howapi', //图片服务器
// };


// m=Home&c=&a=
var PARAMS = {
  // addUser: 'm=Home&c=User&a=addUser', //添加用户
  // registerUser: 'm=Home&c=User&a=registerUser', //注册用户
  // modifyUser: 'm=Home&c=User&a=modifyUser', //修改除用户
  // loginUser: 'm=Home&c=User&a=login', //用户登录
  // checkUName: 'm=Home&c=User&a=checkUName', //用户登录状态
  addVideo: 'm=Home&c=Source&a=addSource', //添加video信息
  // editVideo: 'm=Home&c=Source&a=modifySource', //修改video信息
  // auditVideo: 'm=Home&c=Source&a=modifySourceStatus', //审核video
  getVideo: 'm=Home&c=Source&a=searchSource', //查询video列表信息
  getVideoFromId: 'm=Home&c=Source&a=getSourceById', //查询video单个信息
  getPlayedSource: 'm=Home&c=Source&a=playedSource', //获取用户播放资源
  getOwnSource: 'm=Home&c=Source&a=ownSource', //获取用户播放资源
  getBoughtSource: 'm=Home&c=Source&a=purchasedSource', //获取用户购买资源
  getVideoAuth: 'm=Home&c=Source&a=isHasAuth', //查询video播放权限
  getPlayStatistics: 'm=Home&c=PlaySource&a=playStatistics', //获取统计播放
  addPlayStatistics: 'm=Home&c=PlaySource&a=play', //播放记录
  getCategory: 'm=Home&c=Category&a=search', //查询分类
  getPayStatistics: 'm=Home&c=Pay&a=payStatistics', //获取付费统计
  getAccount: 'm=Home&c=Cash&a=account ', //获取账户金额
  getCashStatistics: 'm=Home&c=Cash&a=cashStatistics ', //获取账户金额
  getGroup:'m=Home&c=Group&a=search',//查询专栏
  getSourceGroup:'m=Home&c=SourceGroup&a=search',//查询专栏资源
  getSourceShow:'m=Home&c=SourceShow&a=search',//查询资源
  getUploadParams: '50051', //获取上传视频所需信息
  // getUploadList: '50052', //获取上传文件列表
  // delUpload: '50053', //删除上传文件
  addOrder: 12080, //确认去支付
  getCash: 12280, //红包提现

};

// 用户名|性别男1女2|省份|城市|国家|头像
var USERINFO = (function() {
  var str = getCookie('USERINFO') || "{}";
  var o = decodeURIComponent(str);
  // o = "infi000|1|上海|普陀|中国|http://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLBZrmCv1ibvDX2gQzedRUs5pgkhiaybibLCfgtnUDgdibqKjibzWwtTglGl15f0DvFLiaiclTeHDMB9MKY1A/132";
  var res = o.split("|") || [];
  return res;
})();

//时间格式
Date.prototype.format = function(format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
  return format;
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
  }
  return "";
}

function setCookie(name, value, day) {
  if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000;
    var date = new Date(+new Date() + expires);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString();
  } else {
    document.cookie = name + "=" + encodeURIComponent(value);
  }
}
