<template>
  <div class="mebox-page">
    <mt-header fixed title="提现">
      <router-link to="/mebox" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <p class="tagName">共提现{{chartData.total}}元
      <br>账户余额{{account}}元</p>
    <template v-if="chartData['rows'].length>0">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </template>
    <div class="weui-loadmore weui-loadmore_line" v-else>
      <span class="weui-loadmore__tips">暂无数据</span>
    </div>
    <a class="weui-btn weui-btn_primary" style="width: 200px" @click="handleCash">去提现</a>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import VeLine from 'v-charts/lib/line.common';
import loadingPage from "@/components/widget/loading";
import { Toast } from 'mint-ui';
export default {
  props: [],
  data() {
    this.chartSettings = {
      labelMap: {
        cash: '金额',
      }
    };
    return {
      chartData: {
        columns: ['pday', 'cash', ],
        rows: [],
        total: 0
      },
      account: 0, //余额
      loading: false
    };
  },
  computed: {

  },
  methods: {
    goto(url) {

      // this.$router.push({name:'cashment',params:{total:total}});
    },
    handleCash() {
      if (this.account < 1) {
        //提示小于1元无法提现
        Toast({
          message: '余额小于1元无法提现',
          position: 'top',
          duration: 2000
        });
      } else {
        //跳转到提现页面
        var total = this.account;
        this.$router.push({ name: 'cashment', params: { total: total } });
      }
    },
    getCashStatistics() {
      this.loading = true;
      var that = this;
      var params = {
        stime: 1, //开始播放时间（大于等于）;
        etime: 9999999999 //结束播放时间(小于);
      };
      var sucf = function(d) {
        that.loading = false;
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
      this.$store.commit('getCashStatistics', { params: params, sucf: sucf, errf: errf });
    },
    getAccount() {
      var that = this;
      var params = {};
      var sucf = function(d) {
        that.account = d['balance'] || 0;
      };
      this.$store.commit('getAccount', { params: params, sucf: sucf });
    },
  },
  watch: {

  },
  components: {
    VeLine,
    loadingPage
  },
  created() {

  },
  mounted() {
    this.getCashStatistics();
    this.getAccount();
  }

};

</script>
<style scoped>


</style>
