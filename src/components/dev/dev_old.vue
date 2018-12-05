<template>
  <div class="page">
    <dom-header :title="'查看信息'" :mrb40="true"></dom-header>
    <h1>

<a href="https://xiangyuecn.github.io/Recorder/">
  点击跳转到测试录音页面</a>  </h1>
    <h1>access_toke11111n：</h1>
    <p>{{token||'空'}}</p>
    <h1>openid</h1>
    <p>{{openid||'空'}}</p>
    <br>
    <h1>userinfo</h1>
    <p v-for="(item,index) in userinfo" :key="index">{{item}}</p>
    <br>
    <h1>payinfo</h1>
    <p>{{payinfo||'空'}}</p>
    <a @click="startRecording">点击开始录音</a>
    <a @click="stopRecording">结束录音</a>
    <h1>{{isRecording?'录音中':'等待开始'}}</h1>
    <!--     <a @click="download">下载</a>
    <a @click="handleSend">发送</a> -->
    <ul id="recordingslist"></ul>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domHeader from "@/components/widget/header-back";
// import Recorder from '@/recorder/recorder.js';
// import Recorder from 'recorder-js';

var audio_context;
var recorder;


export default {
  props: [],
  data() {
    return {
      isRecording: false,
      blob: null
    };
  },
  computed: {
    token() {
      return this.$store.state.access_token;
    },
    openid() {
      return this.$store.state.openid;
    },
    userinfo() {
      return this.$store.state.userinfo;
    },
    payinfo() {
      return this.$store.state.payInfo;

    }
  },
  methods: {
    goto(url) {
      this.$router.push({ path: url, query: {} });
    },
    // ########################语音相关方法
    startUserMedia(stream) {
      var input = audio_context.createMediaStreamSource(stream);
      console.log('Media stream created.');
      recorder = new Recorder(input);
      console.log(recorder)
      console.log('Recorder initialised.');
    },
    startRecording() {
      recorder && recorder.record();
      this.isRecording = true
    },
    stopRecording() {
      recorder && recorder.stop();
      this.isRecording = false
      this.handlePlay();
      recorder.clear();
    },
    download() {
      var blob = this.blob;
      Recorder.download(blob, 'my-audio-file'); // downloads a .wav file
    },
    // ########################语音相关方法 结束****************************
    handleSend() {
      var that = this;
      recorder && recorder.exportWAV(function(blob) {
        console.log(blob)
        window.BLOB = blob;
        that.blob = blob;
        var reader = new FileReader();

        reader.onload = function() {
          console.log(reader);
          var res = reader.result;
          var base = res.replace(/\+/g, "%2B");
          var base = res.replace('data:audio/wav;base64,', "");
          that.getSourceFromAudio(base);
        };
        reader.readAsDataURL(blob);
      });

    },

    handlePlay() {
      recorder && recorder.exportWAV(function(blob) {

        window.BLOB = blob;

        var url = URL.createObjectURL(blob);
        var li = document.createElement('li');
        var au = document.createElement('audio');
        var hf = document.createElement('a');

        au.controls = true;
        au.src = url;
        hf.href = url;
        hf.download = new Date().toISOString() + '.wav';
        hf.innerHTML = hf.download;
        li.appendChild(au);
        li.appendChild(hf);
        recordingslist.appendChild(li);
      });
    },
    getSourceFromAudio(base) {
      var that = this;
      var params = {
        adata: base
      };
      var sucf = function(d) {

      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceFromAudio', { params: params, sucf: sucf });
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
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
      window.URL = window.URL || window.webkitURL;

      audio_context = new AudioContext;
      console.log('Audio context set up.');
      console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
      alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({ audio: true }, this.startUserMedia, function(e) {
      console.log('No live audio input: ' + e);
    });
  }

};

</script>
<style scoped>


</style>
