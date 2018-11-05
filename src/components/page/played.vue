<template>
  <div class="mebox-page">
    <mt-header fixed title="播放历史">
        <mt-button icon="back"  slot="left" @click="back"></mt-button>
    </mt-header>
    <p class="tagName">播放历史</p>
    <a class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in videoList.rs" @click="play(item.sid)">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb" v-lazy="item.thumbinal" alt="">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{item.title}}</h4>
        <p class="weui-media-box__desc">{{item.describe}}</p>
      </div>
    </a>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    return {
      videoList: {
        page: 1,
        pagecount: 20,
        rs: [],
        total: 0,
      },
      loading: false
    };
  },
  computed: {

  },
  methods: {   back() {
      this.$router.go(-1);
    },
    play(id) {
      var id = id || '';
      this.$router.push({ path: "videopage", query: { id: id } });
    },
    getPlayedSource() {
      this.loading = true;
      var that = this;
      var params = {};
      var sucf = function(d) {
        that.loading = false;
        that.videoList = d;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getPlayedSource', { sucf: sucf, errf: errf });
    }
  },
  watch: {

  },
  components: {
    loadingPage
  },
  created() {

  },
  mounted() {
    this.getPlayedSource();
  }

};

</script>
<style scoped>


</style>
