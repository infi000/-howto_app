<template>
  <div>
    <!-- <template v-if="banner.rs.length"> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner.rs">
          <dom-groupbox :info="item"  ></dom-groupbox>
        </div>
      </div>
    </div>
    <!-- </template> -->
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
          autoplay: true, //等同于以下设置
          slidesPerView: 'auto',
          spaceBetween: 10,
          observer: true,
          centeredSlides: true,
          // initialSlide: 3,
          loop: true,
          on: {
            init: function() {
              //Swiper初始化了
              // console.log('当前的slide序号是', this);
              this.slideToLoop(1, 1000, false);//切换到第一个slide，速度为1秒
            },
          },
        });
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf })
    }
  },
  watch: {
    // 'banner.rs' () {
    //   if (this.banner.rs.length) {

    //     var swiper = new Swiper('.swiper-container', {
    //       auto: true,
    //       slidesPerView: 'auto',
    //       spaceBetween: 10,
    //       observer: true,
    //       centeredSlides: true,
    //       // initialSlide: 3,
    //       loop: true
    //     });
    //   }
    // }
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
