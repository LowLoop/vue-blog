<template>
  <div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="#">首页</Breadcrumb-item>
        <Breadcrumb-item href="#">什么板块/列表</Breadcrumb-item>
        <Breadcrumb-item>某个东西</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="layout-content">
      <div class="layout-content-main">
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
        内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>内容区域<br>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showIndex: 1
      }
    },
    methods: {
      toggle() {
      }
    }
  }
</script>
<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    background: hsla(0,0%,100%,.6);
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    position: fixed;
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    bottom: 0;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    background: hsla(0,0%,100%,.6);
  }
  .content-left{
    width:70%;
  }
</style>
