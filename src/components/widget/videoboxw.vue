<template>
  <div class="weui-flex con">
    <div class="con-l">
      <img :src="'./static/img/test.jpg'" alt="" width="100%" height="100%">
    </div>
    <div class="weui-flex__item con-r text-left">
      <dl>
        <!-- <dt class="f1">{{videoInfo.title}}</dt> -->
        <!-- <dd class="f2">{{videoInfo.describe}}</dd> -->
        <dd class="f3">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <span class="tag-con">儿童</span>
            </div>
            <div class="weui-flex__item">
            </div>
            <div class="weui-flex__item">
              <img :src="imgSrc.play" alt="" class="icon-con">
              <span>2345</span>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import playmini from "@/assets/playmini.png"
export default {
  props: ['info'],
  data() {
    var videoInfo = this.info || {};
    return {
      imgSrc: {
        play: playmini,
        videoInfo: videoInfo
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

  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
/*210 160*/

.con {
  height: 160px;
  background: #fff;
}

.con-l {
  width: 210px;
  height: 160px;
}

.con-r {
  padding-left: 20px;
}

.f1 {
  font-size: 28px;
  color: #000;
}

.f2 {
  font-size: 22px;
  color: #666;
}

.f3 {
  margin-top: 28px;
  color: #666;
}

.f3 span {
  font-size: 18px;
  color: #666;
}

.f3 .icon-con {
  margin-top: 10px;
}

</style>
