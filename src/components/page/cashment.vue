<template>
  <div class="page">
    <dom-header :title="'提现'" :mrb40="true"></dom-header>
    <p class="tagName">账户金额：{{total}}元</p>
    <div class="pay_box">
      <div class="page-hd">
        <div class="weui-cells__title" style="font-size: 18px;">输入需要提取的金额(需大于1元)</div>
      </div>
      <div class="weui-cells pay_input_box">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" v-model.number="input" min="0" max="10000" />
            <b>￥</b>
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" @click="handleSent" disabled="false">提交申请</a>
      </div>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import loadingPage from "@/components/widget/loading";
import domHeader from "@/components/widget/header-back";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    var total = this.$route.params.total;
    return {
      total: total,
      input: 0,
      loading: false
    };
  },
  computed: {

  },
  methods: {
    handleSent() {
      if (this.check()) {
        this.getCash();
      }
    },
    check() {
      var t = parseInt(this.total),
        i = parseInt(this.input),
        exp = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
      if (exp.test(i)) {
        //是数字
        if (i > t) {
          alert("请输入正确金额");
          return false;
        }
        if (i < 1) {
          alert("提现金额需要大于1元");
          return false;
        }
        return true;
      } else {
        alert("请输入正确金额");
        return false;
      }
    },
    getCash() {
      this.loading = true;
      var that = this;
      var params = {
        cash: that.input
      };
      var sucf = function(d) {
        that.loading = false;
        Toast({
          message: '提现成功,请及时在好途公众号领取!',
          iconClass: 'icon icon-success',
          duration: 3000
        });
        that.$router.go(-1);
      };
      var errf = function(d) {
        that.loading = false;
        Toast({
          message: d,
          iconClass: 'icon icon-success',
          duration: 2000
        });
        that.$router.go(-1);
      };
      this.$store.commit('getCash', { params: params, sucf: sucf, errf: errf });
    },
  },
  watch: {

  },
  components: {
    loadingPage,
        domHeader,
  },
  created() {

  },
  mounted() {
    // this.getAccount();
  }

};

</script>
<style scoped>
.pay_box {
  width: 90%;
  margin: 20px auto;
  padding: 10px 10px 30px;
  background-color: #fff;
  box-shadow: 1px 1px 1px #bebcbc;
}

.pay_input_box {
  margin-bottom: 1.17647059em;
  margin-top: 0;
}

.pay_input_box b {
  position: absolute;
  top: 12px;
  font-size: 30px;
  left: 4px;
}

.pay_btn_box {
  margin: 5px;
  padding: 0 10px;
}

.weui-input {
  font-size: 30px;
  text-align: right;
}

.weui-cells__title {
  font-size: 18px;
}

</style>
