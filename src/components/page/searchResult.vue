<template>
  <div class="page">
    <!-- header -->
    <dom-header :title="'搜索结果'" :mrb40="true"></dom-header>
    <div class="list-con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <dom-videoboxw v-for="(item,index) in videoList.rs" :key="index" :info="item" class="dom-videoboxw" :sid="item.id"></dom-videoboxw>
      <dom-nodata v-show="noData"></dom-nodata>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */

import loadingPage from "@/components/widget/loading";
import domVideoboxw from "@/components/widget/videoboxw";
import domNodata from "@/components/widget/nodata";
import domHeader from "@/components/widget/header-back";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    var title = this.$route.query.title || "";

    return {
      title: title,
      videoList: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      loading: false,
      noData: true,

    }
  },
  computed: {

  },
  methods: {
    loadMore() {
      if (this.loading || this.noData) {
        return;
      }
      this.videoList.page++;
      this.getVideo();

    },
    getVideo() {
      this.loading = true;
      this.noData = false;
      var that = this;
      var title = this.title;
      var params = {
        status:1,
        title: title,
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
      this.$store.commit('getVideo', { params: params, sucf: sucf, errf: errf})
    }
  },
  watch: {

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
    this.getVideo();
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

</style>
