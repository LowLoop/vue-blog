<script>
  import navbar from './nav.vue'
  import signInUpLayer from './signInUpLayer.vue'
  import indexContent from './content.vue'
  import cookieUtils from '../common/cookieUtils.js'
  export default {
    name: 'index',
    components: {
      navbar,
      signInUpLayer,
      indexContent
    },
    data(){
      return{
        myUser:{
          id:null,
          name:null,
          headPortrait:null
        },
        cookieUtils: cookieUtils
      }
    },
    methods:{
      checkCookie:function(){
        var user = cookieUtils.getCookie("myUser");
        console.log(user);
        if(user == null){
          console.log("cookie没有值");
        }else{
          this.myUser = JSON.parse(user);
        }
        console.log(this.myUser);
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
      this.checkCookie();
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
    <router-view @userSignIn="userSignIn" :user="myUser"></router-view>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
