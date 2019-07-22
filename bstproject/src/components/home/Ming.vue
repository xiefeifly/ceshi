<template>
  <div id="ming">


<div id="ceshi">
<div id="ceshi1">
<div id="ceshi2">
  <div id="ceshi_3" >
  dsa
  </div>

<div id="ceshi3">

</div>
</div>
</div>
</div>







    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>-->
    <!-- <button @click="getData()">请求数据</button> -->

    <!-- <ul>
            <li v-for="item in list">
            
                {{item.title}}
            </li>
    </ul>-->
    {{token}}wertyui==={{msg}}===={{ddd}}
    <hr />
    <button @click="getddd()">dainyaydyan</button>
    <hr />
    <button @click="getData()">data</button>
    <hr />
    <button @click="gety()">dainyaydyan</button>
  </div>
</template>

<script>
// import Global from '@/api/global_variable'
export default {
  name: "app",
  data() {
    return {
      token: this.GLOBAL.token,
      ddd: this.GLOBAL.baseURL,
      msg: "我是一个首页组件msg",
      // flag_callScan:this.utils.flag_callScan,
      flag: true,
      list: []
    };
  },
  methods: {
    getData() {
      //请求数据

      var api =
      "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.Request(api);
        // this.global_funs('wwwwwwwwwwww');
    },
     gety() {
      //请求数据
        this.global_funy();
    },
    getddd() {
      this.global_func('packageFuns');
    }
  },
  beforeCreate() {
    console.log("实例刚刚被创建1");
  },
  created() {
    console.log("实例已经创建完成2");
  },
  beforeMount() {
    console.log("模板编译之前3");
  },
  mounted() {
    /*请求数据，操作dom , 放在这个里面  mounted*/
    console.log("模板编译完成4");
  },
  beforeUpdate() {
    console.log("数据更新之前");
  },
  updated() {
    console.log("数据更新完毕");
  },
  beforeDestroy() {
    /*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数*/
    console.log("实例销毁之前");
  },
  destroyed() {
    console.log("实例销毁完成");
  }
};
</script>

<style>
/* #app { */
/* font-family: "Avenir", Helvetica, Arial, sans-serif; */
/* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
/* color: #2c3e50; */
/* margin-top: 60px; */
/* } */

#ceshi{
  width: 200px;
  height: 200px;
  background: #ff0;
}
#ceshi1{
  /* margin: 0 auto; */
  width: 90%;
  height: 90%;
  background: #f00;
}
#ceshi2{
  
   margin: 0  auto;
  width: 50%;
  height: 50%;
  background: #ff0;
}#ceshi_3{
  text-align: center;
   margin: 0 auto;
  width: 50%;
  height: 50%;
  background: #f00;
}
#ceshi3{
   margin: 0 auto;
  width: 20%;
  height: 20%;
  background: #0f0;
}


</style>
