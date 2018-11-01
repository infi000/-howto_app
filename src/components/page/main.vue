<template>
  <div class="page">
    <router-view></router-view>
    <div class="weui-tabbar tabber">
      <a @click="goto('find')" class="weui-tabbar__item">
        <template v-if="choose!='find'">
          <img :src="imgSrc.faxian" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">发现</p>
        </template>
        <img :src="imgSrc.faxian2" alt="" class="weui-tabbar__icon weui-tabbar__icon2" v-else>
      </a>
      <a @click="goto('sort')" class="weui-tabbar__item">
        <template v-if="choose!='sort'">
          <img :src="imgSrc.fenlei" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">分类</p>
        </template>
        <img :src="imgSrc.fenlei2" alt="" class="weui-tabbar__icon weui-tabbar__icon2" v-else>
      </a>
      <a @click="goto('home')" class="weui-tabbar__item">
        <template v-if="choose!='home'">
          <img :src="imgSrc.shouye" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">首页</p>
        </template>
        <img :src="imgSrc.shouye2" alt="" class="weui-tabbar__icon weui-tabbar__icon2" v-else>
      </a>
      <a @click="goto('rank')" class="weui-tabbar__item">
        <template v-if="choose!='rank'">
          <img :src="imgSrc.paihangbang" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">排行榜</p>
        </template>
        <img :src="imgSrc.paihangbang2" alt="" class="weui-tabbar__icon weui-tabbar__icon2" v-else>
      </a>
      <a @click="goto('me')" class="weui-tabbar__item">
        <template v-if="choose!='me'">
          <img :src="imgSrc.wode" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">我的</p>
        </template>
        <img :src="imgSrc.wode2" alt="" class="weui-tabbar__icon weui-tabbar__icon2" v-else>
      </a>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import shouye from "@/assets/shouye.png";
import shouye2 from "@/assets/shouye2.png";
import faxian from "@/assets/faxian.png";
import faxian2 from "@/assets/faxian2.jpg";
import fenlei from "@/assets/fenlei.png";
import fenlei2 from "@/assets/fenlei2.jpg";
import paihangbang from "@/assets/paihangbang.png";
import paihangbang2 from "@/assets/paihangbang2.jpg";
import wode from "@/assets/wode.png";
import wode2 from "@/assets/wode2.png";

export default {
  props: [],
  data() {

    var choose=this.$route.name||'';
    return {
      choose: choose,
      imgSrc: {
        shouye: shouye,
        shouye2: shouye2,
        faxian: faxian,
        faxian2: faxian2,
        fenlei: fenlei,
        fenlei2: fenlei2,
        paihangbang: paihangbang,
        paihangbang2: paihangbang2,
        wode: wode,
        wode2: wode2,
      }
    };
  },
  computed: {

  },
  methods: {
    goto(url) {
      var url = url || '/';
      this.choose=url;
      this.$router.push({ path: url });
    }
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
.page {
  padding-bottom: 160px;
}

.tabber {
  height: 120px;
  box-sizing: border-box;
  position: fixed;
}


.weui-tabbar__icon {
  width: 44px;
  height: 44px;
  margin-top: 20px;
  margin-bottom: 2px;
}

.weui-tabbar__icon2 {
  width: 75px;
  height: 75px;
}

.weui-tabbar__label {
  font-size: 21px;
  color: #303133;
}

</style>
