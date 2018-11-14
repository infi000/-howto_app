<template>
  <div class="page">
    <dom-header :title="'收入统计'" :mrb40="true"></dom-header>
    <p class="tagName">收入统计：共{{chartData.total}}元</p>
    <ve-line :data="chartData" :settings="chartSettings" v-if="chartData['rows'].length>0"></ve-line>
    <dom-nodata v-else></dom-nodata>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import VeLine from 'v-charts/lib/line.common';
import loadingPage from "@/components/widget/loading";
import domHeader from "@/components/widget/header-back";
import domNodata from "@/components/widget/nodata";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    this.chartSettings = {
      labelMap: {
        pay: '收入',
      }
    };
    return {
      chartData: {
        columns: ['pday', 'pay', ],
        rows: [],
        total: 0
      },
      loading: false
    };
  },
  computed: {

  },
  methods: {
    getPayStatistics() {
      this.loading = true;
      var that = this;
      var params = {
        stime: 1, //开始播放时间（大于等于）;
        etime: 9999999999 //结束播放时间(小于);
      };
      var sucf = function(d) {
        that.loading = false;
        // var d = [{ "pday": "2018-09-14", "pay": "4" }, { "pday": "2018-09-17", "pay": "5" }, { "pday": "2018-09-18", "pay": "5" }];
        that.chartData.rows = d.statistics;
        that.chartData.total = d.total;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getPayStatistics', { params: params, sucf: sucf, errf: errf })
    }
  },
  watch: {

  },
  components: {
    VeLine,
    loadingPage,
    domHeader,
    domNodata
  },
  created() {

  },
  mounted() {
    this.getPayStatistics();
  }

};

</script>
<style scoped>


</style>
