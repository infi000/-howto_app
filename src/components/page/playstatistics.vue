<template>
  <div class="mebox-page">
    <mt-header fixed title="播放统计">
      <router-link to="/mebox" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <p class="tagName">播放统计</p>
    <ve-line :data="chartData" :settings="chartSettings" v-if="chartData['rows'].length>0"></ve-line>
    <div class="weui-loadmore weui-loadmore_line" v-else>
      <span class="weui-loadmore__tips">暂无数据</span>
    </div>
        <loading-page v-show="loading"></loading-page>

  </div>
</template>
<script>
/*jshint esversion: 6 */
import VeLine from 'v-charts/lib/line.common'
import loadingPage from "@/components/widget/loading";
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
      loading:false
    };
  },
  computed: {

  },
  methods: {
    getPlayStatistics() {
      this.loading = true;
      var that = this;
      var params = {
        stime: 1, //开始播放时间（大于等于）;
        etime: 9999999999 //结束播放时间(小于);
      };
      var sucf = function(d) {
        that.loading = false;
        // var d = [{ "pday": "2018-09-14", "pcount": "4" }, { "pday": "2018-09-17", "pcount": "5" }, { "pday": "2018-09-18", "pcount": "5" }];
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
      this.$store.commit('getPlayStatistics', { params: params,sucf:sucf,errf:errf })
    }
  },
  watch: {

  },
  components: {
    VeLine,loadingPage
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
