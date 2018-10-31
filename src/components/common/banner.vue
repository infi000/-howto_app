<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 4">
          <dom-groupbox></dom-groupbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import Swiper from "swiper";
import domGroupbox from "@/components/widget/groupbox";
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
    domGroupbox
  },
  created() {

  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      centeredSlides: true,
      initialSlide: 0,
      loop: true
    });
  }

};

</script>
<style scoped>
.swiper-slide {
  width: 675px;
  height: 446px;
  position: relative;
}

</style>
