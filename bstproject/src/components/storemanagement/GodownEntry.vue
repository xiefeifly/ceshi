<template>
  <div id="sowo">
    <h3 style=" text-align: center;">车间订单入库</h3>
    <div id="sowo_t_g">
      <div>订单号：{{Order_number}}</div>
      <div>项目号：{{project_number}}</div>
      <div>创建时间：{{Creation_time}}</div>
      <div>入库单类型：{{Inputtype}}</div>
      <div>列号：{{Column_Number}}</div>
    </div>

    <div id="sowo_t_g_scroll">
      <div id="sowo_t_list" v-for="item in sowo_list" v-bind:key="item.id">
        <div id="sowo_t_item_l">
          <div id="sowo_t_item">零件号：{{item.Part_number}}</div>
          <div id="sowo_t_item">零件描述：{{item.Part_Description}}</div>
          <div id="sowo_t_item">序列号：{{item.serial_number}}</div>
          <div id="sowo_t_item">批次号：{{item.Batch_number}}</div>
          <div id="sowo_t_item">条码代号：{{item.Conditional_code}}</div>
          <div id="sowo_t_item">处置代码：{{item.Disposal_code}}</div>
          <div id="sowo_t_item">
            库位：
            <input style="width:70px;" type="text" v-model="item.Warehouse_location" />
          </div>
          <div id="sowo_t_item">订单数量：{{item.Order_Quantity}}</div>
          <div id="sowo_t_item">
            入库数量：
            <input style="width:50px;" type="text" v-model="item.Input_Quantity" />
          </div>
        </div>
      </div>
    </div>

    <div id="sowo_er">
      <div id="sowo_er_but_l">
        <mt-button type="primary" @click="get_er()">扫描</mt-button>
      </div>
      <div id="sowo_er_input">
        <input style="width:100% ;height:100%;" type="text" v-model="add_number" />
      </div>
    </div>
    <div id="sowo_but">
      <div id="sowo_but_l">
        <mt-button type="primary" @click="add()">添加</mt-button>
      </div>
      <div id="sowo_but_l">
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
      add_number: "",
      Order_number: "",
      project_number: "",
      Creation_time: "",
      Inputtype: "",
      Column_Number: "",
      sowo_list: "",
      list: [
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Disposal_code: "3085928",
          Warehouse_location: "B34567F",
          Order_Quantity: "168",
          Input_Quantity: "145"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Disposal_code: "3085928",
          Warehouse_location: "B34567F",
          Order_Quantity: "168",
          Input_Quantity: "145"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Disposal_code: "3085928",
          Warehouse_location: "B34567F",
          Order_Quantity: "168",
          Input_Quantity: "145"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Disposal_code: "3085928",
          Warehouse_location: "B34567F",
          Order_Quantity: "168",
          Input_Quantity: "145"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Disposal_code: "3085928",
          Warehouse_location: "B34567F",
          Order_Quantity: "168",
          Input_Quantity: "145"
        }
      ]
    };
  },
  methods: {
    get_er() {
      $App.callScan();
    },
    add() {
      this.Order_number = "234525";
      this.project_number = "545";
      this.Creation_time = "2019-04-13 12:20:33";
      this.Inputtype = "待修";
      this.Column_Number = "P78";
      this.sowo_list = this.list;
    },
    get_yes() {
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
#sowo {
  margin-left: 20px;
  margin-right: 20px;
}
#sowo_t_g {
  font-size: 13px;
  width: 100%;
  height: 90px;
}
#sowo_t_sowockbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#sowo_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 330px;
  font-size: 13px;
}
#sowo_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 190px;
}
#sowo_t_item_l {
  width: 100%;
  height: 100%;
}
#sowo_t_item {
  height: 20px;
}
#sowo_er {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
}
#sowo_er_but_l {
  display: flex;
  align-items: center;
  width: 20%;
  height: 60px;
}
#sowo_er_input {
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
}
#sowo_input {
  width: 100%;
  height: 40px;
}
#sowo_but {
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#sowo_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
