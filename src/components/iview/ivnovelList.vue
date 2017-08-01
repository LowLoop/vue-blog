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
        <transition  :enter-active-class="defaultClass[Math.floor(Math.random()*7)] +' animated'" leave-active-class="animated bounceOutRight">
          <div class="single-article" v-if="indexData.pageObj.curPage != null" v-for="(novel,index) in indexData.novelList">
            <!--<div class="article" @click="readmore(novel.id)">-->
            <div class="article">
              <h2 class="header">{{novel.title}}</h2>
              <div class="content">
                <p class="user"><span>By:NagatoYuki</span>日期：{{novel.created_at | formatDate}}</p>
                <div id="novelCon" v-html="novel.content" class="abstract"></div>
              </div>
              <div class="more">
                <span>阅读更多</span>
              </div>
            </div>
          </div>
        </transition>
        <div class="page" v-if="indexData.pageObj.curPage != null">
          <Page :current="indexData.pageObj.curPage" :page-size="indexData.pageObj.size" :total="indexData.pageObj.totalSize"
                @on-change="change" simple></Page>
        </div>
      </div>
    </div>
    <div v-show="showLoading" class="spinner-mask">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import common from '../../common/common.js';
  import {formatDate} from '../../common/dateFmt.js';
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    data() {
      return{
        indexData:{
          pageObj:{},
          novelList:{}
        },
        showLoading:false,
        showIndex: 1,
        common: common,
        defaultClass: ['bounceInDown','bounceInLeft','rubberBand','wobble','rotateIn','rotateInDownLeft']
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    /*computed: mapState([
      'indexData'
    ]),*/
    beforeCreate(){
      var _self = this;
      axios.post(common.getHost("reqHost")+'/vueIndex')
        .then(function(res){
          _self.indexData = res.data;
        })
        .catch(function(err){
          console.log(err);
        })
    },
    methods: {
      readmore(id) {
        this.$router.push({
          path: 'readNovel',
          query: {
            id: id
          }
        })
      },
      change: function (curPage) {
        var _self = this;
        this.$Loading.start();
        this.showLoading = true;

        axios.post(common.getHost("reqHost")+'/vueIndex',{page:curPage})
          .then(function(res){
            _self.indexData = res.data;
            _self.$Loading.finish();
            setTimeout(() => {  //至少0.5s动画
              _self.showLoading = false;
          }, 500);
          })
          .catch(function(err){
            console.log(err);
            _self.$Loading.error();
            //_self.showLoading = false;
            setTimeout(() => {  //至少0.5s动画
              _self.showLoading = false;
          }, 500);
          })

      },
      keyupPageFn: function(val){
        var _self = this;
        var e=window.event||event;
        var c=e.keyCode||e.which;
        if(c==13){
          _self.pageFn(val);
        }
      }
    }
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
  .content-left{
    width:70%;
  }
  .single-article {
    transform: translate(0px, 0px);
    color: #565a5f;
    border-radius: 5px;
    overflow: hidden;
    line-height: 28px;
    position: relative;
    margin-top: 15px;
  .article:hover {
    cursor: pointer;
  h2 {
    color: #38b7ea;
  &:after {
     opacity: 0;
   }
  &:before {
     background: #38b7ea;
     width: 100%;
     content: ' ';
     opacity: 1;
     transition: 1s;
   }
  }
  .more span {
    background: #fff;
    border: 2px solid #38b7ea;
    color: #333;
  }
  }
  .article {
    background: #fff;
    padding: 35px;
    background: rgba(255, 255, 255, 0.9);
    background-image:url("../../../static/public/images/content_bg.jpg");
  h2 {
    color: black;
    text-align: center;
    transition: color .2s ease;
    position: relative;
    padding-bottom: 20px;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    position: relative;
    transition: 0.5s;
  &:after {
     position: absolute;
     bottom: 0;
     height: 3px;
     width: 100%;
     content: ' ';
     left: 50%;
     transform: translateX(-50%);
     background: #000;
     animation: change 1s;
   }
  &:before {
     position: absolute;
     bottom: 0;
     height: 3px;
     width: 0%;
     content: ' ';
     left: 50%;
     opacity: 0;
     transform: translateX(-50%);
     background: #000;
   }
  }
  .user {
    text-align: center;
    font-size: 14px;
    color: #696969;
  span {
    margin-right: 15px;
  }
  }
  .more {
    margin-top: 20px;
    text-align: center;
  span {
    display: inline-block;
    padding: 0 15px;
    font-size: 14px;
    color: #fff;
    background: #222;
    border: 2px solid #222;
    transition: 0.5s;
    border-radius: 4px;
  }
  }
  .content {
    margin-top: 15px;
    font-size: 14px;
    background:white;
    color:black;
  .abstract {
    word-break: break-all;
    text-indent: 2em;
  }
  }
  }
  .article-info {
    display: flex;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, .8);
  ul {
    display: flex;
    flex: 1;
  li {
    margin-left: 5px;
  }
  }
  span,
  ul li {
    font-size: 16px;
    line-height: 50px;
    color: #fff;
  }
  }
  }
  @keyframes change {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @media (max-width: 580px) {
    .single-article {
    .article {
      padding: 5px;
      overflow: hidden;
    h2 {
      padding-top: 15px;
    }
  }
  }
  }
  .page {
    margin: 20px 0;
    float: left;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    display: inline-block;
  }
  .spinner {
    margin: 100px auto;
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: #67CF22;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }
  .spinner-mask{
    width: 100%;
    height: 100%;
    z-index: 998;
    position: absolute;
    text-align: center;
    background: rgba(0,0,0,0.4);
    right:0;
    top:30px;
  }

</style>
