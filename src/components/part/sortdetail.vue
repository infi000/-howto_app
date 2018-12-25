<template>
  <div class="page">
    <!-- header -->
    <dom-header :title="category.cname" :mrb40="false"></dom-header>
    <!-- <dom-search class="sortdetail-search" ></dom-search> -->
    <div class="swiper-container" v-show="category.child">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in category.child" :key="index">
          <a class="sortchild-btn" @click="goto(item.id)"> {{item.cname}}</a>
        </div>
      </div>
    </div>
    <div class="sortdetail-con" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
      <dom-videoboxw v-for="(item,index) in videoList.rs" class="dom-videoboxw" :key="index" :info="item" :sid="item.id"></dom-videoboxw>
      <dom-nodata v-show="noData"></dom-nodata>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import loadingPage from "@/components/widget/loading";
import domVideoboxw from "@/components/widget/videoboxw";
import domSearch from "@/components/widget/search";
import domHeader from "@/components/widget/header-back";
import domNodata from "@/components/widget/nodata";
// import Swiper from "swiper";
import { Toast } from 'mint-ui';

export default {
  props: [],
  data() {
    var id = this.$route.query.id;
    var level = this.$route.query.level;
    return {
      id: id, //分类ID
      level: level, //分类级别
      videoList: {
        page: 1,
        pagecount: 20,
        rs: [],
        total: 0
      },
      category: {}, //分类的信息
      loading: false,
      noData: true,
    };
  },
  computed: {

  },
  methods: {
    loadMore() {
      if (this.loading || this.noData) {
        return;
      }
      this.videoList.page++;
      this.getVideo();
      // setTimeout(() => {
      //   this.loading = false;
      // }, 2500);
    },
    goto(id) {
      this.$router.push({ path: 'sortdetail', query: { id: id, level: 'column' } });
    },
    getCategoryById() {
      //获取分类数据
      var that = this;
      var id = this.id;
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
      this.loading = true;
      this.noData = false;
      var that = this;
      var level = this.level;
      var id = this.id;
      var params = {
        page: that.videoList.page,
        pagecount: that.videoList.pagecount,
        status: 1,
        sort: 'weight:desc,ctime:desc' //desc小写，asc大写
      };
      params[level] = id;
      var sucf = function(d) {
        var rs = that.videoList.rs;
        var drs = d.rs;
        rs.push.apply(rs, drs);
        var page = d.page;
        if (drs.length == 0) {
          //没有返回数据
          that.noData = true;
        }
        that.videoList.page = d.page;
        that.videoList.rs = rs;
        that.videoList.total = d.total;
        that.loading = false;
      };
      var errf = function(d) {
        Toast({
          message: '获取信息失败',
          position: 'top',
          duration: 3000
        });
        that.loading = false;
      };

      this.$store.commit("getVideo", { params: params, sucf: sucf, errf: errf });
    },
    init() {
      this.videoList = {
        page: 1,
        pagecount: 20,
        rs: [],
        total: 0
      };
      this.getCategoryById();
      this.getVideo();
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // centeredSlides: true,
        observer: true,
        initialSlide: 0
      });
    }
  },
  watch: {

  },
  components: {
    loadingPage,
    domVideoboxw,
    domSearch,
    domHeader,
    domNodata
  },
  created() {

  },
  mounted() {
    this.init();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    var id = to.query.id;
    var level = to.query.level;
    this.id = id;
    this.level = level;
    this.init();
    next();
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
