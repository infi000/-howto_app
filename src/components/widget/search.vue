<template>
  <div class="searchBar" >
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>

    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
/*jshint esversion: 6 */
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

  },
  created() {

  },
  mounted() {

  }

};

</script>
<style>
.searchBar{
  width: 669px;
  margin: 0 auto;
}

.weui-search-bar__form{
  width:100%;
  height: 50px;
}
.weui-search-bar__label span{
  font-size: 27px;
}
</style>
