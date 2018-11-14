<template>
  <div class="mebox-page">
    <dom-header :title="'播放统计'" :mrb40="true"></dom-header>
    <ve-line :data="chartData" :settings="chartSettings" v-if="chartData['rows'].length>0"></ve-line>
    <dom-nodata v-else></dom-nodata>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import VeLine from 'v-charts/lib/line.common'
import loadingPage from "@/components/widget/loading";
import domHeader from "@/components/widget/header-back";
import domNodata from "@/components/widget/nodata";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    this.chartSettings = {
      labelMap: {
        pcount: '播放量',
      }
    };
    return {
      chartData: {
        columns: ['pday', 'pcount', ],
        rows: [

        ]
      },
      loading: false
    };
  },
  computed: {

  },
  methods: {

    getPlayStatistics() {
      // var d = [{ "pday": "2018-09-14", "pcount": "4" }, { "pday": "2018-09-17", "pcount": "5" }, { "pday": "2018-09-18", "pcount": "5" }];
      // this.chartData.rows = d;


      this.loading = true;
      var that = this;
      var params = {
        stime: 1, //开始播放时间（大于等于）;
        etime: 9999999999 //结束播放时间(小于);
      };
      var sucf = function(d) {
        that.loading = false;
        that.chartData.rows = d;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getPlayStatistics', { params: params, sucf: sucf, errf: errf })
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
    this.getPlayStatistics();
  }

};

</script>
<style scoped>


</style>
