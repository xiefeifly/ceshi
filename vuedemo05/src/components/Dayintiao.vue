<template>
  <div id="dyt_s">
    <h3 style=" text-align: center;">打印条码</h3>
    <div id="dyt_s_t">
      <div id="dyt_s_t_z">单据类型：</div>
      <div id="dyt_s_t_input">
        <input style="width:100% " type="number" v-model="tianjia" />
      </div>
    </div>

    <div id="dyt_s_t">
      <div id="dyt_s_t_z">列号：</div>
      <div id="dyt_s_t_i">
        <input style="width:90% " type="number" v-model="tianjia" />
      </div>
      <div id="dyt_s_t_z1">车号：</div>
      <div id="dyt_s_t_i">
        <input style="width:100% " type="number" v-model="tianjia" />
      </div>
    </div>
    <div id="dyt_s_t">
      <div id="dyt_s_t_z">单号：</div>
      <div id="dyt_s_t_i">
        <input style="width:90% " type="number" v-model="tianjia" />
      </div>
      <div id="dyt_s_t_z1">件号：</div>
      <div id="dyt_s_t_i">
        <input style="width:100% " type="number" v-model="tianjia" />
      </div>
    </div>
    <div id="dyt_s_t_g_scroll">
      <div id="dyt_s_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="dyt_s_t_item_l">
          <div id="dyt_s_t_item_t">
            <div id="dyt_s_item">零件号号：{{item.shuzi}}</div>
            <div id="dyt_s_item">零件描述：{{item.shuzi}}</div>
          </div>
          <div id="dyt_s_t_item_t">
            <div id="dyt_s_item">数量：{{item.shuzi}}</div>
            <div id="dyt_s_item">库位：{{item.shuzi}}</div>
          </div>
          <div id="dyt_s_t_item_t">交货日期{{}}</div>
        </div>
      </div>
    </div>

    <div id="dyt_s_er">
      <mt-button type="primary" @click="get_yes()">打印</mt-button>
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
      dyt_scked: true,
      list: ["zi", "123"],
      list1: [
        {
          dyt_scked: false,
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
        console.log(this.list1[i].dyt_scked + "");
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
#dyt_s {
  padding: 10px;
}
#dyt_s_t {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
}
#dyt_s_t_input{
 width: 85%;
}
#dyt_s_t_z {
  width: 20%;
}
#dyt_s_t_z1 {
  width: 15%;
}
#dyt_s_t_i {
  width: 35%;
}
#dyt_s_t_g {
  width: 100%;
  height: 110px;
}
#dyt_s_t_dyt_sckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#dyt_s_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#dyt_s_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 80px;
}
#dyt_s_t_item_l {
  width: 100%;
  height: 100%;
}
#dyt_s_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#dyt_s_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#dyt_s_t_item {
  height: 20px;
}
#dyt_s_er {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
