<template>
  <div class="weui-flex con">
    <div class="con-l">
      <img :src="'./static/img/test.jpg'" alt="" width="100%" height="100%">
    </div>
    <div class="weui-flex__item con-r text-left">
      <dl>
        <dt class="f1">孩子自己就能做的科学小实验</dt>
        <dd class="f2">
          <div class="weui-flex">
            <div class="weui-flex__item"><span class="rank-money">10元</span>
            </div>
            <div class="weui-flex__item">
              <img :src="imgSrc.play" alt="" class="icon-con">
              <span>2345</span>
            </div>
          </div>
        </dd>
        <dd class="f3">
          每天10分钟，开启孩子的科学思维
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import playmini from "@/assets/playmini.png"
export default {
  props: [],
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
.rank-money{
  font-size: 25px;
  font-weight: bold;
  color: red;
}
</style>
