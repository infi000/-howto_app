<template>
  <div class="con">
    <dl>
      <dt>
        <div class="imgbox"><img v-lazy="videoInfo.thumbinal" alt="" @click="goplay" width="100%" height="100%"></div>
      </dt>
      <dd class="text-hide-1" @click="goplay">{{videoInfo.title}}</dd>
    </dl>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: ['info'],
  data() {
    var videoInfo = this.info || {};
    return {

      videoInfo: videoInfo
    }
  },
  computed: {

  },
  methods: {
    goplay() {
      var sid = this.info.sid||this.info.id;
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
/*160 216*/

.con {
  width: 216px;
}

.imgbox {
  width: 100%;
  height: 160px;
}

.con dd {
  font-size: 26px;
}

</style>
