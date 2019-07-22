import { Toast } from "mint-ui";
import { Indicator } from 'mint-ui';
const flage_callScan = false



function getcallScan () {
  if(flage_callScan){
    $App.callScan();
  }
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
  flage_callScan,
  install: function (Vue) {
    Vue.prototype.getcallScan = () => getcallScan()
    Vue.prototype.getflage_callScan = () => getflage_callScan()
    Vue.prototype.global_funs = (param) => packageFuns(param)
    // Vue.prototype.Request= (title,param) => Request(title,param)
    // Vue.prototype.global_funy = () => packageFuny()

  }
}