<script>
  import navbar from './nav.vue';
  import signInUpLayer from './signInUpLayer.vue';
  import cookieUtils from '../common/cookieUtils.js';
  import common from '../common/common.js';
  import $ from 'jquery';
  export default {
    name: 'index',
    components: {
      navbar,
      signInUpLayer
    },
    data(){
      return{
        common:common,
        myUser:{
          id:null,
          name:null,
          headPortrait:null
        },
        cookieUtils: cookieUtils/*,
        jcrop_api:null,
        boundx:null,
        boundy:null,
        imgData:null,
        userId:null*/
      }
    },
    methods:{
      /*imgChange:function(){

      },
      updateCoords:function(c){
        if (parseInt(c.w) > 0){
          var rx = xsize / c.w;
          var ry = ysize / c.h;
          var img = document.getElementById('Img1');
          var ctx = document.getElementById('myCanva').getContext('2d');
          //绘制canvas画布
          ctx.drawImage(img, c.x, c.y, c.w, c.h, 0, 0, 100, 100);
          imgData = document.getElementById('myCanva').toDataURL();
          //ctx.drawImage(img, c.x, c.y, Math.round(rx * boundx), Math.round(ry * boundy), 0, 0, 100, 100);
        }
      },
      initJcrop:function() {
        let _self = this;
        if (jcrop_api != null){
          jcrop_api.destroy();
        }

        $('#Img1').Jcrop({
          onChange: _self.updateCoords,
          onSelect: _self.updateCoords,
          aspectRatio: xsize / ysize,
          boxWidth: 280,
          boxHeight: 280
        }, function() {
          //var ctx = document.getElementById('myCanva').getContext('2d');
          //弹窗中显示的图片尺寸
          var bb = this.getBounds();
          var bWidth = Number(bb[0]) / 2;
          var bHeight = Number(bb[1]) / 2;
          boundx = bb[0];
          boundy = bb[1];
          //设置初始选中裁切范围
          this.setSelect([0, 0, bWidth, bHeight]);

          jcrop_api = this;

          //ctx.drawImage(img, c.x, c.y, c.w, c.h, 0, 0, 100, 100);//初始绘制canva预览图

        });
      },*/
      checkCookie:function(){
        var user = cookieUtils.getCookie("myUser");
        console.log(user);
        if(user == null){
          console.log("cookie没有值");
        }else{
          this.myUser = JSON.parse(user);
        }
        console.log(this.myUser);
        return user;
      },
      //子组件将用户名传过来
      userSignIn(user){
        /*sessionStorage.userName = userName;
         this.userName = sessionStorage.userName;*/
        this.myUser = user;
        this.checkCookie();
      }
    },
    created(){
      let u = this.checkCookie();
      console.log(this.myUser);
      if(this.myUser == null){
        this.$router.push("/");
      }
      /*var user = cookieUtils.getCookie("myUser");
       console.log(user);
       if(user == null){
       console.log("cookie没有值");
       }else{
       this.myUser = JSON.parse(user);
       }*/
    }/*,
     watch: {
     myUser:'checkCookie'
     }*/
  }
</script>

<template>
  <div>
    <navbar @userSignIn="userSignIn" :user="myUser"></navbar>
    <signInUpLayer @userSignIn="userSignIn"></signInUpLayer>
    <div class="wrapper wrapper-content">
      <div class="row animated fadeInRight">
        <div class="col-md-4">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>个人资料</h5>
            </div>
            <div>
              <div class="ibox-content no-padding border-left-right">
                <img alt="image" :src="common.getHost('reqHost')+myUser.headPortrait" class="img-circle img-responsive center-block"/>
                <img alt="image" src="" class="img-circle img-responsive"/>
                <input id="userId" type="hidden" value=""/>
                <button type="button" data-toggle="modal" data-target="#updateHeadPortraitBox" class="btn btn-pink center-block">更换头像</button>
              </div>
              <div class="ibox-content profile-content">
                <h4><strong>1111</strong></h4>
                <h5>关于我</h5>
                <p>XXX后面有需求再做吧.</p>
                <div class="row m-t-lg">
                  <div class="col-sm-4">
                    <h5><strong>多少,要查询count</strong> 文章</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>最新动态</h5>
              <div class="ibox-tools"><a class="collapse-link"><i class="fa fa-chevron-up"></i></a><a class="close-link"><i class="fa fa-times"></i></a></div>
            </div>
            <div class="ibox-content">
              <div>
                <div class="feed-activity-list">
                  <div class="feed-element">
                    <div class="media-body"><small class="pull-right">5分钟前</small><strong>XXX</strong> 发布了XXX 这里也要查..<br/><small class="text-muted">今天 xx 来自 XXX</small></div>
                  </div>
                </div>
                <button class="btn btn-pink btn-block m"><i class="fa fa-arrow-down"></i> 显示更多</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>修改资料</h5>
              <div class="ibox-tools"><a class="collapse-link"><i class="fa fa-chevron-up"></i></a><a class="close-link"><i class="fa fa-times"></i></a></div>
            </div>
            <div class="ibox-content">
              <form enctype="multipart/form-data" class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">登录名</label>
                  <div class="col-sm-10">
                    <p class="form-control-static">111111</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="nickName" class="col-sm-2 control-label">昵称</label>
                  <div class="col-sm-10">
                    <input id="nickName" type="text" name="nickName" placeholder="昵称" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="col-sm-2 control-label">邮箱</label>
                  <div class="col-sm-10">
                    <input id="email" type="email" name="email" placeholder="邮箱" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="newPasd" class="col-sm-2 control-label">新密码</label>
                  <div class="col-sm-10">
                    <input id="newPasd" type="password" name="newPasd" placeholder="新密码" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="checkNewPasd" class="col-sm-2 control-label">重复新密码</label>
                  <div class="col-sm-10">
                    <input id="checkNewPasd" type="password" name="checkNewPasd" placeholder="重复新密码" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <button type="submit" id="updateUserInfo" class="btn btn-pink btn-block">保存</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="updateHeadPortraitBox" tabindex="-1" role="dialog" aria-hidden="true" class="modal inmodal">
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
            <h4 class="modal-title">上传头像</h4>
          </div>
          <div class="modal-body">
            <div style="height:300px;">
              <!-- 弹窗与裁切图-->
              <div class="cover"><img id="Img1" alt=""/></div>
              <div class="preview text-center">
                <div class="preview-hint">预览</div>
                <!-- 裁切范围重绘canvas-->
                <canvas id="myCanva" width="100" height="100">您的浏览器不支持 HTML5 canvas 标签。</canvas>
                <!-- <canvas id="myCanva" style="width:200px;height:200px;float:right;overflow:hidden;border:1px solid;border-radius:50%;margin-top:100px;"></canvas>-->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <input id="upLoadImg1" type="file" name="upLoadImg1" class="pull-left"/>
            <button id="btnSave" class="pull-right btn btn-pink">保存</button>
            <!--button.btn.btn-white(type='button', data-dismiss='modal') 关闭-->
          </div>
        </div>
      </div>
    </div>
    <div id="updatePasd" tabindex="-1" role="dialog" aria-hidden="true" class="modal inmodal">
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
            <h4 class="modal-title">更改密码</h4>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button id="btnUpdatePasd" class="pull-right btn btn-pink">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
