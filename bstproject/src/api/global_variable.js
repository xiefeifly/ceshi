// import Vue from 'vue'
// let vue = new Vue()
import { Toast } from "mint-ui";
import { Indicator } from 'mint-ui';

// import VueResource from 'vue-resource'
const URL = 'www.baidu.com'
const token = '123456'
const userSite = '林花落了春红，太匆匆'



// function Request(title,url) {
//     Indicator.open({
//         text: '加载中...',
//         spinnerType: 'double-bounce'
//       });
//     //   var api =
//     //   "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
//     this.$http.get(url).then(
//       response => {
//         console.log(response);
//         this.receipt_list = response.body.result;
//         console.log(this.receipt_list[0].title);
//       },
//       function(err) {
//         console.log(err);
//       }
//     );
// }







function packageFunc (param) {
    // alert(param)
    Indicator.open({
        text: '加载中...',
        spinnerType: 'double-bounce'
      });
      setTimeout(() => {
        Indicator.close();
      }, 2000);
  }
  
  function packageFuns (param) {
    //   Indicator.close();
    let instance = Toast(URL);
    setTimeout(() => {
      instance.close();
    }, 2000);
  }
  function packageFuny () {
    Indicator.open();
      setTimeout(() => {
        Indicator.close();
      }, 2000);
  }


export default {
  URL,
  token,
  userSite,
  install: function (Vue) {
    Vue.prototype.global_func = (param) => packageFunc(param),
    Vue.prototype.global_funs = (param) => packageFuns(param)
    Vue.prototype.Request= (title,param) => Request(title,param)
    Vue.prototype.global_funy = () => packageFuny()

  }
}