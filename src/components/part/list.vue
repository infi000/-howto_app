<template>
  <div class="page">
    <!-- header -->
    <mt-header :title="'专栏列表'">
      <!-- <mt-button icon="back" slot="left" @click="back"></mt-button> -->
      <div slot="left" class="header-back"  @click="back"> <img :src="imgSrc.left" alt="" width="100%"> </div>
    </mt-header>
    <div class="list-con">
      <dom-videoboxw v-for="(item,index) in listInfo.rs" :key="index" :info="item" class="dom-videoboxw"></dom-videoboxw>
      <dom-nodata v-show="listInfo.rs.length==0"></dom-nodata>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domVideoboxw from "@/components/widget/videoboxw";
import domNodata from "@/components/widget/nodata";
import imgLeft from "@/assets/left.png";

export default {
  props: [],
  data() {
    var type = this.$route.query.type;
    var gid = this.$route.query.gid;
    return {
      type: type,
      gid: gid,
      listInfo: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      imgSrc:{
        left:imgLeft
      }
    }
  },
  computed: {

  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getSourceGroup() {
      var that = this;
      var params = {
        gid: this.gid
      };
      var sucf = function(d) {
        that.listInfo=d;
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceGroup', { params: params, sucf: sucf })
    }
  },
  watch: {

  },
  components: {
    domVideoboxw,domNodata
  },
  created() {

  },
  mounted() {
    if (this.type == "group") {
      this.getSourceGroup()

    }
  }

};

</script>
<style scoped>
.list-con {
  padding: 40px;
}

.dom-videoboxw {
  margin-bottom: 18px;
}

</style>
