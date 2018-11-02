<template>
  <div class="page">
    <!-- header -->
    <mt-header title="视频展示">
      <mt-button icon="back" slot="left" @click="goback"></mt-button>
    </mt-header>
    <div class="play-box">
      <div class="preview-box">
        <template v-if="!playing">
          <img v-lazy="videoInfo.thumbinal" alt="" class="preview-img">
          <div class="preview-mask">
            <a class="play-btn" @click="handlePlay">
             <img :src="imgSrc.play" alt="" width="100%" height="100%">
          </a>
          </div>
        </template>
        <video v-else :src="videoInfo.source" width="100%" height="100%" controls="" x5-playsinline="" playsinline="" webkit-playsinline="" style="background: #000"></video>
      </div>
      <dl class="text-left">
        <dt class="f1">{{videoInfo.title}}</dt>
        <dd class="f2">
          {{videoInfo.describe}}
        </dd>
        <dd class="f3">
          <div class="weui-flex">
            <div class="weui-flex__item"><span class="rank-money">{{videoInfo.price}}元</span>
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
        <div class="swiper-slide" v-for="(item,index) in grouplist.rs" :key="index">
          <dom-videoboxh :info="item"></dom-videoboxh>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
// import Swiper from "swiper";
import playbtn from "@/assets/play_btn.png";
import domVideoboxh from "@/components/widget/videoboxh";
export default {
  props: [],
  data() {
    var sid = this.$route.query.sid;
    return {
      imgSrc: {
        play: playbtn
      },
      sid: sid,
      videoInfo: {},
      grouplist: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      auth: '0',
      playing: false,
    }
  },
  computed: {

  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    handlePlay() {

      //判断是否有播放权限
      if (this.auth == '1' || this.videoInfo.price == '0') {
        //计数
        this.playing = true;
        var sid=this.sid;
        this.addPlayStatistics(sid);
      } else {
        //提示去付费
        var videoInfo = this.videoInfo
        this.$router.push({ name: 'pay', params: { info: videoInfo } });
      }
    },
    getVideoFromId(sid) {
      var that = this;
      var params = {
        sid: sid
      };
      var sucf = function(d) {
        that.videoInfo = d;
      };
      var errf = function(d) {

      };
      this.$store.commit('getVideoFromId', { params: params, sucf: sucf })
    },
    getSourceShow(sfid) {
      var that = this;
      var params = {
        sfid: sfid
      };
      var sucf = function(d) {
        // sfid 1banner 2zl 3sp 6jc
        that.grouplist = d;
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf })
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
    domVideoboxh
  },
  created() {

  },
  mounted() {

    var sid = this.sid;
    this.getVideoFromId(sid);
    this.getVideoAuth(sid);

    this.getSourceShow(2);
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      centeredSlides: true,
      initialSlide: 0,
      loop: true
    });
  }

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
