<template>
  <div id="rtn">
    <h3 style=" text-align: center;">退料单</h3>
    <div id="rtn_t_g">
      <div>退料单号：{{Return_Bill}}</div>
      <div>订单号：{{Order_number}}</div>
      <div>项目号：{{project_number}}</div>
      <div>提交时间：{{Submission_time}}</div>
    </div>

    <div id="rtn_t_g_scroll">
      <div id="rtn_t_list" v-for="(item) in rtn_list" v-bind:key="item.id">
        <div id="rtn_t_item_l">
          <div id="rtn_t_item">零件号：{{item.Part_number}}</div>
          <div id="rtn_t_item">零件描述：{{item.Part_Description}}</div>
          <div id="rtn_t_item">序列号：{{item.serial_number}}</div>
          <div id="rtn_t_item">批次号：{{item.Batch_number}}</div>
          <div id="rtn_t_item">条件代号：{{item.Conditional_code}}</div>
          <div id="rtn_t_item">
            库位：
            <input style="width:70px;7" type="text" v-model="item.Warehouse_location" />
          </div>
          <div id="rtn_t_item">
            数量：
            <input style="width:50px;7" type="text" v-model="item.Quantity" />
          </div>
        </div>
      </div>
    </div>

    <div id="rtn_er">
      <div id="rtn_er_but_l">
        <mt-button type="primary" @click="get_er()">扫描</mt-button>
      </div>
      <div id="rtn_er_input">
        <input style="width:100% ;height:100%;" type="text" v-model="add_number" />
      </div>
    </div>
    <div id="rtn_but">
      <div id="rtn_but_l">
        <mt-button type="primary" @click="add()">添加</mt-button>
      </div>
      <div id="rtn_but_l">
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
      Return_Bill: "",
      Order_number: "",
      project_number: "",
      Submission_time: "",

      rtn_list: "",
      list: [
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        },
        {
          Part_number: "78237598579",
          Part_Description: "连接器",
          serial_number: "12344",
          Batch_number: "p00",
          Conditional_code: "2190",
          Warehouse_location: "B34567F",
          Quantity: "168"
        }
      ]
    };
  },
  methods: {
    get_er() {
      $App.callScan();
    },
    add() {
      this.Return_Bill = "76868987987";
      this.Order_number = "234525";
      this.project_number = "545";
      this.Submission_time = "2019-04-13 12:20:33";
      this.rtn_list = this.list;
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
#rtn {
  margin-left: 20px;
  margin-right: 20px;
}
#rtn_t_g {
  width: 100%;
  height: 90px;
  font-size: 13px;
}
#rtn_t_g_scroll {
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 330px;
  font-size: 13px;
}
#rtn_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 150px;
}
#rtn_t_item_l {
  width: 100%;
  height: 100%;
}
#rtn_t_item {
  height: 20px;
}
#rtn_er {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
}
#rtn_er_but_l {
  display: flex;
  align-items: center;
  width: 20%;
  height: 60px;
}
#rtn_er_input {
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
}
#rtn_input {
  width: 100%;
  height: 40px;
}
#rtn_but {
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#rtn_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
