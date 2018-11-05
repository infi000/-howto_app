<template>
  <div class="loading-page">
    <div class="circle-box">
    <mt-spinner type="fading-circle" color="#09BB07" :size="60"></mt-spinner>

    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {};
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
.loading-page {
  background-color: rgba(0, 0, 0, .5);
  z-index: 600;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.circle-box{
  position: absolute;
  width: 62px;
  left: 50%;
  margin-left: -31px;
  top: 40%;
}

</style>
