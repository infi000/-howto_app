<template>
  <div class="mebox-page">
    <mt-header fixed title="我的视频">
      <router-link to="/mebox" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <p class="tagName">我的视频</p>
    <a class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in videoList.rs" @click="play(item.id)">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb" v-lazy="item.thumbinal" alt="">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{item.title}}</h4>
        <p class="weui-media-box__desc">
          <span>{{dateFormat(item.createtime)}}</span><b class="pull-right">{{statusFormat(item.status).name}} </b></p>
      </div>
    </a>
    <div class="weui-loadmore weui-loadmore_line" v-show="videoList['rs'].length==0">
      <span class="weui-loadmore__tips">暂无数据</span>
    </div>
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
        total: 0
      },
       loading: false
    };
  },
  computed: {

  },
  methods: {
    statusFormat(status) {
      var s = status;
      var r = {};
      switch (s) {
        case "0":
          r = { name: "审核中 ", type: "warning " };
          break;
        case "1":
          r = { name: "已过审 ", type: "success " };
          break;
        case "4":
          r = { name: "未过审 ", type: "danger " };
          break;
        case "-1":
          r = { name: "下线 ", type: "info " };
          break;
      }
      return r;
    },
    dateFormat(date) {
      var d = date * 1000;
      var t = new Date(d);
      t = t.format('yyyy-MM-dd  hh:mm:ss');
      return t;
    },
    play(id) {
      var id = id || '';
      this.$router.push({ path: "videopage", query: { id: id } });
    },
    getOwnSource() {
       this.loading = true;
      var that = this;
      var params = {};
      var sucf = function(d) {
         that.loading = false
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
      this.$store.commit('getOwnSource', { sucf: sucf,errf:errf });
    },
  },
  watch: {

  },
  components: {
 loadingPage
  },
  created() {

  },
  mounted() {
    this.getOwnSource();
  }

};

</script>
<style scoped>
.weui-media-box__desc {
  padding: 4px 0;
}

</style>
