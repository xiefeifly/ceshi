<template>
  <div id="ling_x">
    <h3 style=" text-align: center;">集料明细</h3>
    <div id="ling_x_t_g_scroll">
      <div id="ling_x_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="ling_x_t_item_l">
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">零件号：{{item.shuzi}}</div>
             <div id="ling_x_item">零件描述：{{item.shuzi}}</div>
          </div>
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">需求数量：{{item.shuzi}}</div>
             <div id="ling_x_item">交付数量：{{item.shuzi}}</div>
          </div>
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">批次号：{{item.shuzi}}</div>
             <div id="ling_x_item">序列号：{{item.shuzi}}</div>
          </div>
          <div id="ling_x_t_item">库位：{{item.shuzi}}</div>
        </div>
      </div>
    </div>

    <div id="ling_x_but">
      <div id="ling_x_but_l">
        <mt-button type="primary" @click="gotovue()">下架</mt-button>
      </div>
       <div id="ling_x_but_l">
        <mt-button type="primary" @click="gotovue()">下架打印</mt-button>
      </div>
      <div id="ling_x_but_l">
        <mt-button type="primary" @click="get_yes()">提交</mt-button>
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
      ling_xcked: true,
      list: ["zi", "123"],
      list1: [
        {
          ling_xcked: false,
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

    set_ling_xckbox_item(ling_xcked, index) {
      console.log(ling_xcked);
      console.log(index);
      if (ling_xcked) {
        this.list1[index].ling_xcked = false;
      } else {
        this.list1[index].ling_xcked = true;
      }
    },
    set_ling_xckbox(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].ling_xcked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].ling_xcked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].ling_xcked + "");
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
#ling_x {
  padding: 10px;
}
#ling_x_t_g {
  width: 100%;
  height: 110px;
}
#ling_x_t_ling_xckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#ling_x_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#ling_x_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#ling_x_t_item_l {
  width: 100%;
  height: 100%;
}
#ling_x_t_item_t {
 display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#ling_x_item {
   display: flex;
  align-items: center;
  width: 50%;
}
#ling_x_t_item {
  height: 20px;
}
#ling_x_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_x_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#ling_x_er_input {
  margin-top: 10px;
  width: 80%;
  height: 40px;
}
#ling_x_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#ling_x_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_x_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
