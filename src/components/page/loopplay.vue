<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in videoList.rs" :key="index">
          <video :src="item.source" controls=false x5-playsinline="" playsinline="" webkit-playsinline="" style="background: #000"></video>
          <p>asdfasdfasdfasdfasdfasf</p>
        </div>
      </div>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import Swiper from "swiper";
import domNodata from "@/components/widget/nodata";
import loadingPage from "@/components/widget/loading";

export default {
  props: [],
  data() {
    return {
      videoList: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      loading: false,
      noData: true
    };
  },
  computed: {

  },
  methods: {
    getVideo() {
      this.loading = true;
      this.noData = false;
      var that = this;
      var params = {
        // title: title,
        page: that.videoList.page,
        pagecount: that.videoList.pagecount,
      };
      var sucf = function(d) {


        var rs = that.videoList.rs;
        var drs = d.rs;
        rs.push.apply(rs, drs);
        var page = d.page;
        if (drs.length == 0) {
          //没有返回数据
          that.noData = true;
        }
        that.videoList.page = d.page;
        that.videoList.rs = rs;
        that.videoList.total = d.total;
        that.loading = false;


      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };
      this.$store.commit('getVideo', { params: params, sucf: sucf, errf: errf })
    }
  },
  watch: {

  },
  components: {
    loadingPage,
    domNodata
  },
  created() {

  },
  mounted() {
    this.getVideo();

          var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            observer:true
          });
  }

};

</script>
<style scoped>
p {
  position: absolute;
  bottom: 100px;
  z-index: 1
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {

  background: #ccc;
}
video{
width: 750px;
height: 562px;
}
</style>
