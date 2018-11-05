<template>
  <div class="page">
    <!-- header -->
    <mt-header :title="category.cname">
      <div slot="left" class="header-back" @click="back"> <img :src="imgSrc.left" alt="" width="100%"> </div>
    </mt-header>
    <!-- <dom-search class="sortdetail-search" ></dom-search> -->
    <div class="swiper-container" v-show="category.child">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in category.child" :key="index">
          <a class="sortchild-btn" @click="goto(item.id)"> {{item.cname}}</a>
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
import { Toast } from 'mint-ui';
import imgLeft from "@/assets/left.png";

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
      imgSrc: {
        left: imgLeft
      },
      category: {} //分类的信息
    }
  },
  computed: {

  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goto(id) {
      this.$router.push({ path: 'sortdetail', query: { id: id } });
    },
    getCategoryById(id) {
      //获取分类数据
      var that = this;
      var params = {
        status: 1,
        id: id
      };
      var sucf = function(d) {
        that.category = d[0];

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
        that.videoList = d;
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
      spaceBetween: 30,
      // centeredSlides: true,
      observer: true,
      initialSlide: 0
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    var id = to.query.id;
    this.getCategoryById(id);
    this.getVideo();
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      observer: true,
      initialSlide: 0
    });
    next()
  },

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

.sortchild-btn {
  padding: 2px 12px;
  box-sizing: border;
  border: 0.5px solid #ddd;
  /*background: red;*/
  /*margin: 0 20px;*/
}

</style>
