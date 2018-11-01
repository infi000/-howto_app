<template>
  <div class="page">
    <!-- header -->
    <mt-header title="健康生活">
      <router-link to="/sort" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-button>
    </mt-header>
    <!-- <dom-search class="sortdetail-search" ></dom-search> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in [1,2,3,4,56]" :key="index">
          {{item}}
        </div>
      </div>
    </div>
    <div class="sortdetail-con">
      <dom-videoboxw v-for="(item,index) in videoList.rs" class="dom-videoboxw" :key="index" :info="item"></dom-videoboxw>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domVideoboxw from "@/components/widget/videoboxw";
import domSearch from "@/components/widget/search";
import Swiper from "swiper";

export default {
  props: [],
  data() {
    var id = this.$route.query.id;
    return {
      id: id, //分类ID
      videoList: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: 0
      },
    }
  },
  computed: {

  },
  methods: {

    getCategoryById(id) {
      //获取分类数据
      var that = this;
      var params = {
        status: 1,
        id: id
      };
      var sucf = function(d) {
        // var opt = d[0];
        // that.getCategory(opt);
        // that.sortLevel = opt;
      };
      var errf = function(d) {

      };
      this.$store.commit('getCategory', { params: params, sucf: sucf });
    },
    getVideo() {

      var that = this;
      var params = {
        // page: that.videoList.page,
        // pagecount: that.videoList.pagecount,
        status: 1,
        sort: 'weight:desc,ctime:desc' //desc小写，asc大写
      };

      var sucf = function(d) {
          that.videoList=d;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });

      };

      this.$store.commit("getVideo", { params: params, sucf: sucf, errf: errf });
    },

  },
  watch: {

  },
  components: {
    domVideoboxw,
    domSearch
  },
  created() {

  },
  mounted() {
    var id = this.id;
    this.getCategoryById(id);
    this.getVideo();
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      observer: true,
      initialSlide: 0
    });
  }

};

</script>
<style scoped>
.sortdetail-search {
  background: #e4413c;
  padding: 40px;
}

.weui-loadmore {
  margin-top: 60px;
  margin-bottom: 60px;
}



.sortdetail-con {
  padding: 40px;
}

.dom-videoboxw {
  margin-bottom: 18px;
}

.swiper-container {
  width: 100%;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 14px;
}

.swiper-slide {
  text-align: center;
  display: inline;
  width: auto;
  /*background: red;*/
}

</style>
