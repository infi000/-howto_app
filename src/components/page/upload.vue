<template>
  <div class="page">
    <dom-header :title="'上传视频'" :mrb40="true"></dom-header>

    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">标题</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="form.title" class="weui-input" type="text" placeholder="请输入视频标题">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">标签</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="form.key" class="weui-input" type="text" placeholder="多个标签用英文逗号隔开">
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">一级分类</label>
        </div>
        <div class="weui-cell__bd">
          <select v-model="form.category" class="weui-select">
            <option value="1" v-for="(item,index) in category" :key="index" :value="item">{{item.cname}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after" v-if="channel.length>0">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">二级分类</label>
        </div>
        <div class="weui-cell__bd">
          <select v-model="form.channel" class="weui-select">
            <option value="1" v-for="(item,index) in channel" :key="index" :value="item">{{item.cname}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after" v-if="column.length>0">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">三级分类</label>
        </div>
        <div class="weui-cell__bd">
          <select v-model="form.column" class="weui-select">
            <option value="1" v-for="(item,index) in column" :key="index" :value="item">{{item.cname}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">金额</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="form.price" class="weui-input" type="text" placeholder="输入金额">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">描述</label>
        </div>
        <div class="weui-cell__bd">
          <input v-model="form.describe" class="weui-input" type="text" placeholder="一句话描述">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">视频</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="file" @change="handleAddFile">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p class="weui-uploader__title">封面</p>
              <div class="weui-uploader__info">{{uploadImg.length}}/1</div>
            </div>
            <div class="weui-uploader__bd">
              <ul class="weui-uploader__files">
                <li class="weui-uploader__file" :style="'background-image:url('+item.src+')'" v-for="(item,index) in uploadImg" :key="index" @click="handleDelImg"></li>
              </ul>
              <div class="weui-uploader__input-box">
                <input class="weui-uploader__input" type="file" accept="image/*" multiple="" @change="handleAddImg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" @click="handleSubmit">确定</a>
      </div>
    </div>
    <div class="loading-page" v-show="formLoading">
      <div class="spinner text-center">
        <mt-spinner color="#26a2ff" :size="60" style="display: inline-block;"></mt-spinner>
        <mt-progress :value="progress" :bar-height="10">
        </mt-progress>
      </div>
    </div>
  </div>
</template>
<script>
import domHeader from "@/components/widget/header-back";
import { Toast } from 'mint-ui';

/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    var o_form = {
      title: '', //标题;
      describe: '', //描述;
      key: '', //关键词（标签）;
      source: '', //视频资源（上传文件）;
      price: 0, //价格
      // 非必需字段：
      category: {}, //一级分类id;
      channel: {}, //二级分类id;
      column: {}, //三级分类id;
      ctime: '', //提交时间;
      thumbinal: '', //预览图（上传文件）;
      uploadImg: '', //预览图的文件
      weight: '', //权重;
    };
    return {
      formLoading: false,
      uploadImg: [], //上传预览图
      uploadFile: '', //上传的文件
      category: [], //一级分类
      channel: [], //2级分类
      column: [], //3级分类
      form: o_form, //表单
      progress: 0, //进度
      // uploadParams: {}, //上传视频所需参数{ "userid": "1000010007", "at": 1537432498, "utype": "1", "uuid": "c82bec76-78ac-3cf1-609d-1d1c05019bb2", "sign": "d4f86da28895cc6a2897a862a21bf83b20224f67" }
      uploadParams: { "userid": "1000010007", "at": 1537432498, "utype": "1", "uuid": "c82bec76-78ac-3cf1-609d-1d1c05019bb2", "sign": "d4f86da28895cc6a2897a862a21bf83b20224f67" }
    };
  },
  computed: {},
  methods: {
    check() {
      var num = this.form.price;
      var exp = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
      if (exp.test(num)) {
        return true

      } else {
        return false;
      }

    },
    upload(uuid) {
      var that = this;
      var formData = new FormData();
      var params = this.uploadParams;
      var sucf = function(d) {
        //结束后吧参数传给杨金伟接口
        // that.$message({type:'success',message:d.msg});
        that.form.source = d.data;
        that.addVideo();

      };
      var errf = function(d) {
        that.formLoading = false;
        Toast({
          message: d,
          position: 'top',
          duration: 2000
        });
      };


      //标签单独处理成字符串 用逗号隔开
      formData.append('uuid', uuid);
      formData.append('userid', params.userid);
      formData.append('utype', params.utype);
      formData.append('at', params.at);
      formData.append('sign', params.sign);
      formData.append('userfile', that.uploadFile);
      this.$store.commit('upload', {
        params: formData,
        sucf: sucf,
        errf: errf
      });

    },
    handleAddImg(e) {
      var src, url = window.URL || window.webkitURL || window.mozURL,
        files = e.target.files;
      var file = files[0];
      if (url) {
        src = url.createObjectURL(file);
      } else {
        src = e.target.result;
      }
      this.uploadImg = [{
        src: src,
        file: file
      }];
    },
    handleDelImg(e) {
      MessageBox.confirm('确定删除?').then(action => { this.uploadImg = []; }).catch(() => {});
    },
    handleAddFile(e) {
      this.uploadFile = e.target.files[0] || '';
    },
    handleSubmit() {
      if (this.check()) {
        this.formLoading = true;
        //如果是编辑接口 如果uploadParams.userfile为空==》直接调杨金伟上传视频参数接口
        // if (!this.status && !this.uploadParams.userfile) {
        //   this.addVideo();
        //   return;
        // }
        //如果是新增 先上传景云山upload接口，成功后获取视频路径
        // 再和参数传给杨金伟接口
        var uuid = "";
        var that = this;
        for (var i = 0; i < 6; i++) {
          uuid += Math.floor(Math.random() * 16).toString(16);
        }
        uuid += this.uploadParams.uuid;
        this.upload(uuid);
        this.getUploadProgress(uuid);

      } else {
        alert('输入金额错误')
      }

    },
    getCategory(pid, sucf) {
      //查询分类
      var that = this;
      var params = {
        pid: pid || ''
      };
      var sucf = sucf || function(d) {
        that.category = d;
      };
      this.$store.commit('getCategory', { params: params, sucf: sucf });
    },
    getUploadParams() {
      //获取上传所需参数
      var that = this;

      var sucf = function(d) {
        console.log("d", d)
        that.uploadParams = d || {};
      };
      this.$store.commit('getUploadParams', { sucf: sucf });
    },
    getUploadProgress(uuid) {
      //获取上传进度
      var that = this;
      var params = {
        uuid: uuid
      };
      var sucf = function(d) {
        // received:3258306 size:3267246 state:"uploading"
        //过1000MS继续请求
        var progress = (d.received / d.size) * 100;
        that.progress = parseInt(progress);
        console.log(progress);
        window.setTimeout(function() {
          that.$store.commit('getUploadProgress', { params: params, sucf: sucf, done: done });
        }, 1000);

      };
      var done = function(d) {
        //结束
        console.log("结束", d);
      };

      this.$store.commit('getUploadProgress', { params: params, sucf: sucf, done: done });
    },
    addVideo() {
      var that = this;
      var formData = new FormData();
      var params = this.form;
      var sucf = function(d) {
        that.formLoading = false;
        // that.$message({ type: "success", message: "提交成功！" });
        //跳转回content

        Toast({
          message: '操作成功',
          iconClass: 'icon icon-success',
          duration: 2000
        });
        that.$router.go(-1);
      };
      var errf = function(d) {
        that.formLoading = false;
        Toast({
          message: d,
          position: 'top',
          duration: 2000
        });
      };
      //标签单独处理成字符串 用逗号隔开
      //判断formStatus 是新增还是编辑

      formData.append('stitle', params.title);
      formData.append('des', params.describe);
      formData.append('key', params.key);
      formData.append('source', params.source);
      formData.append('price', params.price);

      if (params.category) {
        var cate = params.category['id']||'';
        formData.append('category', cate);
      }
      if (params.channel) {
        var chan = params.channel['id']||'';
        formData.append('channel', chan);
      }
      if (params.column) {
        var colu = params.column['id']||'';
        formData.append('column', colu);
      }

      var thum = this.uploadImg.length > 0 ? this.uploadImg[0]['file'] : '';
      formData.append('thumbinal', thum);
      this.$store.commit('addVideo', { params: formData, sucf: sucf, errf: errf });
    }
  },
  watch: {
    formLoading() {
      //加载LOADING结束时，进度改为0
      if (!this.formLoading) {
        this.progress = 0;
      }
    },
    'form.category' () {
      var res = [];
      if (this.form.category) {
        res = this.form.category['child'] || [];
      }
      this.form.channel = '';
      this.form.column = '';
      this.channel = res;
      this.column = [];
    },
    'form.channel' () {
      var res = [];
      if (this.form.channel) {
        res = this.form.channel['child'] || [];
      }
      this.form.column = '';
      this.column = res;
    }
  },
  components: {
domHeader
  },
  created() {

  },
  mounted() {
    this.getCategory();
    this.getUploadParams();
  }

};

</script>
<style scoped>


</style>
