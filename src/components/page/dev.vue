<template>
  <div class="page">
    <dom-header :title="'查看信息'" :mrb40="true"></dom-header>
    <h1>access_token：</h1>
    <p>{{token||'空'}}</p>
    <br>
    <br>
    <h1>openid</h1>
    <p>{{openid||'空'}}</p>
    <br>
    <br>
    <h1>userinfo</h1>
    <p v-for="(item,index) in userinfo" :key="index">{{item}}</p>
    <br>
    <br>
    <h1>payinfo</h1>
    <p>{{payinfo||'空'}}</p>
    <a @click="goto('loopplay')"> 跳转到loopplay</a>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domHeader from "@/components/widget/header-back";

export default {
  props: [],
  data() {

    return {


    }
  },
  computed: {
    token() {
      return this.$store.state.access_token;
    },
    openid() {
      return this.$store.state.openid;
    },
    userinfo() {
      return this.$store.state.userinfo;
    },
    payinfo() {
      return this.$store.state.payInfo;

    }
  },
  methods: {
    goto(url) {
      this.$router.push({ path: url, query: {} });
    },
  },
  watch: {

  },
  components: {
    domHeader
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>


</style>
