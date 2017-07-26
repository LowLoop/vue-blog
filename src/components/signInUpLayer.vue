<template>
  <div>
    <div id="loginModal" tabindex="-1" role="dialog" aria-hidden="true" class="modal inmodal">
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close">
              <span aria-hidden="true">×</span>
              <span class="sr-only">关闭</span>
            </button>
            <h4 class="modal-title">登录</h4>
          </div>
          <div class="modal-body">
            <form id="loginForm" method="post" name="loginForm" class="form-horizontal"
                  onkeydown="if(event.keyCode==13)return false;">
              <!-- 下面这个div必须要有，插件根据这个进行添加提示-->
              <div class="form-group">
                <label class="col-md-2 control-label banner-sign-box-control">
                  <i class="glyphicon glyphicon-user"></i>用户
                </label>
                <div class="col-md-9 banner-sign-box-control">
                  <div class="input-group">
                    <input type="text" name="inUserName" class="form-control"/>
                    <div class="input-group-addon">*</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-2 control-label banner-sign-box-control">
                  <i class="glyphicon glyphicon-lock"></i>密码
                </label>
                <div class="col-md-9 banner-sign-box-control">
                  <div class="input-group">
                    <input type="password" name="inUserPasd" class="form-control"/>
                    <div class="input-group-addon">*</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <button @click="signin()" type="button" class="btn btn-pink btn-block">登录</button>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-white">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div id="registerModal" tabindex="-1" role="dialog" aria-hidden="true" class="modal inmodal">
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close">
              <span aria-hidden="true">×</span>
              <span class="sr-only">关闭</span>
            </button>
            <h4 class="modal-title">注册</h4>
          </div>
          <div class="modal-body">
            <form id="registerForm" method="post" action="" name="registerForm" class="form-horizontal">
              <!-- 下面这个div必须要有，插件根据这个进行添加提示-->
              <div class="form-group">
                <label class="col-md-2 control-label banner-sign-box-control">
                  <i class="glyphicon glyphicon-user"></i>用户
                </label>
                <div class="col-md-9 banner-sign-box-control">
                  <div class="input-group">
                    <input type="text" name="userName" class="form-control"/>
                    <div class="input-group-addon">*</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-2 control-label banner-sign-box-control">
                  <i class="glyphicon glyphicon-lock"></i>密码
                </label>
                <div class="col-md-9 banner-sign-box-control">
                  <div class="input-group">
                    <input type="password" name="userPasd" class="form-control"/>
                    <div class="input-group-addon">*</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-2 control-label banner-sign-box-control">
                  <i class="glyphicon glyphicon-envelope"></i>邮箱
                </label>
                <div class="col-md-9 banner-sign-box-control">
                  <input type="text" name="email" class="form-control"/>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <button @click="signup()" type="button" class="btn btn-success btn-block">注册</button>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-white">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import axios from 'axios';
  import cookieUtils from '../common/cookieUtils.js';
  export default {
    name: 'signInUpLayer',
    data(){
      return {
        myUser:{
          id:null,
          name:null,
          headPortrait:null
        },
        cookieUtils:cookieUtils
      }
    },
    methods: {
      signin: function(){
        var _self = this;
        var $loginForm = $("#loginForm");
        axios({
          method:"POST",
          url:'http://localhost:8888/signin/vueSignin',
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

            $("#loginModal").fadeOut();
            $(".modal-backdrop").remove();
            $("body").removeClass();
            $("body").removeAttr("style");

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
        var $registerForm = $("#registerForm");
        axios({
          method:"POST",
          url:'http://localhost:8888/signup/vueSignup',
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
            $("#registerModal").fadeOut();
            $(".modal-backdrop").remove();
            $("body").removeClass();
            $("body").removeAttr("style");
            swal({
              title: res.data.msg,
              text: ".....",
              type: res.data.state
            });
          })
          .catch(function(err){
            console.log(err);
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
