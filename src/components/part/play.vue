<template>
  <div class="page">
    <!-- header -->
    <dom-header :title="'视频展示'" :mrb40="true"></dom-header>
    <div class="play-box">
      <div class="preview-box">
        <div v-show="!playing" style="height: 100%;width: 100%">
          <img v-lazy="videoInfo.thumbinal" alt="" class="preview-img" :key="videoInfo.thumbinal">
          <div class="preview-mask">
            <a class="play-btn" @click="handlePlay">
             <img :src="imgSrc.play" alt="" width="100%" height="100%">
          </a>
          </div>
        </div>
        <video v-show="playing" :src="videoInfo.source" width="100%" height="100%" controls="" x5-playsinline="" playsinline="" webkit-playsinline="" style="background: #000" ref="dom_video"></video>
      </div>
      <dl class="text-left">
        <dt class="f1">{{videoInfo.title}}</dt>
        <dd class="f2">
          {{videoInfo.describe}}
        </dd>
        <dd class="f3">
          <div class="weui-flex">
            <div class="weui-flex__item"><span class="rank-money" v-html="filterCash(videoInfo.price)"></span>
            </div>
            <div class="weui-flex__item text-right">
              <img :src="imgSrc.play" alt="" class="icon-con">
              <span>{{videoInfo.playcount}}</span>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <div class="play-tag-title">
      推荐视频
    </div>
    <div class="swiper-container ">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in grouplist" :key="index">
          <dom-videoboxh :info="item"></dom-videoboxh>
        </div>
      </div>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import Swiper from "swiper";
import playbtn from "@/assets/play_btn.png";
import domVideoboxh from "@/components/widget/videoboxh";
import domHeader from "@/components/widget/header-back";

export default {
  props: [],
  data() {
    var sid = this.$route.query.sid;
    return {
      imgSrc: {
        play: playbtn,
      },
      sid: sid,
      videoInfo: {},
      grouplist: [],
      auth: '0',
      playing: false,
      loading: false
    }
  },
  computed: {

  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    filterCash(m) {
      var res = "<span style='color:green'>免费</span>";
      if (m > 0) {
        res = "<b style='color:red'>" + m + "元</b>";
      };
      return res;
    },
    handlePlay() {

      //判断是否有播放权限
      if (this.auth == '1' || this.videoInfo.price == '0') {
        //计数
        this.playing = true;
        var sid = this.sid;
        this.addPlayStatistics(sid);
        this.playVideo();
      } else {
        //提示去付费
        var videoInfo = this.videoInfo;
        this.$router.push({ name: 'pay', params: { info: videoInfo } });
      }
    },
    // handlePlay() {

    //     //临时用 测试付费 以后删掉 用上面的
    //     var videoInfo = this.videoInfo;
    //     this.$router.push({ name: 'pay', params: { info: videoInfo } });

    // },
    playVideo() {
      //播放视频
      var video = this.$refs.dom_video;
      video.play();
    },
    getSourceShow() {
      var that = this;
      var params = {
        sfid: 3
      };
      var sucf = function(d) {
        that.grouplist = d.rs;
        that.loading = false;
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf });
    },
    getVideoFromId(sid) {
      this.loading = true;
      var that = this;
      var params = {
        sid: sid
      };
      var sucf = function(d) {
        that.videoInfo = d;
        that.loading = false;
        //通过关键字keys去搜索当前视频的相关资源
        var keys = d.keys;
        that.getReleSource(keys);
      };
      var errf = function(d) {

      };
      this.$store.commit('getVideoFromId', { params: params, sucf: sucf })
    },
    getReleSource(key) {
      if(!key){
        return ;
      }

      var that = this;
      var params = {
        key: key
      };
      var sucf = function(d) {
        // that.grouplist = d.rs;
        var gl = that.grouplist;
        var drs = d.rs;
        gl.push.apply(gl, drs);
        that.grouplist = gl;
      };
      var errf = function(d) {

      };
      this.$store.commit('getReleSource', { params: params, sucf: sucf })
    },
    getVideoAuth(sid) {
      var that = this;
      var params = {
        sid: sid
      };
      var sucf = function(d) {
        that.auth = d;
      };
      this.$store.commit('getVideoAuth', { params: params, sucf: sucf });
    },
    addPlayStatistics(sid) {
      var that = this;
      var params = {
        sid: sid
      };
      this.$store.commit('addPlayStatistics', { params: params });
    },
  },
  watch: {

  },
  components: {
    loadingPage,
    domVideoboxh,
    domHeader
  },
  created() {

  },
  mounted() {

    var sid = this.sid;
    this.getSourceShow();
    this.getVideoFromId(sid);
    this.getVideoAuth(sid);


    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      // centeredSlides: true,
      initialSlide: 0,
      // loop: true
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    var sid = to.query.sid;
    this.getSourceShow();
    this.getVideoFromId(sid);
    this.getVideoAuth(sid);

    this.playing = false;
    next()
  },

};

</script>
<style scoped>
.play-box {
  width: 677px;
  padding: 39px;
  box-sizing: border-box;
  box-shadow: 0px 6px 20.79px 0.21px rgba(174, 174, 174, 0.75);
  margin: 30px auto 0;
  position: relative;
}

.play-box .preview-box {
  height: 436px;
  width: 100%;
  position: relative;
}

.play-box .preview-box .preview-img {
  width: 100%;
  height: 100%;
}

.preview-mask {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.33);
}

.play-btn {
  width: 181px;
  height: 124px;
  position: absolute;
  top: 162px;
  left: 50%;
  margin-left: -90px;
}


.f1 {
  font-size: 34px;
  color: #333;
  margin-top: 18px;
  margin-bottom: 18px;
}

.f2 {
  font-size: 28px;
  color: #a7a7a7;
  margin-bottom: 18px;
}

.f3 {
  font-size: 29px;
}

.play-tag-title {
  /*padding-left: 37px;*/
  padding: 40px 0 40px 37px;
  font-size: 36px;
  text-align: left;
}

.swiper-wrapper {}

.swiper-slide {
  width: 210px;
}

</style>
