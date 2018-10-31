<template>
  <div class="page-home">
    <!-- 轮播图 -->
    <dom-banner></dom-banner>
    <!-- 内容 -->
    <div class="con-home">
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">推荐专栏</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span>
          </div>
        </div>
      </div>
      <dom-groupboxmini v-for="item in 2" class="dom-groupboxmini"></dom-groupboxmini>
      <!-- 推荐视频 -->
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">推荐视频</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span>
          </div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item"  v-for="item in 3">
          <dom-videobox class="dom-videobox"></dom-videobox>
        </div>
      </div>
        <!-- 精彩视频 -->
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">精彩视频</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import domBanner from "@/components/common/banner";
import domGroupboxmini from "@/components/widget/groupboxmini";
import domVideobox from "@/components/widget/videobox";
import right from "@/assets/right.png";
export default {
  props: [],
  data() {
    return {
      imgSrc: {
        right: right
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
    domBanner,
    domGroupboxmini,
    domVideobox
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.page-home {
  padding-top: 156px;
}


.con-home {
  width: 687px;
  margin: 0 auto;
}

.tag-title-home {
  height: 94px;
  line-height: 94px;
  width: 100%;
  border-top: 0.5px solid #E4E7ED;
  background-color: #fff;
  margin-top: 44px;
  box-sizing: border-box;
  padding: 0 4px;
}

.tag-title-home .icon-right {
  /*width: 24px;*/
  height: 24px;
}

.tag-title-home-l {
  font-size: 36px;
  color: #000;
}

.tag-title-home-r {
  font-size: 26px;
  color: #666;
}

.dom-groupboxmini {
  margin-bottom: 70px;
}

</style>
