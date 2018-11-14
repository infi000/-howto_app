<template>
  <div class="weui-flex con">
    <div class="con-l">
      <img v-lazy="videoInfo.thumbinal" alt="" width="100%" height="100%" @click="goplay">
    </div>
    <div class="weui-flex__item con-r text-left">
      <dl>
        <dt class="f1 text-hide-1" @click="goplay">{{videoInfo.title}}</dt>
        <dd class="f2 text-hide-1">{{videoInfo.describe}}</dd>
        <dd class="f3">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <span class="tag-con" v-show="filterTag(videoInfo.keys)">{{filterTag(videoInfo.keys)}}</span>
            </div>
 <!--            <div class="weui-flex__item">
            </div> -->
            <div class="">
              <div class="icon-con">
                <img :src="imgSrc.play" alt="" height="100%">
              </div>
              <span>{{videoInfo.playcount}}</span>
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
  props: ['info', 'sid'],
  data() {
    var videoInfo = this.info || {};
    return {
      imgSrc: {
        play: playmini,
      },
      videoInfo: videoInfo
    }
  },
  computed: {

  },
  methods: {
    goplay() {
      var sid = this.sid || this.videoInfo.sid;
      this.$router.push({ path: '/play', query: { sid: sid } })
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
    filterTag(keys) {
      var res = ''
      if (keys) {
        var arr = keys.split(",");
        res = arr[0];
      }

      return res;
    }
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
