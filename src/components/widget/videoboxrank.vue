<template>
  <div class="weui-flex con">
    <div class="con-l" @click="goplay">
      <img v-lazy="videoInfo.thumbinal" alt="" width="100%" height="100%">
    </div>
    <div class="weui-flex__item con-r text-left">
      <dl>
        <dt class="f1 text-hide-1" @click="goplay">{{videoInfo.title}}</dt>
        <dd class="f2">
          <div class="weui-flex">
            <div class="weui-flex__item"><span class="rank-money">{{videoInfo.price}}RMB</span>
            </div>
            <div class="weui-flex__item">
              <div class="icon-con">
                <img :src="imgSrc.play" alt="" height="100%">
              </div>
              <span>{{videoInfo.playcount}}</span>
            </div>
          </div>
        </dd>
        <dd class="f3 text-hide-1">
          {{videoInfo.describe}}
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import playmini from "@/assets/playmini.png"
export default {
  props: ["info"],
  data() {
    var videoInfo = this.info || {};
    return {
      imgSrc: {
        play: playmini
      },
      videoInfo: videoInfo
    }
  },
  computed: {

  },
  methods: {

    goplay() {
      var sid = this.info.sid;
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
  margin-top: 10px;
  font-size: 22px;
  color: #666;
}

.f3 {
  margin-top: 28px;
  font-size: 22px;
  color: #666;
}

.rank-money {
  font-size: 25px;
  font-weight: bold;
  color: red;
}

</style>
