<template>
  <div class="page">
    <!-- header -->
    <mt-header title="分类">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-button>
    </mt-header>
    <div class="sort-con">
      <div class="weui-flex sort-box" v-for="(item,index) in categoryList" :key="index" v-show="item.child">
        <div class="sort-box-l">{{item.cname}}</div>
        <div class="weui-flex__item sort-box-r">
          <a v-for="(citem,index) in item.child" @click="goto(citem.id)">{{citem.cname}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */

// import aa from "@/components/widget/videoboxrank";

export default {
  props: [],
  data() {
    return {
      categoryList: []
    }
  },
  computed: {

  },
  methods: {
    goto(id) {
      this.$router.push({ path: 'sortdetail', query:{ id: id } });
    },
    getCategory(opt) {
      var opt = opt || {};
      var that = this;
      var params = {
        status: 1,
        // pid: opt['id'] || '',
      };
      var sucf = function(d) {
        that.categoryList = d;
      };
      var errf = function(d) {

      };
      this.$store.commit('getCategory', { params: params, sucf: sucf });
    },
  },
  watch: {

  },
  components: {

  },
  created() {

  },
  mounted() {
    this.getCategory();
  }

};

</script>
<style scoped>
.sort-con {
  padding: 0 36px;
}

.weui-flex {
  width: 100%;
}

.sort-con {
  padding: 40px;
}

.sort-box {
  border: 1px solid #edeaea;
  margin-bottom: 21px;
}

.sort-box-l {
  /*  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;*/
  width: 169px;
  font-size: 36px;
  color: #e4413c;
  letter-spacing: 30px;
}

.sort-box-r a {
  width: 160px;
  height: 76px;
  line-height: 76px;
  float: left;
  font-size: 28px;
  /*background: red;*/
}

</style>
