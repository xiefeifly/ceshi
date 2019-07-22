// import Vue from 'vue'
// let vue = new Vue()
import { Toast } from "mint-ui";
import { Indicator } from 'mint-ui';

// import VueResource from 'vue-resource'







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
  install: function (Vue) {
    Vue.prototype.global_func = (param) => packageFunc(param)
    // Vue.prototype.global_funs = (param) => packageFuns(param)
    // Vue.prototype.Request= (title,param) => Request(title,param)
    // Vue.prototype.global_funy = () => packageFuny()

  }
}