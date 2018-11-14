<template>
  <div class="page">
    <!-- header -->
    <mt-header title="发现">
    </mt-header>
    <!-- <dom-search class="find-search" ></dom-search> -->
    <div class="find-con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <dom-groupbox :info="item" :desc="true" class="dom-groupbox" v-for="(item,index) in grouplist.rs" :key="index" :sid="item.id"></dom-groupbox>
      <dom-nodata v-show="noData"></dom-nodata>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import domSearch from "@/components/widget/search";
import domGroupbox from "@/components/widget/groupbox";
import domNodata from "@/components/widget/nodata";

export default {
  props: [],
  data() {
    return {
      grouplist: {
        page: 1,
        pagecount: 5,
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
      this.grouplist.page++;
      this.getGroup();
    },
    getGroup() {
      this.loading = true;
      this.noData=false;
      var that = this;
      var params = {
        page: that.grouplist.page,
        pagecount: that.grouplist.pagecount,
      };
      var sucf = function(d) {
        var rs = that.grouplist.rs;
        var drs = d.rs;
        rs.push.apply(rs, drs);
        var page = d.page;
        if (drs.length == 0) {
          //没有返回数据
          that.noData = true;
        }
        that.grouplist.page = d.page;
        that.grouplist.rs = rs;
        that.grouplist.total = d.total;
        that.loading = false;
      };
      var errf = function(d) {

      };
      this.$store.commit('getGroup', { params:params,sucf: sucf });
    }
  },
  watch: {

  },
  components: {
    loadingPage,
    domSearch,
    domGroupbox,
    domNodata
  },
  created() {

  },
  mounted() {
    this.getGroup();
  }

};

</script>
<style scoped>
.find-search {
  background: #e4413c;
  padding: 40px;
}

.find-con {
  padding-top: 40px;
  padding-left: 40px;
}

.dom-groupbox {
  margin-bottom: 32px;
}

</style>
