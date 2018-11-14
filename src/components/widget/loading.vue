<template>
  <div class="loading-page">
    <div class="circle-box">
      <mt-spinner type="fading-circle" color="#e4413c" :size="60"></mt-spinner>
    </div>
    <p v-show="showback"><a class="btn-back" @click="goback">连接超时，点击返回</a></p>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {
      showback: false
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
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {

  },
  components: {

  },
  created() {

  },
  mounted() {
    // var that = this;
    // setTimeout(function() {
    //   that.showback = true;
    // }, 3000);
    // console.log('mounted')
  }

};

</script>
<style scoped>
.loading-page {
  background-color: rgba(0, 0, 0, .5);
  z-index: 600;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.circle-box {
  position: absolute;
  width: 62px;
  left: 50%;
  margin-left: -31px;
  top: 40%;
}

p {
  position: relative;
  top: 60%;
}

.btn-back {
  color: #fff;
  font-size: 40px;
}

</style>
