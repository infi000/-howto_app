<template>
  <div id="app" class="page">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    loginstatus() {
      var that = this;

      var token = this.$route.query.accesstoken || "";
      var openid = this.$route.query.openid || "";
      var loginstatus = this.$store.state.loginstatus;
      if (!loginstatus) {
        // if (!token && !openid) {
        if (token && openid) {

          this.$store.state.access_token = token;
          this.$store.state.openid = openid;

          var params = {
            token: token,
            openid: openid,
          };

          var sucf = function(d) {
            //成功
            that.$store.state.loginstatus = true;
            that.$store.state.userinfo = USERINFO || {};

          };
          var errf = function(d) {
            //失败
            window.login.JSWXLogin();

          };
          this.$store.commit('loginstatus', { params: params, sucf: sucf, errf: errf });
        }

      }

    },
  },
  mounted() {
    this.loginstatus();

  }
}

</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303133;
}

.mint-header {
  background-color: #e4413c!important;
  height: 100px!important;
  font-size: 34px!important;
}

.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background: #f8f8f8;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #e4413c;
}

.mrt-40 {
  margin-top: 40px;
}

.mrb-40 {
  margin-bottom: 40px;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-hide-1,
.text-hide-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}

.text-hide-1 {
  -webkit-line-clamp: 1;
}

.text-hide-2 {
  -webkit-line-clamp: 2;
}

.tag-con {
  padding: 3px 5px;
  border: 0.5px solid #666;
  display: inline-block;
}

.icon-con {
  height: 25px;
  display: inline-block;
}

.header-back {
  width: 18px;
}

img[lazy=error] {
  background-image: url('/static/img/test2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


img[lazy=loading] {
  margin: 100px auto;
  height: 80px!important;
  vertical-align: middle;
  width: 80px;
}

</style>
