<template>
  <div class="page">
    <!-- header -->
    <mt-header title="排行榜">
      <!--      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
    </mt-header>
    <!-- navbar -->
    <div class="nav-rank">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <span style="color:red" v-if="choosed=='pop'">人气榜</span><span @click="handleChangeShow(4,'pop')" v-else>人气榜</span>
        </div>
        <div class="weui-flex__item">
          <span style="color:red" v-if="choosed=='hot'">今日最火</span><span @click="handleChangeShow(5,'hot')" v-else>今日最火</span>
        </div>
      </div>
    </div>
    <div v-if="choosed=='pop'">
      <div v-for="(item,index) in poplist.rs" :key="index" class="weui-flex con-rank">
        <div class="con-rank-l"> <span v-if="index<3">{{index+1}}</span> <span v-else style="color:#000">{{index+1}}</span></div>
        <div class="weui-flex__item">
          <domvideoboxrank :info="item"></domvideoboxrank>
        </div>
        <div class="con-rank-r"></div>
      </div>
    </div>
    <div v-if="choosed=='hot'">
      <div v-for="(item,index) in hotlist.rs" :key="item.id" class="weui-flex con-rank">
        <div class="con-rank-l"> <span v-if="index<3">{{index+1}}</span> <span v-else style="color:#000">{{index+1}}</span></div>
        <div class="weui-flex__item">
          <domvideoboxrank :info="item"></domvideoboxrank>
        </div>
        <div class="con-rank-r"></div>
      </div>
    </div>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import domvideoboxrank from "@/components/widget/videoboxrank";
export default {
  props: [],
  data() {
    return {
      choosed: 'pop', //pop:sfid==4 hot:sfid==5
      poplist: {
        page: 1,
        pagecount: 10,
        rs: [],
        total: "10",
      },
      hotlist: {
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
    handleChangeShow(sfid, choosed) {
      this.choosed = choosed;
      this.getSourceShow(sfid)
    },
    getSourceShow(sfid) {
      var that = this;
      var params = {
        sfid: sfid
      };
      var sucf = function(d) {
        if (sfid == 4) {
          that.poplist = d;
        } else {
          that.hotlist = d;
        }
      };
      var errf = function(d) {

      };
      this.$store.commit('getSourceShow', { params: params, sucf: sucf })
    }
  },
  watch: {

  },
  components: {
    domvideoboxrank
  },
  created() {

  },
  mounted() {
    this.getSourceShow(4);
  }

};

</script>
<style scoped>
.nav-rank {
  line-height: 110px;
  height: 110px;
  font-size: 30px;
  background: #f8f8f8;
}

.page {
  background: #fff;
}

.con-rank {
  padding: 20px 0;
  border-bottom: 0.5px solid #efefef;
}

.con-rank-l {
  width: 72px;
  font-size: 36px;
  color: red;
}

.con-rank-r {
  width: 62px;
}

</style>
