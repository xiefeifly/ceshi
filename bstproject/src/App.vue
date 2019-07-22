<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>-->
    <!-- <button @click="getData()">请求数据</button> -->

    <!-- <ul>
            <li v-for="item in list">
            
                {{item.title}}
            </li>
    </ul>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      msg: "我是一个首页组件msg",
      flag: true,
      list: []
    };
  },
  methods: {
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
          // console.log(err);
        }
      );
    }
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
body{
  top: 0;
	margin: 0; 
	padding: 0;
	border: 0;
}
</style>
