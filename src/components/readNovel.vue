<template>
  <div class="container content">
    <ul class="breadcrumb" v-if="novel">
      <li>
        <a @click="toIndex()">首页</a>
      </li>
      <li>
        <a>{{novel.title}}</a>
      </li>
    </ul>
    <transition  :enter-active-class="defaultClass[Math.floor(Math.random()*7)] +' animated'" leave-active-class="animated bounceOutRight">
      <div class="single-article" v-if="novel">
        <div class="article">
          <h2 class="header">{{novel.title}}</h2>
          <div class="content">
            <p class="user"><span>By:NagatoYuki</span>日期：{{novel.created_at | formatDate}}</p>
            <div v-html="novel.content" class="abstract"></div>
          </div>
        </div>
      </div>
      <!--<div class="read-article" v-if="novel">
        <div class="article-info">
          <h1>{{novel.title}}</h1>
          <div class="user">
            <span>By:NagatoYuki</span> 日期: {{novel.created_at | formatDate}}
          </div>
          <div class="show-content" v-html="novel.content">
            {{novel.content}}
          </div>
        </div>
      </div>-->
    </transition>
  </div>
</template>
<script>
  import common from '../common/common.js';
  import axios from 'axios';
  import {formatDate} from '../common/dateFmt.js';
  export default {
    data() {
      return {
        novel: null,
        defaultClass: ['bounceInDown','bounceInLeft','rubberBand','wobble','rotateIn','rotateInDownLeft']
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    methods: {
      toIndex(){
        this.$router.push({path:'index'});
      }
    },
    mounted() {
      let _self = this;
      axios.get(common.getHost('reqHost')+'/novel/vueOneNovel', {
        params: {
          id: _self.$route.query.id
        }
      })
        .then(function(res){
          _self.novel = res.data;
        })
    }
  }
</script>
<style scoped lang="less">
  .read-article {
    min-height: 100%;
    padding: 20px 60px;
  .article-info{
    border-radius: 5px;
    overflow: hidden;
  }
  h1 {
    background: #fff;
    padding: 10px 35px;
    text-align: right;
    min-height: 52px;
    width: 100%;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.2;
    color: #565a5f;
    border-radius: 5px;
  }
  .user {
    text-align: right;
    font-size: 14px;
    color: #fff;
    background: rgba(210,210,211,0.4);
    padding: 10px 35px;
    box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, .8);
    align-items: center;
  span {
    margin-right: 15px;
  }
  }
  .show-content {
    padding: 20px;
    background: #fff;
    font-size: 16px;
    color:black;
  }
  }
  @media (max-width: 580px) {
    .read-article{
      padding: 0px;
    }
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
  h2 {
    color: rgb(86, 90, 95);
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
    font-size: 16px;
    background: rgba(255, 255, 255, 0.9);
    color: black;
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
</style>
