<template>
  <mt-header :title="title" :class="{'mrb-40':mrb40}">
    <div slot="left" class="header-back" @click="goback" v-show="!noback"> <img :src="imgSrc.left" alt="" width="100%"></div>
  </mt-header>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import imgLeft from "@/assets/left.png";

export default {
  props: ['title', 'mrb40', 'url'], //1title名称2mrtb40margin-bottom:40px;3url返回的路由
  data() {
    var noback = this.noback || false;
    return {
      imgSrc: {
        left: imgLeft
      },
      noback: noback
    };
  },
  computed: {

  },
  methods: {
    goback() {
      //有URL跳转 没URL后退
      if (this.url) {
        var url=this.url;
        this.$router.push({path:url});
      } else {
        this.$router.go(-1);

      }
    },
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
.mint-header {
  background-color: #e4413c;
  height: 100px;
  font-size: 34px;
}

</style>
