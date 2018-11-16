<template>
  <div class="page text-left">
    <dom-header :title="'支付'" :mrb40="true" :url="'home'"></dom-header>
    <div class="con">
      <div class="weui-cells__title">支付方式</div>
      <div class="weui-cells weui-cells_radio">
        <label class="weui-cell weui-check__label" for="x11">
          <div class="weui-cell__bd">
            <p class="fts28"><img :src="imgSrc.wx" alt="" class="logo">微信支付</p>
          </div>
          <div class="weui-cell__ft">
            <input type="radio" class="weui-check" name="pay" checked="checked">
            <span class="weui-icon-checked"></span>
          </div>
        </label>
        <label class="weui-cell weui-check__label" for="x12">
          <div class="weui-cell__bd">
            <p class="fts28"><img :src="imgSrc.zfb" alt="" class="logo">支付宝支付(即将开通)</p>
          </div>
          <div class="weui-cell__ft">
            <input type="radio" name="pay" class="weui-check" disabled="">
            <span class="weui-icon-checked"></span>
          </div>
        </label>
      </div>
    </div>
    <a class="btn-submit" @click="handelPay">支付 (金额:{{orderInfo.price}}元)</a>
  </div>
</template>
<script>
/*jshint esversion: 6 */
// import aa from "@/components/widget/videoboxrank";
import domHeader from "@/components/widget/header-back";
import wxSrc from "@/assets/wechat.png";
import zfbSrc from "@/assets/zhifubao.png";


var obj = {
  props: [],
  data() {
    var orderInfo = this.$route.params['orderInfo'] || {};
    return {
      imgSrc: {
        zfb: zfbSrc,
        wx: wxSrc,
      },
      orderInfo: orderInfo
    };
  },
  computed: {
    info() {
      return this.$store.state.payInfo;
    }
  },
  methods: {
    handelPay() {
      var opt = this.info;
      var str = window.JSON.stringify(opt);
      window.login.wxPay(str);
    },
    // funname(){
    //     var that=this;
    //     var params={};
    //     var sucf=function(d){

    //     };
    //     var errf=function(d){

    //     };
    //     this.$store.commit('funname',{})
    // }
    handelPayResult(s) {
      if (s == '0') {
        //成功
        this.$router.push({ path: 'payment' });
      } else {
        //失败
      }
    }
  },
  watch: {

  },
  components: {
    domHeader,

  },
  created() {

  },
  mounted() {

  }

};



export default obj;

</script>
<style scoped>
.logo {
  height: 44px;
  float: left;
  margin-right: 28px;
}

.btn-submit {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background: #e4413c;
  color: #fff;
  font-size: 34px;
}

.fts28 {
  font-size: 28px;
}

</style>
