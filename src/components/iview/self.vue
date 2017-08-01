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
      <div class="layout-content-main">
        <h2>其实你看到的都是假的</h2>
      </div>
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
  }
  @keyframes change {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

</style>
