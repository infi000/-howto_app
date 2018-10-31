<template>
  <div class="groupbox">
    <img :src="'./static/img/test.jpg'" alt="">
    <span>除了主色外的场景色，需</span>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {}
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

</style>
