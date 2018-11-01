<template>
  <div>
    <div class="groupbox">
      <img :src="'./static/img/test.jpg'" alt="">
      <span>除了主色外的场景色，需</span>
    </div>
    <div v-if="desc" class="text-left descbox">
      <div class="descbox-l">孩子自己就能做的科学小实验</div>
      <div class="descbox-r weui-flex">
        <div class="weui-flex__item">每天10分钟，开启孩子的科学思维</div>
        <div> <img :src="imgSrc.play" alt="" class="icon-con">
          <span>2345</span></div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import playmini from "@/assets/playmini.png"

export default {
  props: ['desc'], //是否有描述信息
  data() {
    return {
      imgSrc: {
        play: playmini
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
 border: 0.5px solid #efefef;
}
.descbox-l{
  font-size: 32px;
  color: #000;
}
.descbox-r{
  font-size: 28px;
}
</style>
