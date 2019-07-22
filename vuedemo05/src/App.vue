<template>
  <div id="app">
    
    <router-view></router-view> 
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Toast } from "mint-ui";

// import { Popup } from 'mint-ui';

// Vue.component(Popup.name, Popup);
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  methods: {
    gotovue(){
      this.$router.push({path:'send'})

    },
    goto_vue(){
      this.$router.push({path:'helloworld'})

    },
    getmodel(item) {
     
    },

    set_checkbox_item(checked, index) {
     
      
    }

    //  loadMore(){
    //    console.log('111111111111111')
    //  }
  },
  // computed: {
  //   top() {
  //     return -this.activeIndex * 2.5 + "rem";
  //   }
  // },
  // mounted() {
  //   let _this = this;
  //   setInterval(function() {
  //     if (_this.activeIndex < _this.invit_info.text_roll.length - 1) {
  //       _this.activeIndex += 1;
  //     } else {
  //       _this.activeIndex = 0;
  //     }
  //   }, 1000);
  // },
  components: {
    HelloWorld
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#titler {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
}
#z_body {
  width: 100%;
  height: 400px;
}
#titler1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
}
#titlermiaoshu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
}
#titlerch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
#t_test{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
}
#t_test_item1{
display: flex;
   align-items: center;
  width: 50%;
  height:40px; 
}
#t_test_item2{
display: flex;
   align-items: center;
  width: 50%;
  height:40px; 
}
#t_test_item3{
display: flex;
   align-items: center;
  width: 20%;
  height:40px; 
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.scroll_bg {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 350px;
}
.ceshi {
  display: flex;
  /* justify-content: center;
  text-align: center;
  align-items: center; */
    flex-direction:row-reverse;
  width: 25rem;
  height: 250px;
  background: #00f;
}
.ceshi1 {
  border: 5px solid #e6a43f;
    margin-right: 20px;

  display: flex;
  /* justify-content: center; */

  /* align-items: center; */
  width: 150px;
  height: 150px;
  background: #f0f;
}

/* .mint-popup-1:before {
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #fff;
    content: "";
    position: absolute;
    top: -20px;
    right: 50px;
} */
.mint-popup-1 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
.mint-popup-1 h1 {
  font-size: 20px;
  color: #26a2ff;
}
.mint-popup-1 p {
  margin-bottom: 10px;
}
.ceshi2 {

  width: 100px;
  height: 100px;
  background: #0ff;
}
</style>
