<template>
  <nav role="navigation" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle drop-down menu</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span style="font-size: 30px;" class="navbar-brand">low</span>
      </div>
      <div id="navbar" data-expanded="false" style="height:1px;" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active">
            <a @click="toIndex()" role="button" class="nav-menu">
              <img :src="common.getHost('selfHost')+indImage" class="navbar-icon"/>
              <span>首页</span>
            </a>
          </li>
          <li>
            <a href="" role="button" data-toggle="tab" class="nav-menu-fm">
              <img :src="common.getHost('selfHost')+fmImage" class="navbar-icon"/>
              <span>FM</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import axios from 'axios';
  import common from '../common/common.js';
  import cookieUtils from '../common/cookieUtils.js'
  export default {
    name: 'nav',
    props:['user'],
    data(){
      return {
        common:common,
        indImage:'/static/public/images/icon/icon_index.svg',
        fmImage:'/static/public/images/icon/fm.svg',
        loginImg:"/static/public/images/icon/login.svg",
        registerImg:"/static/public/images/icon/register.svg",
        myUser:{
          id:null,
          name:null,
          headPortrait:null
        }
      }
    },
    methods: {
      signout(){
        var _self = this;
        axios.get(common.getHost("reqHost")+"/signout/vueSignout")
          .then(function(res){
            console.log(res.data);
            cookieUtils.delCookie("myUser");
            _self.$emit('userSignIn', _self.myUser);
            swal({
              title: res.data,
              text: ".....",
              type: "success"
            },function(){
              _self.$router.push({path:'index'});
            });
          })
          .catch(function(err){
            console.log(err);
          })
      },
      toProfile(){
        this.$router.push({path:'user/profile'});
      },
      toIndex(){
        this.$router.push({path:'index'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
