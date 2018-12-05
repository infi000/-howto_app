<template>
  <div>
    <div class="groupbox" @click="gogroup(groupInfo)">
      <img v-lazy='groupInfo.thumbinal' alt="">
      <span class="text-hide-1">{{groupInfo.title}}</span>
    </div>
    <div v-if="desc" class="text-left descbox">
      <div class="descbox-l  text-hide-1">{{groupInfo.title}}</div>
      <div class="descbox-r weui-flex">
        <div class="weui-flex__item  text-hide-1">{{groupInfo.describe}}</div>
        <div class="iconhot">
          <i class="iconfont icon-hot"></i>
          <span>{{groupInfo.clickcount}}</span>
        </div>
        <div @click="handleLike(groupInfo)">
          <i class="iconfont icon-like"></i>
          <span>{{groupInfo.likecount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import playmini from "@/assets/like.png";
import { Toast } from 'mint-ui';
export default {
  props: ['info', 'desc', 'sid'], //1info:主要信息,2desc:是否有描述信息
  data() {
    var groupInfo = this.info || {};
    return {
      imgSrc: {
        play: playmini,

      },
      groupInfo: groupInfo
    };
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
    handleLike(opt) {
      var gid = this.sid || opt.sid;
      this.addGroupLike(gid);
    },
    gogroup(opt) {
      var gid = this.sid || opt.sid;
      this.$router.push({ path: 'list', query: { type: 'group', gid: gid } });
    },
    addGroupLike(gid) {
      //点赞
      var that = this;
      var params = { gid: gid };
      var sucf = function(d) {
        that.groupInfo.likecount++;
        Toast({
          message: "点赞成功",
          position: 'top',
          duration: 1500
        });
      };
      var errf = function(d) {
        Toast({
          message: "点赞失败",
          position: 'top',
          duration: 1500
        });
      };
      this.$store.commit('addGroupLike', { params: params, sucf: sucf });
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
.groupbox {
  width: 675px;
  height: 446px;
  position: relative;
  border-radius: 22px;
  overflow: hidden;
}

.groupbox img {
  height: 100%;
  width: 100%;
}

.groupbox span {
  font-size: 32.73px;
}

.groupbox span {
  position: absolute;
  left: 30px;
  bottom: 30px;
  color: #fff;
}

.descbox {
  width: 675px;
  padding: 28px 0;
  border-bottom: 0.5px solid #efefef;
}

.descbox-l {
  font-size: 32px;
  color: #000;
}

.descbox-r {
  font-size: 28px;
}

.iconhot {
  margin-right: 20px;
}

</style>
