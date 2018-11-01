<template>
  <div class="page">
    <!-- header -->
    <mt-header title="专栏列表">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-button>
    </mt-header>
    <div class="list-con">


      <dom-videoboxw v-for="(item,index) in [9,8,7]" :key="item" class="dom-videoboxw"></dom-videoboxw>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";
import domVideoboxw from "@/components/widget/videoboxw";

export default {
  props: [],
  data() {
    return {   }
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
  watch:{

  },
  components: {
domVideoboxw
  },
  created() {

  },
  mounted() {

  }

};

</script>

<style scoped>

.list-con {
  padding: 40px;
}
.dom-videoboxw {
  margin-bottom:18px;
}

</style>
