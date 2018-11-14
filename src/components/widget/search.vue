<template>
  <div class="searchBar" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" ref="input" placeholder="搜索" v-model="input" required="" @focus="handleFocus" @blur="handleBlur">
      </div>
    </form>
    <a class="btn-search" ref="btn" v-show="inputting" @click="handleSearch">确定</a>
  </div>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {
      inputting: false,
      input: ''
    };
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
    handleFocus() {
      this.inputting = true;

    },
    handleBlur() {
      this.inputting = false;

    },
    handleSearch() {
      if (this.input) {
        var title = this.input;
        this.$router.push({ path: "searchresult", query: { title: title } })
      }
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
<style>
.searchBar {
  width: 669px;
  margin: 0 auto;
  position: relative;
}

.btn-search {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 34px;
  background: #e4413c;
  color: #fff;
  padding: 0 10px;
  z-index: 1px;
}

.weui-search-bar__form {
  width: 100%;
  height: 50px;
}

.weui-search-bar__label span {
  font-size: 27px;
}

</style>
