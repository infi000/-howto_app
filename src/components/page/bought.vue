<template>
  <div class="mebox-page">
    <mt-header fixed title="已购视频">
      <router-link to="/mebox" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <p class="tagName">已购视频</p>
    <a class="weui-media-box weui-media-box_appmsg" v-for="(item,index) in videoList.rs"  @click="play(item.sid)">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb" v-lazy="item.thumbinal" alt="">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{item.title}}</h4>
        <p class="weui-media-box__desc">{{item.describe}}</p>
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
    play(id) {
      var id = id || '';
      this.$router.push({ path: "videopage", query: { id: id } });
    },
    getBoughtSource() {
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
      this.$store.commit('getBoughtSource', { sucf: sucf,errf:errf });
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
    this.getBoughtSource();
  }

};

</script>
<style scoped>


</style>
