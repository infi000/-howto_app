<template>
  <div class="page">
    <dom-header :title="'关于'" :mrb40="true"></dom-header>
    <dl>
      <dd><img :src="imgSrc.logo" alt="" class="logo"></dd>
      <dd><span class="fs20">For Android V1.0.0.1</span></dd>
      <dd><img :src="'./static/img/qr.png'" class="qr"></dd>
      <dd><span class="fs20">扫描二维码，你的朋友也可以下载好途客户端！</span></dd>
    </dl>
    <div class="weui-media-box weui-media-box_small-appmsg">
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd weui-cell_primary">
            <p class="ft32 text-left">特别说明</p>
          </div>
          <span class="weui-cell__ft"></span>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd weui-cell_primary">
            <p class="ft32 text-left">使用帮助</p>
          </div>
          <span class="weui-cell__ft"></span>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd weui-cell_primary">
            <p class="ft32 text-left">给我评分</p>
          </div>
          <span class="weui-cell__ft"></span>
        </a>
        <a class="weui-cell weui-cell_access"  @click="goto('about_yszc')">
          <div class="weui-cell__bd weui-cell_primary">
            <p class="ft32 text-left">隐私政策</p>
          </div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domHeader from "@/components/widget/header-back";
import logoSrc from "@/assets/logo.png";

export default {
  props: [],
  data() {
    return {
      imgSrc: {
        logo: logoSrc
      }
    }
  },
  computed: {

  },
  methods: {    goto(url) {
      this.$router.push({ path: url, query: {} });
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

</script>
<style scoped>
.logo {
  width: 84px;
  height: 84px;
}

.qr {
  width: 233px;
  height: 233px;
}

dd {
  margin-bottom: 22px;
}

.fs20 {
  font-size: 20px;
}

.ft32 {
  font-size: 32px;
}

</style>
