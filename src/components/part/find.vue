<template>
  <div class="page">
    <!-- header -->
    <mt-header title="发现">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-button>
    </mt-header>
    <dom-search class="find-search"></dom-search>
    <div class="find-con">
      <dom-groupbox :desc="true" class="dom-groupbox" v-for="(item,index) in [12,7,6,5,3]"></dom-groupbox>
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
    return {}
  },
  computed: {

  },
  methods: {
    // funname(){
    //     var that=this;
    //     var params={};
    //     var sucf=function(d){

    //     };
    //     var errf=function(d){

    //     };
    //     this.$store.commit('funname',{})
    // }
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

  }

};

</script>
<style scoped>
.find-search {
  background: #e4413c;
  padding: 40px;
}

.find-con {
  padding-left: 37px;
}
.dom-groupbox{
  margin-bottom: 32px;
}
</style>
