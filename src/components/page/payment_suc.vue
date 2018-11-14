<template>
  <div class="page msg_success js_show">
    <div class="weui-msg">
      <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title">支付成功</h2>
        <p class="weui-msg__desc">{{time}}s后自动跳转</a>
        </p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <a @click="handelPayOver" class="weui-btn weui-btn_primary">查看已购买的视频</a>
        </p>
      </div>
      <div class="weui-msg__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__text">Copyright © 2018 好途howdu.cn版权所有</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";

export default {
  props: [],
  data() {
    return {
      time: 3
    };
  },
  computed: {

  },
  methods: {
    handelPayOver() {
      this.$router.push({ path: 'bought' });
    },
    autoPayOver() {
      var that = this;
      setTimeout(function() {
        that.time--;
        if (that.time == 0) {
          that.handelPayOver();
          return
        } else {
          that.autoPayOver()
        }
      }, 1000)
    }
    // funname(){
    //     var that=this;
    //     var params={};
    //     var sucf=function(d){

    //     };
    //     var errf=function(d){

    //     };
    //     this.$store.commit('funname',{})
    // }


  },
  watch: {

  },
  components: {

  },
  created() {

  },
  mounted() {
    this.autoPayOver();

  }

};

</script>
<style scoped>


</style>
