<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="get1()">收料确认界面</button>
    <button @click="get2()">物料交接历史记录查询</button>
     <button @click="get3()">任务</button>
      <button @click="get4()">绑定</button>
       <button @click="get5()">解绑</button>
        <button @click="get6()">2345678765432</button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    get1() {
        let instance = Toast("4567890");
        instance.close();
      // setTimeout(() => {
      //   instance.close();
      // }, 2000);
      this.$router.push({path:'ceshi'})

      try {

        // 调用Android
//  window.android.showToast();
        // window.console.log(msgss);

 } catch (e) {
  // window.console.log('出现错误, 如果在非android环境下访问, 出现该警告是正常的.')
}
      //  let instance = Toast(msgss);
      // setTimeout(() => {
      //   instance.close();
      // }, 2000);
      window.android.callScan();


      
    },
    get2() {
      this.$router.push({ path: "wuliaojiaojiechaxun" });
      // window.android.onFinishActivity();


    },get3() {
     this.$router.push({ path: "renwu" });
     },get4() {
     this.$router.push({ path: "wuliao_bd" });
     },get5() {
     this.$router.push({ path: "wuliao_un_bd" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
