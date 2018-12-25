<template>
  <div class="page">
    <dom-header :title="'播放'" :mrb40="true"></dom-header>
    <template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in videoList.rs" :key="index" :ref="'video'+index">
            <template v-if="index==choose">
              <video :src="item.source" controls=false x5-playsinline="" playsinline="" webkit-playsinline="" style="background: #000" :id="'video'+index"></video>
            </template>
            <template v-else>
              <div class="preImg" :style="{backgroundImage:'url('+item.thumbinal+')'}">
              </div>
            </template>
            <div class="con text-left">
              <div class="weui-flex">
                <div class="weui-flex__item">
                  <div class="placeholder"><span class="h3">上传时间：</span><span class="h5">{{dateFormat(item.createtime)}}</span></div>
                </div>
                <div class="">
                  <div class="placeholder"><span class="h3">价格：</span><span class="h5">{{item.price||""}}</span></div>
                </div>
              </div>
              <div class="weui-flex">
                <div class="weui-flex__item">
                  <div class="placeholder"><span class="h3">分类：</span><span class="h5">{{item.categoryname||""}}</span><span class="h5">/{{item.channelname||""}}</span><span class="h5">/{{item.columnname||""}}</span></div>
                </div>
                <div class="">
                  <div class="placeholder"><span class="h3">播放量：</span><span class="h5">{{item.playcount||""}}</span></div>
                </div>
              </div>
              <p>
                <span class="h3">描述：</span>
                <span class="h5 text-hide-1">{{item.describe||""}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domHeader from "@/components/widget/header-back";

// import Swiper from "swiper";
import domNodata from "@/components/widget/nodata";
import loadingPage from "@/components/widget/loading";

export default {
  props: [],
  data() {
    return {
      videoList: {
        page: 1,
        pagecount: 20,
        rs: [],
        total: "10",
      },
      loading: false,
      noData: true,
      choose: 0
    };
  },
  computed: {

  },
  methods: {
    dateFormat(date) {
      if (!date) {
        return '';
      }
      var d = date * 1000;
      var t = new Date(d);
      t = t.format('yyyy-MM-dd  hh:mm:ss');
      return t;
    },
    getVideo() {
      this.loading = true;
      this.noData = false;
      var that = this;
      var params = {
        // title: title,
        status: 1,
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
    domNodata,
    domHeader
  },
  created() {

  },
  mounted() {
    this.getVideo();
    var that = this;
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: true,
      observer: true,
      passiveListeners: false,
      speed: 300,
      on: {
        init: function() {
               that.choose = this.activeIndex;
          setTimeout(function() {
            var videoCon = that.$refs['video' + that.choose][0];
            var video = videoCon.querySelector('video');
            console.log(video)
            video.play();
          }, 500);
        },
        slideChangeTransitionEnd: function() {
          that.choose = this.activeIndex;
          setTimeout(function() {
            var videoCon = that.$refs['video' + that.choose][0];
            var video = videoCon.querySelector('video');
            console.log(video)
            video.play();
          }, 500);

          // alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
        },
        reachBeginning: function() {
          console.log("最开始")
        },
        reachEnd: function() {
          console.log("最后一个")
        },
      },
    });
  }

};

</script>
<style scoped>
.page {
  background: #000;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {

  background: #000;
  color: #ddd
}

video {
  width: 750px;
  /*height: 562px; 4:3的比例*/
  height: 762px;
}

.con {
  padding: 10px 20px
}

.weui-flex {
  margin-bottom: 20px;
}

.preImg {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  /*background-position: center;*/
}

</style>
