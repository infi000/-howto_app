<template>
  <div id="app" class="page">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303133;
}

.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background: #f8f8f8;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #e4413c;
}
.text-center{
  text-align: center;
}.text-left{
  text-align: left;
}.text-right{
  text-align: right;
}
</style>
