<template>
  <div id="TT">
<h3 style=" text-align: center;">TT移库单下架</h3>
    
      <div>TT移库单号：{{gongpiao_z}}</div>
    <div id="TT_t_g_scroll">
      <div id="TT_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="TT_t_item_l">
          <div id="TT_t_item_t">
            <div id="TT_item">TT号：{{item.shuzi}}</div>
            <div id="TT_item">种类：{{item.shuzi}}</div>
          </div>
          <div id="TT_t_item_t">
            <div id="TT_item">From：{{item.shuzi}}</div>
            <div id="TT_item">To：{{item.shuzi}}</div>
          </div>
          <div id="TT_t_item_t">
            <div id="TT_item">项目号：{{item.shuzi}}</div>
            <div id="TT_item">零件号：{{item.shuzi}}</div>
          </div>
          <div id="TT_t_item_t">
            <div id="TT_item">序列号：{{item.shuzi}}</div>
            <div id="TT_item">批次号：{{item.shuzi}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="TT_er">
      <div id="TT_er_but_l">
        <mt-button type="primary" @click="get_yes()">查询</mt-button>
      </div>
      <div id="TT_er_input">
        <input style="width:100% ;height:100%;" type="number" v-model="tianjia" />
      </div>
      <div id="TT_but_j">
        <mt-button type="primary" @click="get_yes()">添加</mt-button>
      </div>
    </div>
    <div id="TT_but">
      <div id="TT_but_l">
        <mt-button type="primary" @click="gotovue()">下架</mt-button>
      </div>
      <div id="TT_but_l">
        <mt-button type="primary" @click="get_yes()">下架打印标签</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      dh: "1234567",
      bm: "SV499308CM",
      lh: "12",
      cdh: "12341234567",
      ht: "1234567",
      ch: "123",
      kuwei: "",
      pici: "",
      xlh: "",
      tjdm: "",
      jldw: "",
      zt: "",
      popupVisible1: false,
      TTcked: true,
      list: ["zi", "123"],
      list1: [
        {
          TTcked: false,
          shuzi: "12345",
          miaoshu: "防护板组成",
          shuliang: "12",
          kuwei: "p00",
          pici: "2190",
          xlh: "67890",
          tjdm: "34567",
          jldw: "kg",
          zt: "有"
        }
      ]
    };
  },
  methods: {
    gotovue() {
      this.$router.push({ path: "send" });
    },

    getmodel(item) {
      console.log("111111111111111" + item);
      console.log(this.list1[item].kuwei);
      this.kuwei = this.list1[item].kuwei;
      this.pici = this.list1[item].pici;
      this.xlh = this.list1[item].xlh;
      this.tjdm = this.list1[item].tjdm;
      this.jldw = this.list1[item].jldw;
      this.zt = this.list1[item].zt;
      this.popupVisible1 = true;
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].TTcked + "");
        console.log(this.list1[i].shuliang + "");
      }
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#TT {
  padding: 10px;
}
#TT_t_g {
  width: 100%;
  height: 110px;
}
#TT_t_TTckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#TT_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#TT_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#TT_t_item_l {
  width: 100%;
  height: 100%;
}
#TT_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#TT_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#TT_t_item {
  height: 20px;
}
#TT_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#TT_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#TT_but_j {
  margin-top: 10px;
  margin-left: 20px;
  width: 20%;
  height: 40px;
}
#TT_er_input {
  margin-top: 10px;
  width: 60%;
  height: 40px;
}
#TT_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#TT_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#TT_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
