<template>
  <div class="mebox-page">
    <dom-header :title="'我的视频'" :mrb40="true"></dom-header>
    <div class="con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <domVideoboxw v-for="(item,index) in videoList.rs" :key="item.id" class="dom-videoboxw" :info="item" :sid="item.id"></domVideoboxw>
    </div>
      <dom-nodata v-show="noData"></dom-nodata>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import domHeader from "@/components/widget/header-back";
import domNodata from "@/components/widget/nodata";
import domVideoboxw from "@/components/widget/videoboxw";
import { Toast } from 'mint-ui';


export default {
  props: [],
  data() {
    return {
      videoList: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: 0,
      },
      loading: false,
      noData: true
    };
  },
  computed: {

  },
  methods: {
    // 没用了
    // statusFormat(status) {
    //   var s = status;
    //   var r = {};
    //   switch (s) {
    //     case "0":
    //       r = { name: "审核中 ", type: "warning " };
    //       break;
    //     case "1":
    //       r = { name: "已过审 ", type: "success " };
    //       break;
    //     case "4":
    //       r = { name: "未过审 ", type: "danger " };
    //       break;
    //     case "-1":
    //       r = { name: "下线 ", type: "info " };
    //       break;
    //   }
    //   return r;
    // },
    // dateFormat(date) {
    //   var d = date * 1000;
    //   var t = new Date(d);
    //   t = t.format('yyyy-MM-dd  hh:mm:ss');
    //   return t;
    // },
    loadMore() {
      if (this.loading || this.noData) {
        return;
      }
      this.videoList.page++;
      this.getOwnSource();
    },
    getOwnSource() {
      this.loading = true;
      this.noData = false;

      var that = this;
      var params = {
        page: that.videoList.page,
        pagecount: that.videoList.pagecount,
      };
      var sucf = function(d) {
        var rs = that.videoList.rs;
        var drs = d.rs;
        rs.push.apply(rs, drs);
        var page = d.page;
        if (drs.length == 0) {
          //没有返回数据
          that.noData = true;
        }
        that.videoList.page = d.page;
        that.videoList.rs = rs;
        that.videoList.total = d.total;
        that.loading = false;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getOwnSource', { params: params, sucf: sucf, errf: errf });
    },
  },
  watch: {

  },
  components: {
    loadingPage,
    domVideoboxw,
    domHeader,
    domNodata
  },
  created() {

  },
  mounted() {
    this.getOwnSource();
  }

};

</script>
<style scoped>
.dom-videoboxw {
  margin-bottom: 36px;
}

.con {
  padding: 0 20px;
}

</style>
