<template>
  <div id="shou">
    <h3 style=" text-align: center;">MT领料单</h3>
    <div id="shou_t_g_scroll">
      <div id="shou_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="shou_t_item_l">
          <div id="shou_t_item_t">
             <div id="shou_item">库位：{{item.shuzi}}</div>
             <div id="shou_item">工区：{{item.shuzi}}</div>
          </div>
          <div id="shou_t_item_t">
             <div id="shou_item">MR号：{{item.shuzi}}</div>
             <div id="shou_item">种类：{{item.shuzi}}</div>
          </div>
          <div id="shou_t_item_t">
             <div id="shou_item">项目号：{{item.shuzi}}</div>
             <div id="shou_item">需求号：{{item.shuzi}}</div>
          </div>
          <div id="shou_t_item">创建时间：{{item.shuzi}}</div>
        </div>
      </div>
    </div>

    <div id="shou_but">
        <mt-button type="primary" @click="gotovue()">确定</mt-button>
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
      shoucked: true,
      list: ["zi", "123"],
      list1: [
        {
          shoucked: false,
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

    set_shouckbox_item(shoucked, index) {
      console.log(shoucked);
      console.log(index);
      if (shoucked) {
        this.list1[index].shoucked = false;
      } else {
        this.list1[index].shoucked = true;
      }
    },
    set_shouckbox(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].shoucked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].shoucked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].shoucked + "");
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
#shou {
  padding: 10px;
}
#shou_t_g {
  width: 100%;
  height: 110px;
}
#shou_t_shouckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#shou_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
}
#shou_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#shou_t_item_l {
  width: 100%;
  height: 100%;
}
#shou_t_item_t {
 display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#shou_item {
   display: flex;
  align-items: center;
  width: 50%;
}
#shou_t_item {
  height: 20px;
}
#shou_but {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
