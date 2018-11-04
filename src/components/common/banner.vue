<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner.rs">
          <dom-groupbox :info="item"></dom-groupbox>
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
    return {
      banner: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },

    }
  },
  computed: {

  },
  methods: {
    getSourceShow(sfid) {
      var that = this;
      var params = {
        sfid: sfid
      };
      var sucf = function(d) {
        // sfid 1banner 2zl 3sp 6jc
        if (sfid == 1) {
          that.banner = d;
        };

        var swiper = new Swiper('.swiper-container', {
          auto:true,
          slidesPerView: 'auto',
          spaceBetween: 10,
          observer: true,
          centeredSlides: true,
          initialSlide: 0,
          loop: true
        });
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf })
    }
  },
  watch: {

  },
  components: {
    domGroupbox
  },
  created() {

  },
  mounted() {
    this.getSourceShow(1)


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
