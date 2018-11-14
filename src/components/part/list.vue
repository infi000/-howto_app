<template>
  <div class="page">
    <!-- header -->
    <dom-header :title="'专栏列表'" :mrb40="true"></dom-header>
    <div class="list-con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <dom-videoboxw v-for="(item,index) in listInfo.rs" :key="index" :info="item" class="dom-videoboxw"></dom-videoboxw>
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

export default {
  props: [],
  data() {
    var type = this.$route.query.type;
    var gid = this.$route.query.gid;
    return {
      type: type,
      gid: gid,
      listInfo: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      loading: false,
      noData: true

    }
  },
  computed: {

  },
  methods: {
    loadMore() {

      if (this.loading || this.noData) {
        return;
      }
      this.listInfo.page++;
      this.getSourceGroup();
    },
    getSourceGroup() {
      this.loading = true;
           this.noData=false;
      var that = this;
      var params = {
        page: that.listInfo.page,
        pagecount: that.listInfo.pagecount,
        gid: this.gid
      };
      var sucf = function(d) {
        var rs = that.listInfo.rs;
        var drs = d.rs;
        rs.push.apply(rs, drs);
        var page = d.page;
        if (drs.length == 0) {
          //没有返回数据
          that.noData = true;
        }
        that.listInfo.page = d.page;
        that.listInfo.rs = rs;
        that.listInfo.total = d.total;
        that.loading = false;
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceGroup', { params: params, sucf: sucf })
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
    if (this.type == "group") {
      this.getSourceGroup();

    }
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
