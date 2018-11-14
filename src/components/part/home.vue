<template>
  <div class="page-home">
    <div class="header">
      <dom-search class="dom-search"></dom-search>
    </div>
    <!-- 轮播图 -->
    <dom-banner class="banner"></dom-banner>
    <!-- 内容 -->
    <div class="con-home">
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">推荐专栏</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <!-- <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span> -->
          </div>
        </div>
      </div>
      <dom-groupboxmini class="dom-groupboxmini" v-for="(item,index) in p1.rs" :key="index" v-if="index<3" :info="item" :sid="item.sid"></dom-groupboxmini>
      <!-- 推荐视频 -->
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">推荐视频</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <!-- <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span> -->
          </div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item" v-for="(item,index) in p2.rs" :key="index" v-if="index<3">
          <dom-videoboxh :info="item"></dom-videoboxh>
        </div>
      </div>
      <!-- 精彩视频 -->
      <div class="tag-title-home">
        <div class="weui-flex">
          <div>
            <span class="tag-title-home-l">热门视频</span>
          </div>
          <div class="weui-flex__item">
          </div>
          <div>
            <!-- <span class="tag-title-home-r">更多 <img :src="imgSrc.right" alt="" class="icon-right"></span> -->
          </div>
        </div>
      </div>
      <dom-videoboxw v-for="(item,index) in p3.rs" :key="item.id" class="dom-videoboxw" :info="item"></dom-videoboxw>
    </div>
    <loading-page v-show="loading"></loading-page>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import domSearch from "@/components/widget/search";
import domBanner from "@/components/common/banner";
import domGroupboxmini from "@/components/widget/groupboxmini";
import domVideoboxh from "@/components/widget/videoboxh";
import domVideoboxw from "@/components/widget/videoboxw";
import loadingPage from "@/components/widget/loading";
import right from "@/assets/right.png";
export default {
  props: [],
  data() {
    return {
      imgSrc: {
        right: right
      },
      p1: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      p2: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      p3: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      loading: false
    }
  },
  computed: {

  },
  methods: {
    // loginstatus() {
    //   var that = this;

    //   var token = this.$route.query.accesstoken || "";
    //   var openid = this.$route.query.openid || "";
    //   var loginstatus = this.$store.state.loginstatus;
    //   if (!loginstatus) {
    //     if (!token && !openid) {
    //     // if (token && openid) {
    //       var params = {
    //         token:token,
    //         openid:openid,
    //       };

    //       var sucf = function(d) {
    //         //成功
    //       };
    //       var errf = function(d) {
    //         //失败
    //       };
    //       this.$store.commit('loginstatus', { sucf: sucf, errf: errf });
    //     }

    //   }

    // },
    getSourceShow(sfid) {
      var that = this;
      var params = {
        sfid: sfid
      };
      var sucf = function(d) {
        // sfid 1banner 2zl 3sp 6jc
        if (sfid == 1) {
          that.banner = d;
        } else if (sfid == 2) {
          that.p1 = d;
        } else if (sfid == 3) {
          that.p2 = d;
        } else if (sfid == 6) {
          that.p3 = d;
        };
        that.loading = false;
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf });
    }
  },
  watch: {

  },
  components: {
    loadingPage,
    domSearch,
    domBanner,
    domGroupboxmini,
    domVideoboxh,
    domVideoboxw,
  },
  created() {

  },
  mounted() {
    this.loading = true;
    this.getSourceShow(2);
    this.getSourceShow(3);
    this.getSourceShow(6);
    // this.loginstatus();
  }

};

</script>
<style scoped>
.page-home {
  padding-top: 156px;
}

.header {
  height: 156px;
}

.dom-search {
  margin-top: 46px;
}

.banner {
  margin-top: 40px;
}

.con-home {

  width: 687px;
  margin: 0 auto;
}

.tag-title-home {
  height: 94px;
  line-height: 94px;
  width: 100%;
  border-top: 0.5px solid #E4E7ED;
  background-color: #fff;
  margin-top: 44px;
  box-sizing: border-box;
  padding: 0 4px;
}

.tag-title-home .icon-right {
  /*width: 24px;*/
  height: 24px;
}

.tag-title-home-l {
  font-size: 36px;
  color: #000;
}

.tag-title-home-r {
  font-size: 26px;
  color: #666;
}

.dom-groupboxmini {
  margin-bottom: 70px;
}

.dom-videoboxw {
  margin-bottom: 36px;
}

</style>
