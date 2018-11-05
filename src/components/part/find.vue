<template>
  <div class="page">
    <!-- header -->
    <mt-header title="发现">
      <!--  <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
    </mt-header>
    <!-- <dom-search class="find-search" ></dom-search> -->
    <div class="find-con">
      <dom-groupbox :info="item" :desc="true" class="dom-groupbox" v-for="(item,index) in grouplist.rs" :key="index" ></dom-groupbox>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

import domSearch from "@/components/widget/search";
import domGroupbox from "@/components/widget/groupbox";
export default {
  props: [],
  data() {
    return {
      grouplist: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      }
    }
  },
  computed: {

  },
  methods: {
    getGroup() {
      var that = this;
      var params = {};
      var sucf = function(d) {
        that.grouplist=d;
      };
      var errf = function(d) {

      };
      this.$store.commit('getGroup', {sucf:sucf})
    }
  },
  watch: {

  },
  components: {
    domSearch,
    domGroupbox
  },
  created() {

  },
  mounted() {
    this.getGroup();
  }

};

</script>
<style scoped>
.find-search {
  background: #e4413c;
  padding: 40px;
}

.find-con {
  padding-top: 40px;
  padding-left: 40px;
}

.dom-groupbox {
  margin-bottom: 32px;
}

</style>
