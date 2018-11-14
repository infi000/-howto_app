<template>
  <div class="page">
    <div class="pay_box">
      <div class="page-hd">
        <div class="weui-cells__title" style="font-size: 18px;">看此视频您需要支付金额</div>
      </div>
      <div class="weui-cells pay_input_box">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" v-model.number="info.price" min="0" max="10000" disabled />
            <b>￥</b>
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" @click="addOrder">支付</a>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_default" @click="goback">返回</a>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    var info = this.$route.params['info']||{};

    return {
      info: info
    };
  },
  components: {

  },
  computed: {

  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    addOrder() {

      var that = this;
      var cash = this.info.price;
      cash=0.01;
      var id = this.info.id;
      if (!this.check(cash)) {
        return;
      }


      var params = {
        type: '10000', //支付类型 (单个商品 10000 充值 20000)
        goods: id, //商品ID
        cash: cash, //支付金额
      };
      var sucf = function(d) {
        // Toast({
        //   message: '订单生成成功',
        //   position: 'top',
        //   duration: 2000
        // });
        that.$store.state.payInfo = d;
        that.$router.push({ name: 'payment', params: { orderInfo: that.info } });
      };

      var errf = function(d) {
        Toast({
          message: d,
          position: 'top',
          duration: 2000
        });
        that.goback();
        // that.$router.push({ name: 'payment', params:{orderInfo:that.info} });
      };
      this.$store.commit('addOrder', { params: params, sucf: sucf, errf: errf });
    },

    check(num) {
      //检查输入金额
      //1.保留两位小数
      //2.金额不能过万
      //3.不能为负数
      //4.不能为0
      //5.开头不能为0
      if (!num) {
        Toast({
          message: '请输入金额',
          position: 'top',
          duration: 1000
        });
        return false;
      }
      if (num <= 0) {
        Toast({
          message: '请输入正确金额',
          position: 'top',
          duration: 1000
        });
        return false;
      }


      // if (num > 10000) {
      //                  Toast({
      //     message: '请输入正确金额',
      //     position: 'top',
      //     duration: 1000
      //   });
      //   this.$store.commit('alert', { msg: "最大金额不得超过10", time: 1000 });
      //   return false;
      // }
      // var reg = new RegExp("^[0-9]+(.[0-9]{0})?$");
      // if (!reg.test(num)) {
      //   this.$store.commit('alert', { msg: "请输入整数金额", time: 1000 });
      //   return false;
      // }
      return true;
    }
  },

  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.page {
  background-color: #ddd;
}

.pay_box {
  width: 90%;
  margin: 20px auto;
  padding: 10px 10px 30px;
  background-color: #f8f8f8;
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
