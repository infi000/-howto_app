<template>
  <div class="page">
    <article class="weui-article">
      <section class="text-center">
        <div class="weui-flex headbox">
          <template v-if="loginstatus">
            <!-- 已登录 -->
            <div class="weui-flex__item">
              <div class="placeholder">
                <p>
                  <div class="head-img">
                    <img alt="" :src="userinfo['head']" width="100%" height="100%">
                  </div>
                </p>
              </div>
            </div>
            <div class="weui-flex__item">
              <div class="placeholder"> <span class="text-hide-1 headName">{{userinfo['name']}}</span></div>
            </div>
            <div class="weui-flex__item">
              <div class="placeholder">
              </div>
            </div>
          </template>
          <template v-else>
            <!-- 未登录 -->
            <div class="weui-flex__item">
            </div>
            <div class="weui-flex__item">
              <dl>
                <dt>
                  <div class="head-img"><img :src="imgSrc['head']" width="100%" height="100%"></div>
                </dt>
                <dd><a class="btn-login" onClick="window.login.JSWXLogin()">登陆</a></dd>
              </dl>
            </div>
            <div class="weui-flex__item">
            </div>
          </template>
        </div>
        <div class="weui-flex me-con-1">
          <div class="weui-flex__item">
            <div class="placeholder">
              <dl @click="goto('played')">
                <dt>
                  <div class="me-con-1-imgbox"><img :src="imgSrc.ph" alt="" width="100%" height="100%"></div>
                </dt>
                <dd>
                  <span>播放历史</span>
                </dd>
              </dl>
            </div>
          </div>
          <div class="weui-flex__item">
            <div class="placeholder">
              <dl @click="goto('bought')">
                <dt>
                  <div class="me-con-1-imgbox"><img :src="imgSrc.bought" alt="" width="100%" height="100%"></div>
                </dt>
                <dd>
                  <span>已购视频</span>
                </dd>
              </dl>
            </div>
          </div>
          <div class="weui-flex__item">
            <div class="placeholder">
              <dl @click="goto('own')">
                <dt>
                  <div class="me-con-1-imgbox"><img :src="imgSrc.mv" alt="" width="100%" height="100%"></div>
                </dt>
                <dd>
                  <span>我的视频</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </article>
    <div class="weui-flex me-con-2" @click="goto('playstatistics')">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.ps" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>播放统计</span></div>
    </div>
    <div class="weui-flex me-con-2" @click="goto('incomestatistics')">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.mi" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>收入统计</span></div>
    </div>
    <div class="weui-flex me-con-2" @click="goto('cash')">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.mi" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>提现</span></div>
    </div>
    <div class="weui-flex me-con-2" @click="goto('upload')">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.uv" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>上传视频</span></div>
    </div>
    <div class="weui-flex me-con-2" @click="goto('about')">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.gy" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>关于</span></div>
    </div>
    <div class="weui-flex me-con-2" @click="goto('loopplay')" v-if="false">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.uv" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>抖音</span></div>
    </div>
       <div class="weui-flex me-con-2" @click="goto('dev')" v-if="false">
      <div class="me-con-2-l"><img slot="icon" :src="imgSrc.uv" height="100%" class="mt-cell-img"></div>
      <div class="weui-flex__item text-left"><span>语音</span></div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import dlSrc from "@/assets/dl.png";
import phSrc from "@/assets/ph.png";
import boughtSrc from "@/assets/bought.png";
import mvSrc from "@/assets/mv.png";
import psSrc from "@/assets/ps.png";
import miSrc from "@/assets/mi.png";
import uvSrc from "@/assets/uv.png";
import gySrc from "@/assets/gy.png";
export default {
  props: [],
  data() {

    return {

      imgSrc: {
        ph: phSrc,
        bought: boughtSrc,
        mv: mvSrc,
        ps: psSrc,
        mi: miSrc,
        uv: uvSrc,
        gy: gySrc,
        head: dlSrc
      },

    };
  },
  computed: {
    loginstatus() {
      var s = this.$store.state.loginstatus;
      return s;
    },
    userinfo() {
      var userinfo = {};
      userinfo.name = this.$store.state.userinfo[0] || '未知';
      userinfo.sex = this.$store.state.userinfo[1];
      userinfo.addr1 = this.$store.state.userinfo[2] || '未知';
      userinfo.addr2 = this.$store.state.userinfo[3] || '未知';
      userinfo.addr3 = this.$store.state.userinfo[4] || '未知';
      userinfo.head = this.$store.state.userinfo[5] || dlSrc;

      return userinfo;
    }
  },
  methods: {
    goto(url) {
      this.$router.push({ path: url, query: {} });
    },
    handleLogin() {
      // window.login.AndroidToJS('param');
      window.login.JSWXLogin();


    },
  },
  watch: {

  },
  components: {

  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.page {
  background: #fff;
}

.weui-article {
  padding: 0;
}

.headbox {
  width: 100%;
  height: 282px;
  background: #e4413c;
}

.head-img {
  width: 144px;
  height: 144px;
  margin: 44px auto 0;
}

.headName {
  font-size: 33px;
  color: #fff;
  margin-top: 64px;
}

.me-con-1 {
  padding-top: 40px;
  height: 232px;
  background: #f8f8f8;
  box-sizing: content-box;
}

.weui-article section {
  margin-bottom: 0;
}

.me-con-1-imgbox {
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;
}


.me-con-2 {
  height: 100px;
  font-size: 32px;
  box-sizing: border-box;
  border-bottom: 0.5px solid #f1f1f1;
  padding-top: 30px;
  box-sizing: border-box;
}

.me-con-2-l {
  width: 92px;
  height: 40px;
}

.btn-login {
  color: #fff;
  font-size: 33px;
  display: inline-block;
  margin-top: 20px;
}

</style>
