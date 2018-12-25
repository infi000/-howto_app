<template>
  <div class="page">
    <template v-if="show">
      <dom-header :title="'搜索结果:'+title" :mrb40="true"></dom-header>
      <div class="list-con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
        <dom-videoboxw v-for="(item,index) in videoList.rs" :key="index" :info="item" class="dom-videoboxw" :sid="item.id"></dom-videoboxw>
        <dom-nodata v-show="noData"></dom-nodata>
      </div>
    </template>
    <template v-else>
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title">点击开始讲话</strong></div>
        <div class="weui-dialog__bd" v-if="isRecording">录音中。。。</div>
        <div class="weui-dialog__bd" v-else>{{warningMsg}}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="goto('home')">返回</a>
          <!-- <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @touchstart="handleRec" @touchend="handleSend" v-if="isRecording">讲话</a> -->
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="handleRec" v-if="!isRecording">讲话</a>
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="handleSend" v-else>结束</a>
        </div>
      </div>
    </template>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
// import Recorder from '@/recorder/recorder.js';
import loadingPage from "@/components/widget/loading";
import domVideoboxw from "@/components/widget/videoboxw";
import domNodata from "@/components/widget/nodata";
import domHeader from "@/components/widget/header-back";
import { Toast } from 'mint-ui';

var audio_context;
var recorder;

export default {
  props: [],
  data() {
    return {
      title: '',
      videoList: {
        aispeech: [],
        page: 1,
        pagecount: 10,
        rs: [],
        total: "0",
        searchkey: '',
      },
      loading: false,
      noData: true,
      isRecording: false,
      warningMsg: '',
      show: false, //显示结果
    };
  },
  computed: {
    recorderInfo() {
      var res = this.$store.state.recorderInfo;
      return res;
    }
  },
  methods: {
    goto(url) {
      this.$router.push({ path: url, query: {} });
    },
    loadMore() {
      if (this.loading || this.noData) {
        return;
      }
      this.videoList.page++;
      this.getVideo();

    },
    handleRec() {
      window.login.JSStartRecord();
      this.isRecording = true;
      this.$store.state.recorderInfo="";
      this.warningMsg = "开始录音";

    },
    handleSend() {
      window.login.JSStopRecord();

      // window.recordStop("222222222222222");
      this.isRecording = false;
      this.warningMsg = "搜索中。。";
    },
    getSourceFromAudio() {
      var that = this;
      var base=this.recorderInfo;
      var params = {
        adata: base,
        formart: 'pcm'
      };
      var sucf = function(d) {
        //正确的显示列表
        that.warningMsg = "讲话时请按住按钮!";
        //显示结果
        that.show = true;
        that.title = d.searchkey;
        that.videoList = d;
      };
      var errf = function(d) {
        //错误的显示请再试一次
        that.warningMsg = d;
        // that.warningMsg = "请大声再说一次!";
      };
      that.$store.commit('getSourceFromAudio', { params: params, sucf: sucf, errf: errf });
    }
  },
  watch: {
    recorderInfo(){
      if(this.recorderInfo){
        this.getSourceFromAudio();
      }
    }
  },
  components: {
    loadingPage,
    domVideoboxw,
    domNodata,
    domHeader
  },
  created() {

  },
  mounted() {
    // try {
    //   // webkit shim
    //   window.AudioContext = window.AudioContext || window.webkitAudioContext;
    //   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    //   window.URL = window.URL || window.webkitURL;

    //   audio_context = new AudioContext;

    // } catch (e) {
    //   alert('No web audio support in this browser!');
    // }

    // navigator.getUserMedia({ audio: true }, this.startUserMedia, function(e) {

    // });
  }

};

</script>
<style scoped>
.list-con {
  padding: 0 40px;
}

.dom-videoboxw {
  margin-bottom: 18px;
}

.weui-dialog__btn_primary {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
