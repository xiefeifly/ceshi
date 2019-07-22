
<template>
  <div id="app">
    <p>{{msg}}</p>
    <button @click="geter()">er</button>
    <br />
    <button @click="getming()">ming</button>
    <br />
    <button @click="getReceipt()">Receipt</button>
    <br />
    <button @click="getmaterialHistoryRecord()">materialHistoryRecord</button>
    <br />
    <button @click="gettasklist()">tasklist</button>
    <br />
    <button @click="gettaskQuery()">taskQuery</button>
    <br />
    <button @click="getStart()">Start</button>
    <br />
    <button @click="getrequitWork()">requitWork</button>
    <br />
    <button @click="getsuspend()">suspend</button>
    <br />
    <button @click="getreturnwork()">returnwork</button>
    <br />
    <button @click="getpieceBinding()">pieceBinding</button>
    <br />
    <button @click="getpieceunBinding()">pieceunBinding</button>
    <br />
    <button @click="getorderquery()">orderquery</button>
    <br />
     <button @click="getPersonalinquiry()">Personalinquiry</button>
    <br />
    <button @click="getPOstorage()">POstorage</button>
    <br />
    <button @click="getgodownEntry()">godownEntry</button>
    <br />
    <button @click="getmaterialsReturnedNote()">materialsReturnedNote</button>
    <br />
    <button @click="getpLMaterialRequistion()">pLMaterialRequistion</button>
    <br />
    <button @click="getpLMaterialRequistionDetail()">pLMaterialRequistionDetail</button>
    <br />
    <button @click="getmRMaterialRequistion()">mRMaterialRequistion</button>
    <br />
    <button @click="getttPutaway()">ttPutaway</button>
    <br />
    <button @click="getttSoldOut()">ttSoldOut</button>
    <br />
    <button @click="getmTRPutaway()">mTRPutaway</button>
    <br />
    <button @click="getmTRSoldOut()">mTRSoldOut</button>
    <br />
    <button @click="getprint()">print</button>
    <br />
    <button @click="getfacilityException()">facilityException</button>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      msg: "我是一个首页组件msg",
      flag: true,
      list: []
    };
  },
  methods: {
    beCalledScan(str) {
      this.msg = str;
      let instance = Toast(str);
      setTimeout(() => {
        instance.close();
      }, 500);
    },
    geter() {
      console.log(this.utils.flage_callScan+"?????????????????????")
      // this.getflage_callScan()
      if(this.utils.flage_callScan){
        this.utils.flage_callScan=false
      }else{
         this.utils.flage_callScan=true
      }
      let instance = Toast(this.utils.flage_callScan+"");
      setTimeout(() => {
        instance.close();
      }, 500);
      // $App.callScan();
      // this.$router.push({ path: "ming" });
    },
    getming() {
      this.$router.push({ path: "ming" });
    },
    getReceipt() {
      this.$router.push({ path: "Receipt" });
    },
    getmaterialHistoryRecord() {
      this.$router.push({ path: "materialHistoryRecord" });
    },
    gettasklist() {
      this.$router.push({ path: "tasklist" });
    },
    gettaskQuery() {
      this.$router.push({ path: "taskQuery" });
    },
    getStart() {
      this.$router.push({ path: "start" });
    },
    getrequitWork() {
      this.$router.push({ path: "requitWork" });
    },
    getsuspend() {
      this.$router.push({ path: "suspend" });
    },
    getreturnwork() {
      this.$router.push({ path: "returnwork" });
    },
    getpieceBinding() {
      this.$router.push({ path: "pieceBinding" });
    },
    getpieceunBinding() {
      this.$router.push({ path: "pieceunBinding" });
    },
    getorderquery() {
      this.$router.push({ path: "orderquery" });
    },
    getPersonalinquiry() {
      this.$router.push({ path: "Personalinquiry" });
    },
    getPOstorage() {
      this.$router.push({ path: "postorage" });
    },
    getgodownEntry() {
      this.$router.push({ path: "godownEntry" });
    },
    getmaterialsReturnedNote() {
      this.$router.push({ path: "materialsReturnedNote" });
    },
    getpLMaterialRequistion() {
      this.$router.push({ path: "pLMaterialRequistion" });
    },
    getpLMaterialRequistionDetail() {
      this.$router.push({ path: "pLMaterialRequistionDetail" });
    },
    getmRMaterialRequistion() {
      this.$router.push({ path: "mRMaterialRequistion" });
    },
    getttPutaway() {
      this.$router.push({ path: "ttPutaway" });
    },
    getttSoldOut() {
      this.$router.push({ path: "ttSoldOut" });
    },
    getmTRPutaway() {
      this.$router.push({ path: "mTRPutaway" });
    },
    getmTRSoldOut() {
      this.$router.push({ path: "mTRSoldOut" });
    },
    getprint() {
      this.$router.push({ path: "print" });
    },
    getfacilityException() {
      this.$router.push({ path: "facilityException" });
    },

    getData() {
      //请求数据

      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.$http.get(api).then(
        response => {
          console.log(response);

          //注意this指向

          this.list = response.body.result;
          console.log(this.list[0].title);
        },
        function(err) {
          console.log(err);
        }
      );
    }
  },
  beforeCreate() {
    //  let instance = Toast("实例刚刚被创建1");
    // setTimeout(() => {
    //   instance.close();
    // }, 500);
    console.log("实例刚刚被创建1");
  },
  created() {
    // let instance = Toast("实例已经创建完成2");
    // setTimeout(() => {
    //   instance.close();
    // }, 500);
    console.log("实例已经创建完成2");
  },
  beforeMount() {
    // let instance = Toast("模板编译之前3");
    // setTimeout(() => {
    //   instance.close();
    // }, 500);
    console.log("模板编译之前3");
  },
  mounted() {
    window.beCalledScan = this.beCalledScan
    // let instance = Toast("模板编译完成4");
    // setTimeout(() => {
      // instance.close();
    // }, 1000);
    /*请求数据，操作dom , 放在这个里面  mounted*/
    console.log("模板编译完成4");
  },
  beforeUpdate() {
    // let instance = Toast("数据更新之前");
    // setTimeout(() => {
    //   instance.close();
    // }, 500);
    console.log("数据更新之前");
  },
  updated() {
    // let instance = Toast("数据更新完毕");
    // setTimeout(() => {
    //   instance.close();
    // }, 500);
    console.log("数据更新完毕");
  },
  beforeDestroy() {
    // let instance = Toast("实例销毁之前");
    // setTimeout(() => {
      // instance.close();
    // }, 500);
    /*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数*/
    console.log("实例销毁之前");
  },
  destroyed() {
    console.log("实例销毁完成");
  }
};
</script>

<style>
</style>
