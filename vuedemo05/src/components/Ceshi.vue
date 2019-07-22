<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <h3 style="width:100%; text-align: center;">收料确认界面</h3>
    <div id="t_test">
      <div id="t_test_item1">领料单号：{{dh}}</div>
      <div id="t_test_item2">物料编码：{{bm}}</div>
    </div>
    <div id="t_test">
      <div id="t_test_item1">车间订单号：{{cdh}}</div>
      <div id="t_test_item2">合同：{{ht}}</div>
    </div>
    <div id="t_test">
      <div id="t_test_item1">列号：{{lh}}</div>
      <div id="t_test_item2">车号：{{ch}}</div>
    </div>
    <!-- <ul>
      <li>领料单号：{{dh}}</li>
      <li>物料编码：{{bm}}</li>
      <li>列号：{{lh}}</li>
    </ul>
    <ul>
      <li>车间订单号：{{cdh}}</li>
      <li>合同：{{ht}}</li>
      <li>车号：{{ch}}</li>
    </ul>-->
    <div id="titler" style=" border:1px solid #000; border-radius: 8px;">
      <div id="titlerch">
        <input
          name="Fruit"
          type="checkbox"
          checked="true"
          v-model="checked"
          @click="set_checkbox(checked)"
        />
      </div>
      <div id="titler1">零件号</div>
      <div id="titlermiaoshu">描述</div>
      <div id="titler1">数量</div>
      <div id="titler1"></div>
    </div>

    <div class="scroll_bg">
      <div id="titler" v-for="(item,index) in list  " v-bind:key="item.id">
        <div id="titlerch">
          <input
            name="Fruit"
            type="checkbox"
            value="index"
            v-model="item.checked"
            @click="set_checkbox_item(item.checked,index)"
          />
        </div>
        <div id="titler1">{{item.shuzi}}</div>
        <div id="titlermiaoshu">{{item.miaoshu}}</div>
        <div id="titler1">
          <input style="width:100% ;height:100%;" type="number" v-model="item.shuliang" />
        </div>
        <div id="titler1">
          <mt-button size="small" @click="getmodel(index)">更多</mt-button>
        </div>
        <!-- <p style="display: inline-block;margin-left: 20px">{{item.shuzi}}</p>
        <p style="display: inline-block;margin-left: 20px">{{item.miaoshu}}</p>
        <input style="width:40px ;height: 20px;margin-left: 20px" />
        <mt-button style="margin-left: 20px;" type="small">更多</mt-button>-->
      </div>

      <!-- <ul>
        <li v-for="item in list1">
          <p style="display: inline-block;margin-left: 20px">{{item.shuzi}}</p>
          <p style="display: inline-block;margin-left: 20px">{{item.miaoshu}}</p>
          <input
            style="width:40px ;height: 20px;margin-left: 20px"
            type="text"
            v-model="item.shuliang"
          />
          <mt-button style="margin-left: 20px;" type="small" @click="getmodel(item)">更多</mt-button>
        </li>
      </ul>-->
    </div>
    <div style="margin-top: 10px;" @click="goto_vue()">
      仓库人员
      <input style="width:300px ;margin-left: 20px;height: 30px;" />
    </div>
    <div style="margin-top: 10px;">
      生产人员
      <input style="width:300px ;margin-left: 20px;height: 30px;" />
    </div>
    <div style="margin-top: 10px;">
      <input style="width:200px ;height: 30px;" />

      <!-- <mt-button  type="primary" >添加</mt-button> -->
      <!-- <mt-button  type="primary" @click="get_yes()">收料确认</mt-button> -->

      <mt-button type="primary" style="margin-left: 20px" @click="gotovue()">添加</mt-button>
      <mt-button type="primary" style="margin-left: 20px" @click="get_yes()">收料确认</mt-button>
    </div>

    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1">
      <!-- :style="{top: buttonBotton + 10 + 'px'}" -->
      <h1>库位 :{{kuwei}}</h1>
      <p>批次号:{{pici}}</p>
      <p>序列号:{{xlh}}</p>
      <p>条件代码:{{tjdm}}</p>
      <p>计量单位:{{jldw}}</p>
      <p>状态:{{zt}}</p>
    </mt-popup>
    <!-- 
    <router-view></router-view>-->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { Toast } from "mint-ui";

// import { Popup } from 'mint-ui';

// Vue.component(Popup.name, Popup);
export default {
  name: "app",
  data() {
    return {
      dh: "",
      bm: "",
      lh: "",
      cdh: "",
      ht: "",
      ch: "",
      kuwei: "",
      pici: "",
      xlh: "",
      tjdm: "",
      jldw: "",
      zt: "",
      popupVisible1: false,
      checked: true,
      list: [],
      str: {
        dh: "1234567",
        bm: "SV499308CM",
        lh: "12",
        cdh: "12341234567",
        ht: "1234567",
        ch: "123",

        list1: [
          {
            checked: false,
            shuzi: "12345",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p00",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "123453",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p01",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "135455",
            miaoshu: "防护板",
            shuliang: "12",
            kuwei: "p02",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p03",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p014",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p015",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p016",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p017",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p018",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p019",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p010",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0111",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0112",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0113",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "128678",
            miaoshu: "板组成",
            shuliang: "12",
            kuwei: "p0114",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "125656",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p0115",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          }
        ]
      }
    };
  },
  methods: {
    gotovue() {
      // this.$router.push({path:'send'})
      //  var obj=this.list1.parseJSON();
      //  console.log(obj);
      var obj1 = JSON.stringify(this.str);
      console.log(obj1);
      var obj = JSON.parse(obj1);
      console.log(obj);

      this.dh = obj.dh;
      this.bm = obj.bm;
      this.lh = obj.lh;
      this.time = obj.time;
      this.cdh = obj.children;
      this.ht = obj.ht;
      this.ch = obj.ch;

      this.list = obj.list1;
      var length = this.list.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list[i].checked + "adsasdasdad");
        console.log(this.list[i].shuliang + "asdasdasddas");
      }
    },
    goto_vue() {
      this.$router.push({ path: "helloworld" });
    },
    getmodel(item) {
      console.log(this.list[item].kuwei);
      this.kuwei = this.list[item].kuwei;
      this.pici = this.list[item].pici;
      this.xlh = this.list[item].xlh;
      this.tjdm = this.list[item].tjdm;
      this.jldw = this.list[item].jldw;
      this.zt = this.list[item].zt;
      this.popupVisible1 = true;
    },

    set_checkbox_item(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.list[index].checked = false;
      } else {
        this.list[index].checked = true;
      }
    },
    set_checkbox(val) {
      var length = this.list.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list[i].checked = true;
        }
      }
    },
    get_yes() {
      var length = this.list.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list[i].checked + "");
        console.log(this.list[i].shuliang + "");
      }
      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 5000
      // });
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }

    //  loadMore(){
    //    console.log('111111111111111')
    //  }
  }
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
  //   components: {
  //     HelloWorld
  //   }
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
#t_test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
}
#t_test_item1 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#t_test_item2 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#t_test_item3 {
  display: flex;
  align-items: center;
  width: 20%;
  height: 40px;
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
  flex-direction: row-reverse;
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
