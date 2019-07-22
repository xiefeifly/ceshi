<template>
  <div id="tui">
    <h3 style=" text-align: center;">退料单</h3>
    <div id="tui_t_g">
      <div>退料单号：{{gongpiao_z}}</div>
      <div>订单号：{{gongpiao_z}}</div>
      <div>项目号：{{gongpiao_z}}</div>
      <div>提交时间：{{gongpiao_z}}</div>
    </div>

    <div id="tui_t_g_scroll">
      <div id="tui_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="tui_t_item_l">
          <div id="tui_t_item">零件号：{{item.shuzi}}</div>
          <div id="tui_t_item">零件描述：{{item.shuzi}}</div>
          <div id="tui_t_item">序列号：{{item.shuzi}}</div>
          <div id="tui_t_item">批次号：{{item.shuzi}}</div>
          <div id="tui_t_item">条码代号：{{item.shuzi}}</div>
          <div id="tui_t_item">处置带号：{{item.shuzi}}</div>
          <div id="tui_t_item">
            库位：
            <input style="width:50px;height:100%;" type="number" v-model="tianjia" />
          </div>
          <div id="tui_t_item">
            数量：
            <input style="width:50px;height:100%;" type="number" v-model="tianjia" />
          </div>
        </div>
      </div>
    </div>

    <div id="tui_er">
      <div id="tui_er_but_l">
        <mt-button type="primary" @click="get_yes()">查询</mt-button>
      </div>
      <div id="tui_er_input">
        <input style="width:100% ;height:100%;" type="number" v-model="tianjia" />
      </div>
    </div>
    <div id="tui_but">
      <div id="tui_but_l">
        <mt-button type="primary" @click="gotovue()">添加</mt-button>
      </div>
      <div id="tui_but_l">
        <mt-button type="primary" @click="get_yes()">确认开工</mt-button>
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
      tuicked: true,
      list: ["zi", "123"],
      list1: [
        {
          tuicked: false,
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

    set_tuickbox_item(tuicked, index) {
      console.log(tuicked);
      console.log(index);
      if (tuicked) {
        this.list1[index].tuicked = false;
      } else {
        this.list1[index].tuicked = true;
      }
    },
    set_tuickbox(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].tuicked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].tuicked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].tuicked + "");
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
#tui {
  padding: 10px;
}
#tui_t_g {
  width: 100%;
  height: 110px;
}
#tui_t_tuickbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#tui_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#tui_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 170px;
}
#tui_t_item_l {
  width: 100%;
  height: 100%;
}
#tui_t_item {
  height: 20px;
}
#tui_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#tui_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#tui_er_input {
  margin-top: 10px;
  width: 80%;
  height: 40px;
}
#tui_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#tui_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#tui_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
