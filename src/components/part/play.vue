<template>
  <div class="page">
    <!-- header -->
    <mt-header title="视频展示">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-button>
    </mt-header>
    <div class="play-box">
      <div class="preview-box">
        <img :src="'./static/img/test.jpg'" alt="" class="preview-img">
        <div class="preview-mask">
          <a class="play-btn">
             <img :src="imgSrc.play" alt="" width="100%" height="100%">
          </a>
        </div>
      </div>
      <dl class="text-left">
        <dt class="f1">孩子自己就能做的科学小实验</dt>
        <dd class="f2">
          每天10分钟，开启孩子的科学思维
        </dd>
        <dd class="f3">
          <div class="weui-flex">
            <div class="weui-flex__item"><span class="rank-money">10元</span>
            </div>
            <div class="weui-flex__item">
              <img :src="imgSrc.play" alt="" class="icon-con">
              <span>2345</span>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <div class="play-tag-title">
      王牌栏目
    </div>
    <div class="swiper-container ">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 4">
          <dom-videoboxh></dom-videoboxh>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import Swiper from "swiper";
import playbtn from "@/assets/play_btn.png";
import domVideoboxh from "@/components/widget/videoboxh";
export default {
  props: [],
  data() {
    return {
      imgSrc: {
        play: playbtn
      }

    }
  },
  computed: {

  },
  methods: {
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
    domVideoboxh
  },
  created() {

  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      centeredSlides: true,
      initialSlide: 0,
      loop: true
    });
  }

};

</script>
<style scoped>
.play-box {
  width: 677px;
  padding: 39px;
  box-sizing: border-box;
  box-shadow: 0px 6px 20.79px 0.21px rgba(174, 174, 174, 0.75);
  margin: 30px auto 0;
  position: relative;
}

.play-box .preview-box {
  height: 436px;
  width: 100%;
  position: relative;
}

.play-box .preview-box .preview-img {
  width: 100%;
  height: 100%;
}

.preview-mask {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.33);
}

.play-btn {
  width: 181px;
  height: 124px;
  position: absolute;
  top: 162px;
  left: 50%;
  margin-left: -90px;
}


.f1 {
  font-size: 34px;
  color: #333;
  margin-top: 18px;
  margin-bottom: 18px;
}

.f2 {
  font-size: 28px;
  color: #a7a7a7;
  margin-bottom: 18px;
}

.f3 {
  font-size: 29px;
}

.play-tag-title {
  /*padding-left: 37px;*/
  padding: 40px 0 40px 37px;
  font-size: 36px;
  text-align: left;
}
.swiper-wrapper{

}
.swiper-slide{
 width: 210px;
}
</style>
