<template>
  <div class="page">
    <dom-header :title="'播放历史'" :mrb40="true"></dom-header>
    <div class="con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <domVideoboxw v-for="(item,index) in videoList.rs" :key="item.id" class="dom-videoboxw" :info="item"></domVideoboxw>
    </div>
    <dom-nodata v-show="noData"></dom-nodata>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import domVideoboxw from "@/components/widget/videoboxw";
import domHeader from "@/components/widget/header-back";
import domNodata from "@/components/widget/nodata";
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
    loadMore() {
      if (this.loading || this.noData) {
        return;
      }
      this.videoList.page++;
      this.getPlayedSource();
    },
    getPlayedSource() {
      this.loading = true;
      this.noData=false;
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
          message:d,
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getPlayedSource', { params: params, sucf: sucf, errf: errf });
    }
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
    this.getPlayedSource();
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
