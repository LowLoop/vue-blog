/**
 * Created by j.frank on 2017/7/17 0017.
 */
/*var reqHost = "http://39.108.104.153:8888";
var selfHost = "http://39.108.104.153:3000";*/
var reqHost = "http://localhost:8888";
var selfHost = "http://localhost:3000";

module.exports = {
  getHost:function(hostName){
    switch (hostName){
      case "reqHost":
            return reqHost;
      break;
      case "selfHost":
            return selfHost;
      break;
      default:
            return reqHost;
      break;
    }
  }
};
