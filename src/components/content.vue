<template>
  <div>
    <div class="container content">
      <transition  :enter-active-class="defaultClass[Math.floor(Math.random()*7)] +' animated'" leave-active-class="animated bounceOutRight">
        <div class="single-article" v-for="(novel,index) in indexData.novelList">
          <div class="article" @click="readmore(novel.id)">
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

      <ul :data-current-page="indexData.pageObj.curPage" ref="testul" class="pagination">
        <li v-if="indexData.pageObj.curPage != 1"><a @click="pageFn(indexData.pageObj.curPage-1)">«</a></li>
        <li v-else><a>«</a></li>
        <li v-for="i in indexData.pageObj.pageSize" v-if="i == indexData.pageObj.curPage" class="active">
          <a>{{i}}</a>
        </li>
        <li v-else-if="i < 3">
          <a @click="pageFn(i)">{{i}}</a>
        </li>
        <li v-else-if="i == 3">
          <a>...</a>
        </li>
        <li v-if="indexData.pageObj.curPage != indexData.pageObj.pageSize"><a @click="pageFn(indexData.pageObj.curPage+1)">»</a></li>
        <li v-else><a>»</a></li>
        <li class="disabled controls">
          <a>跳转至<input type="text" v-model="toPageVal"
                      @keyup="keyupPageFn(toPageVal)">页.
            每页2条数据.
            总共{{indexData.pageObj.pageSize}}页.
            总共{{indexData.pageObj.totalSize}}条数据.
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import axios from 'axios';
  import {formatDate} from '../common/dateFmt.js';
  import cookieUtils from '../common/cookieUtils.js';
  import common from '../common/common.js';
  export default {
    name: 'content',
    data(){
      return{
        indexData:{
          pageObj:{},
          novelList:{}
        },
        toPageVal:1,
        myUser:{
          id:null,
          name:null,
          headPortrait:null
        },
        cookieUtils: cookieUtils,
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
    props:['user'],
    created(){
      let _self = this;
      axios.post(common.getHost("reqHost")+'/vueIndex')
        .then(function(res){
          _self.indexData = res.data;
          /*_self.$set(_self.indexData,'pageObj',data.pageObj);
          _self.$set(_self.indexData,'novelList',data.novelList);*/
        })
        .catch(function(err){
          console.log(err);
        })

    },
    mounted(){

    },
    methods: {
      pageFn: function (curPage) {
        var _self = this;
        var $spinner = $(".spinner");
        var $wrapper = $(".wrapper");
        $wrapper.css("display","none");
        $spinner.fadeIn();
        axios.post(common.getHost("reqHost")+'/vueIndex',{page:curPage})
          .then(function(res){
            _self.indexData = res.data;
            $spinner.fadeOut();
            $wrapper.fadeIn();
          })
          .catch(function(err){
            console.log(err);
          })
      },
      keyupPageFn: function(val){
        var _self = this;
        var e=window.event||event;
        var c=e.keyCode||e.which;
        if(c==13){
          _self.pageFn(val);
        }
      },
      signin: function(){
        var _self = this;
        var $loginForm = $("#loginForm1");
        axios({
          method:"POST",
          url:common.getHost("reqHost")+'/signin/vueSignin',
          data:$loginForm.serialize()
        })
          .then(function(res){
            switch (res.data.code){
              case 0:
                _self.$emit('userSignIn', _self.myUser);
                break;
              case 1:
                _self.myUser = res.data.myUser;
                _self.$emit('userSignIn', _self.myUser);
                cookieUtils.setCookie("myUser",JSON.stringify(res.data.myUser));
                break;
              default:
                break;
            }

            swal({
              title: res.data.msg,
              text: ".....",
              type: res.data.state
            });
          })
          .catch(function(err){
            console.log(err);
          })
      },
      signup: function(){
        var _self = this;
        var $registerForm = $("#registerForm1");
        axios({
          method:"POST",
          url:common.getHost("reqHost")+'/signup/vueSignup',
          data:$registerForm.serialize()
        })
          .then(function(res){
            switch (res.data.code){
              case 0:
                _self.$emit('userSignIn', _self.myUser);
                break;
              case 1:
                _self.myUser = res.data.myUser;
                _self.$emit('userSignIn', _self.myUser);
                cookieUtils.setCookie("myUser",JSON.stringify(res.data.myUser));
                break;
              default:
                break;
            }

            swal({
              title: res.data.msg,
              text: ".....",
              type: res.data.state
            });
          })
          .catch(function(err){
            console.log(err);
          })
      },
      readmore(id) {
        this.$router.push({
          path: 'readNovel',
          query: {
            id: id
          }
        })
      },
      toggleFade: function(){
        /*var $wrapper = $(".wrapper");
        $wrapper.fadeOut();
        $wrapper.fadeIn();*/
      }
    },
    watch: {
      indexData:'toggleFade'
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow:hidden;
    /*white-space:nowrap;*/
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
