<template>
  <div class="weui-flex con">
    <div class="con-l">
      <img v-lazy="groupInfo.thumbinal" alt="" @click="gogroup(groupInfo)">
    </div>
    <div class="weui-flex__item con-r text-left">
      <dl>
        <dt class="f1 text-hide-1" @click="gogroup(groupInfo)">{{groupInfo.title}}</dt>
        <dd class="f2 text-hide-1">{{groupInfo.describe}}</dd>
        <!-- <dd class="f3 text-hide-1">{{groupInfo.describe}}</dd> -->
      </dl>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: ['info'],
  data() {
    var groupInfo = this.info || {};
    return {
      groupInfo: groupInfo
    }
  },
  computed: {

  },
  methods: {
    gogroup(opt) {
      var gid = opt.id;
      this.$router.push({ path: 'list', query: { type: 'group', gid: gid } });
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

.con-l img {
  width: 100%;
  height: 100%;
}

.con-r {
  padding-left: 20px;
}

.f1 {
  font-size: 34px;
  color: #000;
}

.f2 {
  font-size: 28px;
  color: #666;
}

.f3 {
  font-size: 30px;
  margin-top: 20px;
  color: #000;
}

</style>
