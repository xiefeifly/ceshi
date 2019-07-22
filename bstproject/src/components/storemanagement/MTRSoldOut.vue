<template>
  <div id="MTR">
    <h3 style=" text-align: center;">MTR移库单下架</h3>

    <div>MTR移库单号：{{mtr_storage}}</div>
    <div id="MTR_t_g_scroll">
      <div id="MTR_t_list" v-for="(item) in mtr_list" v-bind:key="item.id">
        <div id="MTR_t_item_l">
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">TT号：{{item.tt_number}}</div>
            <div id="MTR_s_item">MTR号：{{item.mtr_number}}</div>
          </div>
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">From：{{item.mtr_from}}</div>
            <div id="MTR_s_item">To：{{item.mtr_to}}</div>
          </div>
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">种类：{{item.type}}</div>
            <div id="MTR_s_item">项目号：{{item.project_number}}</div>
          </div>
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">序列号：{{item.serial_number}}</div>
            <div id="MTR_s_item">批次号：{{item.Batch_number}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="MTR_er">
      <div id="MTR_er_but_l">
        <mt-button type="primary" @click="get_er()">扫描</mt-button>
      </div>
      <div id="MTR_er_input">
        <input style="width:100% ;height:100%;" type="text" v-model="add_number" />
      </div>
      <div id="MTR_but_j">
        <mt-button type="primary" @click="add()">添加</mt-button>
      </div>
    </div>
    <div id="MTR_but">
      <div id="MTR_but_l">
        <mt-button type="primary" @click="Undercarriage()">下架</mt-button>
      </div>
      <div id="MTR_but_l">
        <mt-button type="primary" @click="getprint()">下架打印标签</mt-button>
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
      add_number:"",
      mtr_storage: "1234567",
      mtr_list: "",
      list: [
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }
      ]
    };
  },
  methods: {
    get_er() {
      $App.callScan();
    },
    add() {
      this.mtr_list = this.list;
    },
    Undercarriage() {

    },
    getprint() {
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
  }
};
</script>

<style>
#MTR {
  margin-left: 20px;
  margin-right: 20px;
}
#MTR_t_g {
  width: 100%;
  height: 110px;
}
#MTR_t_MTRckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#MTR_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#MTR_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
}
#MTR_t_item_l {
  width: 100%;
  height: 100%;
}
#MTR_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#MTR_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#MTR_t_item {
  height: 20px;
}
#MTR_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#MTR_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#MTR_but_j {
  margin-top: 10px;
  margin-left: 20px;
  width: 20%;
  height: 40px;
}
#MTR_er_input {
  margin-top: 10px;
  width: 60%;
  height: 40px;
}
#MTR_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#MTR_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#MTR_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
