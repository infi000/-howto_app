<template>
  <div class="page">
    <dom-header :title="'查看信息'" :mrb40="true"></dom-header>
    <form id="submit-file" style="display: hidden;" action="upload_file.php" method="post" enctype="multipart/form-data">
      <input id="ttt" type="file" name="file" ref="file" />
    </form>
    <div class="con text-left">
      <p><b>状态：</b>{{isRecording?'录音中':'等待开始'}}</p>
      <p><b>app返回给我的结果：</b>{{recorderInfo}}</p>
      <p><b>错误信息：</b>{{warningMsg}}</p>
      <p><b>搜索结果：</b>{{videoList.searchkey}}</p>
      <mt-radio title="音频格式" v-model="format" :options="formatArr">
      </mt-radio>
    </div>
    <div>
      <button @click="handleStar">开始录音</button>
      <button @click="handleStop">结束录音</button>
      <button @click="handleSend">发送文件</button>
      <!-- <button @click="handleGet">生成音频文件</button> -->
    </div>
    <!-- <audio :src="fileurl" controls=""></audio> -->
  </div>
</template>
<script>
/*jshint esversion: 6 */
// 这个事测董中锋APP掉用语音的
//
import domHeader from "@/components/widget/header-back";

var audio_context;
var recorder;


export default {
  props: [],
  data() {
    return {
      isRecording: false,
      blob: null,
      files: '',
      fileurl: '',
      warningMsg: "无",
      videoList: {
        aispeech: [],
        page: 1,
        pagecount: 10,
        rs: [],
        total: "0",
        searchkey: '',
      },
      format:'amr',
      formatArr: ['pcm', 'amr', 'wav']
    };
  },
  computed: {
    recorderInfo() {
      return this.$store.state.recorderInfo;
      // return res;
    }
  },
  methods: {
    goto(url) {
      this.$router.push({ path: url, query: {} });
    },
    handleStar() {
      this.$store.state.recorderInfo = '';
      window.login.JSStartRecord();
      this.isRecording = true;
    },
    handleStop() {
      window.login.JSStopRecord();
      this.isRecording = false;
    },
    handleSend_file() {
      var that = this;
      var file = document.getElementById("ttt");
      var reader = new FileReader();
      reader.readAsDataURL(file.files[0]);
      reader.onload = function() {
        var res = reader.result;
        var base = res.replace('data:;base64,', "");
        that.getSourceFromAudio(base);
      }
    },
    handleSend() {
      var base = this.$store.state.recorderInfo;
      this.getSourceFromAudio(base);
    },
    handleGet() {

      this.files = this.$refs.file;
      if (this.files.files.length == 0) {
        alert("请先录音或者上传音频文件");
        return;
      }
      this.fileurl = window.URL.createObjectURL(this.$refs.file.files[0]);
    },
    getSourceFromAudio(base) {
      var that = this;
      var params = {
        adata: base,
        format: that.format,
      };
      var sucf = function(d) {

        that.videoList = d;
      };
      var errf = function(d) {
        //错误的显示请再试一次

        that.warningMsg = d;
        // that.warningMsg = "请大声再说一次!";
      };
      this.$store.commit('getSourceFromAudio', { params: params, sucf: sucf, errf: errf });
    }
  },
  watch: {

  },
  components: {
    domHeader
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
audio {
  width: 100%;
  height: 100px;
}

p {
  font-size: 28px;
  margin-bottom: 20px;
}

</style>
