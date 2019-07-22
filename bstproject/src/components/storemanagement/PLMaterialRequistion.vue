<template>
  <div id="pl">
    <h3 style=" text-align: center;">PL领料单</h3>

    <div id="pl_t_g_scroll">
      <div id="pl_t_list" v-for="(item) in pl_list" v-bind:key="item.id">
        <div id="pl_t_item_l">
          <div id="pl_t_item_t">
            <div id="pl_item">领料单号：{{item.Receipt_number}}</div>
            <div id="pl_item">订单号：{{item.Order_number}}</div>
          </div>
          <div id="pl_t_item_t">
            <div id="pl_item">合同号：{{item.contract_number}}</div>
            <div id="pl_item">交付种类：{{item.type}}</div>
          </div>
          <div id="pl_t_item_t">
            <div id="pl_item">车号：{{item.car_number}}</div>
            <div id="pl_item">列号：{{item.Column_Number}}</div>
          </div>
          <div id="pl_t_item">上级件名称：{{item.name}}</div>
          <div id="pl_t_item_t">
            <div id="pl_item2">工区：{{item.Workplace}}</div>
            <div id="pl_item3">交付日期：{{item.Submission_time}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="pl_er">
      <div id="pl_er_but_l">
        <mt-button type="primary" @click="get_er()">扫描</mt-button>
      </div>
      <div id="pl_er_input">
        <input style="width:100% ;height:100%;" type="text" v-model="add_number" />
      </div>
    </div>
    <div id="pl_but">
      <div id="pl_but_l">
        <mt-button type="primary" @click="add()">添加</mt-button>
      </div>
      <div id="pl_but_l">
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
      add_number: "",
      pl_list: "",
      list: [
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        },
        {
          Receipt_number: "45678923",
          Order_number: "12345",
          contract_number: "Y789090",
          type: "12",
          car_number: "34",
          Column_Number: "24",
          name: "北京市",
          Workplace: "S座",
          Submission_time: "2019-2-3 12:12:12"
        }
      ]
    };
  },
  methods: {
    get_er() {
      $App.callScan();
    },
    add() {
      this.pl_list = this.list;
    },

    get_yes() {
      this.$router.push({ path: "pLMaterialRequistionDetail" });
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
#pl {
  margin-left: 20px;
  margin-right: 20px;
}
#pl_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#pl_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 110px;
}
#pl_t_item_l {
  width: 100%;
  height: 100%;
}
#pl_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#pl_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#pl_item2 {
  display: flex;
  align-items: center;
  width: 30%;
}
#pl_item3 {
  display: flex;
  align-items: center;
  width: 70%;
}
#pl_t_item {
  height: 20px;
}
#pl_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#pl_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#pl_er_input {
  margin-top: 10px;
  width: 80%;
  height: 40px;
}
#pl_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#pl_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#pl_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
