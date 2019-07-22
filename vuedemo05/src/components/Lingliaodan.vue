<template>
  <div id="ling">
    <h3 style=" text-align: center;">PL领料单</h3>

    <div id="ling_t_g_scroll">
      <div id="ling_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="ling_t_item_l">
          <div id="ling_t_item_t">
             <div id="ling_item">领料单号：{{item.shuzi}}</div>
             <div id="ling_item">订单号：{{item.shuzi}}</div>
          </div>
          <div id="ling_t_item_t">
             <div id="ling_item">合同号：{{item.shuzi}}</div>
             <div id="ling_item">交付种类：{{item.shuzi}}</div>
          </div>
          <div id="ling_t_item_t">
             <div id="ling_item">车号：{{item.shuzi}}</div>
             <div id="ling_item">列号：{{item.shuzi}}</div>
          </div>
          <div id="ling_t_item">上级件名称：{{item.shuzi}}</div>
          <div id="ling_t_item_t">
             <div id="ling_item">工区：{{item.shuzi}}</div>
             <div id="ling_item">交付日期：{{item.shuzi}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="ling_er">
      <div id="ling_er_but_l">
        <mt-button type="primary" @click="get_yes()">查询</mt-button>
      </div>
      <div id="ling_er_input">
        <input style="width:100% ;height:100%;" type="number" v-model="tianjia" />
      </div>
    </div>
    <div id="ling_but">
      <div id="ling_but_l">
        <mt-button type="primary" @click="gotovue()">添加</mt-button>
      </div>
      <div id="ling_but_l">
        <mt-button type="primary" @click="get_yes()">确认</mt-button>
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
      lingcked: true,
      list: ["zi", "123"],
      list1: [
        {
          lingcked: false,
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

    set_lingckbox_item(lingcked, index) {
      console.log(lingcked);
      console.log(index);
      if (lingcked) {
        this.list1[index].lingcked = false;
      } else {
        this.list1[index].lingcked = true;
      }
    },
    set_lingckbox(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].lingcked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].lingcked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].lingcked + "");
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
#ling {
  padding: 10px;
}
#ling_t_g {
  width: 100%;
  height: 110px;
}
#ling_t_lingckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#ling_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#ling_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#ling_t_item_l {
  width: 100%;
  height: 100%;
}
#ling_t_item_t {
 display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#ling_item {
   display: flex;
  align-items: center;
  width: 50%;
}
#ling_t_item {
  height: 20px;
}
#ling_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#ling_er_input {
  margin-top: 10px;
  width: 80%;
  height: 40px;
}
#ling_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#ling_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
