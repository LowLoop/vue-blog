/**
 * Created by j.frank on 2017/7/13 0013.
 */
module.exports = {
  setCookie: function(name,value) {
    //var Days = 30;
    var exp = new Date();
    //exp.setTime(exp.getTime() + Days*24*60*60*1000);
    exp.setTime(exp.getTime() + 10*60*1000);//十分钟
    document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toGMTString();
  },
  getCookie: function(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
      return decodeURI(arr[2]);
    }else{
      return null;
    }
  },
  delCookie: function(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
      document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }
}
