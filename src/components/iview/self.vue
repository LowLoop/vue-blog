<template>
  <div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="#">首页</Breadcrumb-item>
        <Breadcrumb-item href="#">什么板块/列表</Breadcrumb-item>
        <Breadcrumb-item>关于我</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="layout-content">
      <Timeline>
        <Timeline-item color="green">1.小水管服务器</Timeline-item>
        <Timeline-item color="green">2.所以,不开放注册/登录</Timeline-item>
        <Timeline-item color="blue">3.为什么要用这种时间轴的样式写这些话</Timeline-item>
        <Timeline-item color="blue">4.因为XXX所以XXX</Timeline-item>
      </Timeline>
    </div>
  </div>
</template>
<script>
  export default {
    name:'self'
  }
</script>
<style scoped lang="less">
  @keyframes move {
    0% {
      transform: translateX(60px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
    animation: move 1.8s;
  }
  .layout-content{
    animation: move 1.8s;
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    background: hsla(0,0%,100%,.6);
    padding:5px;
  }
  @keyframes change {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

  .ivu-modal{
    top: 0;
  }
  }
</style>
