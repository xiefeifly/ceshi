<template>
  <div id="fu">
    <h3 style=" text-align: center;">复工</h3>
    <div id="fu_t_g">
      <div>工票总数：{{gongpiao_z}}</div>
      <div id="fu_t_checkbox">
        <input
          name="Fruit"
          type="checkbox"
          checked="true"
          v-model="checked"
          @click="set_checkbox(checked)"
        />
      </div>
    </div>

    <div id="fu_t_g_scroll">
      <div id="fu_t_list" v-for="(item,index) in list" v-bind:key="item.id">
        <div id="fu_t_item_l">
          <div id="fu_t_item">工票号：{{item.shuzi}}</div>
          <div id="fu_t_item">件号：{{item.shuzi}}</div>
          <div id="fu_t_item">车号：{{item.shuzi}}</div>
          <div id="fu_t_item">列号：{{item.shuzi}}</div>
          <div id="fu_t_item">数量：{{item.shuzi}}</div>
          <div id="fu_t_item">齐套性：{{item.shuzi}}</div>
          <div id="fu_t_item">工艺时长：{{item.shuzi}}</div>
        </div>
        <div id="fu_t_item_r">
          <div>
            <input
              name="Fruit"
              type="checkbox"
              value="index"
              v-model="item.checked"
              @click="set_checkbox_item(item.checked,index)"
            />
          </div>
         
        </div>
      </div>
    </div>
    <div id="fu_t_r">
      <div>人员总数：{{renyuan_z}}</div>
      <div id="fu_t_checkbox">
        <input
          name="全选"
          type="checkbox"
          checked="true"
          v-model="checked"
          @click="set_checkbox(checked)"
        />
      </div>
    </div>
    <div id="fu_t_r_scroll">
      <div id="fu_r_list" v-for="(item,index) in list" v-bind:key="item.id">
        <div id="fu_t_item">姓名：{{item.shuzi}}</div>
        <div id="fu_t_item">卡号：{{item.shuzi}}</div>
        <div id="fu_t_checkbox">
          <input
            name="Fruit"
            type="checkbox"
            value="index"
            v-model="item.checked"
            @click="set_checkbox_item(item.checked,index)"
          />
        </div>
      </div>
    </div>
    <div id="fu_input">
      <input style="width:100% ;height:100%;" type="number" v-model="tianjia" />
    </div>

    <div id="fu_but">
      <div id="fu_but_l">
        <mt-button type="primary" @click="gotovue()">添加</mt-button>
      </div>
      <div id="fu_but_l">
        <mt-button type="primary" @click="get_yes()">确认复工</mt-button>
      </div>
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
      checked: true,
      list: ["zi", "123"],
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

    set_checkbox_item(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.list1[index].checked = false;
      } else {
        this.list1[index].checked = true;
      }
    },
    set_checkbox(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].checked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].checked + "");
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
#fu {
  padding: 10px;
}
#fu_t_g {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#fu_t_checkbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#fu_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 250px;
}
#fu_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#fu_t_item_l {
  width: 70%;
  height: 100%;
}
#fu_t_item_r {
  width: 30%;
  height: 100%;
}
#fu_t_item {
  height: 20px;
}
#fu_t_r {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#fu_t_r_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 100px;
}
#fu_r_list {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#fu_r_item {
  width: 100%;
  height: 20px;
}
#fu_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#fu_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#fu_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
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
</style>
